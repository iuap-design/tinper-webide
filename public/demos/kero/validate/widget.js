$(document).ready(function () {
    // 创建viewModel,包含dataTable以及grid中使用的function变量
    viewModel = {
        dictTypeDa: new u.DataTable({
            meta: {
                //主键
                dictId: {type: 'string'},
                //编码
                dictTypeCode: {
                    type: 'string',
                    required: true,
                    nullMsg: '字典类型编码不能为空!'
                },
                //名称
                dictTypeName: {
                    type: 'string',
                    required: true,
                    nullMsg: '字典类型名称不能为空!'
                },
                //备注信息
                remark: {
                    type: 'string'
                },
                //创建人
                creator: {
                    type: 'string'
                },
                //创建时间
                createTime: {
                    type: 'string'
                }
            }
        }),
        dt1: new u.DataTable({
            meta: {
                code: {type: 'string', required: true, notipFlag: true, hasSuccess: true},
                name: {
                    type: 'string', required: true, maxLength: 8, minLength: 3, notipFlag: true,
                    hasSuccess: true
                },
                gateway: {type: 'string'}
            }
        })
    },

        // 创建APP
        app = u.createApp({
            el: 'body',
            model: viewModel
        });
    // 添加数据到dataTable中
    var data = [{
        dictId: "11",
        //编码
        dictTypeCode: "22",
        //名称
        dictTypeName: "33",
        //是否固定(系统预置)
        remark: "N"
    }, {
        dictId: "11",
        //编码
        dictTypeCode: "22",
        //名称
        dictTypeName: "33",
        //是否固定(系统预置)
        remark: "N"
    }, {
        dictId: "11",
        //编码
        dictTypeCode: "22",
        //名称
        dictTypeName: "33",
        //是否固定(系统预置)
        remark: "N"
    }]
    viewModel.dictTypeDa.removeAllRows();
    viewModel.dictTypeDa.setSimpleData(data);
    var r = viewModel.dt1.createEmptyRow();
});