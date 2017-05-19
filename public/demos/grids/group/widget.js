viewModel = {
    dataTable: new u.DataTable({
      meta: {
        "name": "",
        "time": "",
        "distance": "",
        "currency": ""
      }
    }, this),
  };
  var app = new u.createApp();
  //console.log(viewModel)
  app.init(viewModel);
  var data = {
      "pageIndex": 1,
      "pageSize": 10,
      "rows": [{
          "status": "nrm",
          "data": {
              "name": "赵四",
              "time": "2016-05-16",
              "distance": "253",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "王一",
              "time": "2016-05-12",
              "distance": "253",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "李三",
              "time": "2016-11-16",
              "distance": "503",
              "currency": "300.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "彰武",
              "time": "2012-05-16",
              "distance": "503",
              "currency": "300.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "赵四",
              "time": "2016-05-16",
              "distance": "251",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "王一",
              "time": "2016-05-12",
              "distance": "251",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "李三",
              "time": "2016-11-16",
              "distance": "501",
              "currency": "300.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "彰武",
              "time": "2012-05-16",
              "distance": "501",
              "currency": "300.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "赵四",
              "time": "2016-05-16",
              "distance": "254",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "王一",
              "time": "2016-05-12",
              "distance": "254",
              "currency": "200.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "李三",
              "time": "2016-11-16",
              "distance": "504",
              "currency": "300.00"
          }
      }, {
          "status": "nrm",
          "data": {
              "name": "彰武",
              "time": "2012-05-16",
              "distance": "504",
              "currency": "300.00"
          }
      }]
  }
  viewModel.dataTable.removeAllRows();
  viewModel.dataTable.setData(data);
