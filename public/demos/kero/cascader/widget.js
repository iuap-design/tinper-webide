var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {},
            f2: {}
        }
    }),
    ss: [{
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
    ]
};


app = u.createApp({
    el: 'body',
    model: viewModel
});
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "02,12,22");
r.setValue('f2', "02,12,22");
viewModel.dt1.setRowSelect(0);
