var msgBtn = document.body.querySelector("#msgBtn");
var errorBtn = document.body.querySelector("#errorBtn");
var warnBtn = document.body.querySelector("#warnBtn");
//var rightInfo='<i class="uf uf-correct margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:"新信息",position:"bottomleft",width:"440px"})
})

//var errorInfo='<i class="uf uf-close-c margin-r-5"></i>错误信息!!!'
u.on(errorBtn,'click', function(){ 
    u.showMessage({msg:"有错误",position:"bottomright",msgType:"error",width:"440px"})
})

//var warningInfo='<i class="uf uf-exc-t-o margin-r-5"></i>警告信息!!!';
u.on(warnBtn,'click', function(){ 
    u.showMessage({msg:"有警告",position:"topright",msgType:"warning",width:"440px"})
})