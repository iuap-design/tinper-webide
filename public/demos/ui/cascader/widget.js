var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {}
        }
    }),
};
var data = [{
        value: "01",
        name: '浙江',
        children: [{
            value: "11",
            name: '杭州',
            children: [{
                value: "21",
                name: '西湖',
                children: [{
                        value: "31",
                        name: '白娘子'
                    },
                    {
                        value: "32",
                        name: '许仙'
                    }
                ]
            }]
        }]
    },
    {
        value: "02",
        name: '江苏',
        children: [{
            value: "12",
            name: '南京',
            children: [{
                value: "22",
                name: '中华门'
            }]
        }]
    },
    {
        value: "03",
        name: '山东'
    }
];

app = u.createApp({
    el: 'body',
    model: viewModel
});
document.getElementById('demoId')['u.Cascader'].setData(data);
document.getElementById('demoId1')['u.Cascader'].setData(data);
//设置默认选中的值
// document.getElementById('demoId')['u.Cascader'].setValue("02,12,22");
// document.getElementById('demoId1')['u.Cascader'].setValue("02,12,22");
