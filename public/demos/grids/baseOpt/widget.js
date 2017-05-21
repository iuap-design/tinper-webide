 viewModel = {
        index: -1, //-1表示增加，大于0表示修改的行索引
        dialog: null, //存放模态框
        listDataTable: new u.DataTable({
            meta: {
                "name": "",
                "time": {
                   "type": "datetime",
                   "format":"YYYY-MM-DD"
                },
                "distance": "",
                "currency": "",
                "operate": ""
            }
        }),
        formDataTable: new u.DataTable({
            meta: {
                "name": "",
                "time": {
                    "type": "datetime",
                    "format":"YYYY-MM-DD"
                },
                "distance": "",
                "currency": "",
                "operate": ""
            }
        }),
        //定义操作列的内容
        optFun: function(obj) {
            var delfun = "data-bind=click:del.bind($data," + obj.rowIndex + ")";
            var editfun = "data-bind=click:beforeEdit.bind($data," + obj.rowIndex + ")";
            obj.element.innerHTML = '<div><i class="op uf uf-pencil" title="修改"' + editfun + '></i>' + '<i class=" op icon uf uf-del title="删除" ' + delfun + '></i></div>';
            ko.applyBindings(viewModel, obj.element);
        },
        //删除操作
        del: function(index) {
            //请求后端删除对应的数据；
            // index为数据下标
            viewModel.listDataTable.removeRow(index);
        },
        beforeEdit: function(index) {
            var self = this;
            viewModel.index = index;
            if (index >= 0) {
                //修改操作
                var currentData = viewModel.listDataTable.getSimpleData()[index];
                viewModel.formDataTable.setSimpleData(currentData);
            } else {
                //添加操作
                viewModel.formDataTable.removeAllRows();
                viewModel.formDataTable.createEmptyRow();
            }
            //显示模态框
            //如果模态框不存在创建模态框，存在则直接显示
            if (!viewModel.dialog) {
                viewModel.dialog = u.dialog({
                    id: 'testDialg',
                    content: "#dialog_content",
                    hasCloseMenu: true,
                    width: "1000px;",
                    height: "500px"
                });
                $('.u-msg-dialog').css('width', '80%');

                var okButton = document.body.querySelector(".u-msg-ok");
                u.on(okButton, 'click', function() {
                    viewModel.edit(viewModel.index);
                    viewModel.dialog.close();
                });

                var cancelButton = document.body.querySelector(".u-msg-cancel");
                u.on(cancelButton, 'click', function() {
                    viewModel.dialog.close();
                });
            } else {
                viewModel.dialog.show();
            }


        },
        //将操作后的数据进行保存
        edit: function(index) {
            //更改后台数据

            var currentRow;
            //如果index大于等于0说明是修改
            if (index >= 0) {
                //获取需要修改的行
                currentRow = viewModel.listDataTable.getRow(index);
                //将用户填写的数据更新到listDataTable上
                currentRow.setSimpleData(viewModel.formDataTable.getSimpleData()[0]);
            } else {
                //添加数据
                viewModel.listDataTable.addSimpleData(viewModel.formDataTable.getSimpleData()[0]);
            }

        }
    };
    var app = new u.createApp();
    app.init(viewModel);
    var data = [{
        "name": "赵四",
        "time": "2016-05-16",
        "distance": "25",
        "currency": "200.00"
    }, {
        "name": "王一",
        "time": "2016-05-12",
        "distance": "25",
        "currency": "200.00"
    }, {
        "name": "李三",
        "time": "2016-11-16",
        "distance": "50",
        "currency": "300.00"
    }, {
        "name": "彰武",
        "time": "2012-05-16",
        "distance": "50",
        "currency": "300.00"
    }];

    viewModel.listDataTable.setSimpleData(data);