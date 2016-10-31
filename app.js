var fs = require('fs');
var path = require('path');

var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var koaBody = require('koa-body');
var gzip = require('koa-gzip');

var app = koa();
var routes = require('./routes');

routes.setRouters(router, '.');

app.use(gzip());

app.use(koaBody({
  formidable: {uploadDir: __dirname},
  textLimit: '50mb',
  formLimit: '50mb'
}));

app.use(router.routes())
  .use(router.allowedMethods());

app.use(function *(next){
  if (this.request.url === '/') {
    this.body = fs.readFileSync(path.resolve(__dirname, './public/index.html')).toString();
  } else {
    return yield* next;
  }
});

app.use(serve(path.join(__dirname, './public')));

app.listen( 8000 );

console.log('server started at http://localhost:8000');
