var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 创建空行,绑定默认值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2015-12");