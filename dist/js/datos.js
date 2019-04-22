Highcharts.chart('s1', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Sensor 1'
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: -20,
        max: 60,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Tem.' 
        },
        plotBands: [
        {
            from: -20,
            to: 0,
            color: '#3498DB ' // blue
        },{
            from: 0,
            to: 20,
            color: '#55BF3B' // green
        }, {
            from: 20,
            to: 40,
            color: '#DDDF0D' // yellow
        }, {
            from: 40,
            to: 100,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [0],
        tooltip: {
            valueSuffix: ' Temp.'
        }
    }]

},
// Add some life


function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
                var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "temperaturas",
                "dato" : "1",
                "orden" : "idtemperaturas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/co',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             var valor=response;
                            //alert(valor);
                            //console.log(valor);
                            var point = chart.series[0].points[0],
                                newVal,
                                //inc = Math.round((Math.random() - 0.5) * 20);
                                //inc=10;
                            newVal = parseInt(valor);
                            //newVal=10;
                            if (newVal < -20 || newVal > 60) {
                                newVal = point.y - inc;
                            }
                            point.update(newVal);
                    }
            });

            
        }, 1000);
    }
});
Highcharts.chart('s2', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Sensor 2'
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: -20,
        max: 60,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Tem.' 
        },
        plotBands: [
        {
            from: -20,
            to: 0,
            color: '#3498DB ' // blue
        },{
            from: 0,
            to: 20,
            color: '#55BF3B' // green
        }, {
            from: 20,
            to: 40,
            color: '#DDDF0D' // yellow
        }, {
            from: 40,
            to: 100,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [0],
        tooltip: {
            valueSuffix: ' Temp.'
        }
    }]

},
// Add some life
function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
                var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "temperaturas",
                "dato" : "2",
                "orden" : "idtemperaturas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/co',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             var valor=response;
                            //alert(valor);
                            //console.log(valor);
                            var point = chart.series[0].points[0],
                                newVal,
                                //inc = Math.round((Math.random() - 0.5) * 20);
                                //inc=10;
                            newVal = parseInt(valor);
                            //newVal=10;
                            if (newVal < -20 || newVal > 60) {
                                newVal = point.y - inc;
                            }
                            point.update(newVal);
                    }
            });

            
        }, 1000);
    }
});
Highcharts.chart('s3', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Sensor 3'
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: -20,
        max: 60,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Tem.' 
        },
        plotBands: [
        {
            from: -20,
            to: 0,
            color: '#3498DB ' // blue
        },{
            from: 0,
            to: 20,
            color: '#55BF3B' // green
        }, {
            from: 20,
            to: 40,
            color: '#DDDF0D' // yellow
        }, {
            from: 40,
            to: 100,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [0],
        tooltip: {
            valueSuffix: ' Temp.'
        }
    }]

},
// Add some life
function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "temperaturas",
                "dato" : "3",
                "orden" : "idtemperaturas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/co',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             var valor=response;
                            //alert(valor);
                            //console.log(valor);
                            var point = chart.series[0].points[0],
                                newVal,
                                //inc = Math.round((Math.random() - 0.5) * 20);
                                //inc=10;
                            newVal = parseInt(valor);
                            //newVal=10;
                            if (newVal < -20 || newVal > 60) {
                                newVal = point.y - inc;
                            }
                            point.update(newVal);
                    }
            });

            
        }, 1000);
    }
});
Highcharts.chart('s4', {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Sensor 4'
    },
    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: -20,
        max: 60,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Tem.' 
        },
        plotBands: [
        {
            from: -20,
            to: 0,
            color: '#3498DB ' // blue
        },{
            from: 0,
            to: 20,
            color: '#55BF3B' // green
        }, {
            from: 20,
            to: 40,
            color: '#DDDF0D' // yellow
        }, {
            from: 40,
            to: 100,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [0],
        tooltip: {
            valueSuffix: ' Temp.'
        }
    }]

},
// Add some life

function (chart) {
    if (!chart.renderer.forExport) {
        setInterval(function () {
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "temperaturas",
                "dato" : "4",
                "orden" : "idtemperaturas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/co',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             var valor=response;
                            //alert(valor);
                           // console.log(valor);
                            var point = chart.series[0].points[0],
                                newVal,
                                //inc = Math.round((Math.random() - 0.5) * 20);
                                //inc=10;
                            newVal = parseInt(valor);
                            //newVal=10;
                            if (newVal < -20 || newVal > 60) {
                                newVal = point.y - inc;
                            }
                            point.update(newVal);
                    }
            });

            
        }, 1000);
    }
});
/////////////////humeddad
//setInterval(function(){
  Highcharts.setOptions({
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});

                    /*
                    var chart= Highcharts.chart('h', {
                                  title: {
                                      text: 'Control de Humedad Extrenas'
                                  },
                                  
                                  subtitle: {
                                      text: 'Source: thesolarfoundation.com'
                                  },

                                  yAxis: {
                                      title: {
                                          text: 'Number of Employees'
                                      }
                                  },
                                  xAxis: {
                                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                  },
                                  legend: {
                                      layout: 'vertical',
                                      align: 'right',
                                      verticalAlign: 'middle'
                                  },

                                  plotOptions: {
                                      series: {
                                          animation: true
                                      }
                                  },
                                  series: [{
                                      name: 'Sensor 1',
                                      data: [0, 0, 0, 0, 0, 0, 0, 0]
                                  }, {
                                      name: 'Sensor 2',
                                      data: [0, 0, 0, 0, 0, 0, 0, 0]
                                  }, {
                                      name: 'Sensor 3',
                                      data: [0, 0, 0, 0, 0, 0, 0, 0]
                                  }, {
                                      name: 'Sensor 4',
                                      data: [0, 0, 0, 0, 0, 0, 0, 0]
                                  }]

                              });
                   $('#toggle-opposite').click(function () {
                      chart.series[1].update({
                          data: [43, 52, 57, 69, 97, 11, 13, 15]
                      });
                  });
                    */
setInterval(function(){
  var valor=[43, 52, 57, 69, 97, 11, 13,10,];
  var num=[43, 52, 57, 69, 97, 11, 13,10,];
  //valor=valor+10;
  /*
  var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadexternas",
                "dato" : "1",
                "orden" : "idhumedadexternas"   
            };
            //valor=-20;
  
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                             }
                            //alert(num);
                             chart.series[0].update({
                                data: num
                              });
                    }
            });*/
            /*
  var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadexternas",
                "dato" : "2",
                "orden" : "idhumedadexternas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                             }
                            //alert(num);
                             chart.series[1].update({
                                data: num
                              });
                    }
            });
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadexternas",
                "dato" : "3",
                "orden" : "idhumedadexternas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                             }
                            //alert(num);
                             chart.series[2].update({
                                data: num
                              });
                    }
            });
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadexternas",
                "dato" : "4",
                "orden" : "idhumedadexternas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                             }
                            //alert(num);
                             chart.series[3].update({
                                data: num
                              });
                    }
            });
            */
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadinternas",
                "dato" : "1",
                "orden" : "idhumedadinternas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                             }
                            //alert(num);
                             hi.series[0].update({
                                data: num
                              });
                    }
            });
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "humedadinternas",
                "dato" : "2",
                "orden" : "idhumedadinternas"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                               //alert(num);
                             }
                            //alert(num);
                             hi.series[1].update({
                                data: num
                              });
                    }
            });
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "luzs",
                "dato" : "1",
                "orden" : "idluzs"   
            };
            //valor=-20;
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/con',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                             valor= response.split(" ");
                             //valor=parseInt(valor);
                             //alert(valor);
                             for (var i = 0; i<8; i++) {
                               num[i] =parseInt( valor[i]);
                               //alert(num);
                             }
                            //alert(num);
                             l.series[0].update({
                                data: num
                              });
                    }
            });
            var parametros = {
                "mostrar" : "dato",
                "where" : "sensor",
                "tabla" : "gass",
                "dato" : "1",
                "orden" : "idgass"   
            };
            $.ajax({
                    data:  parametros,
                    url:   'Welcome/co',
                    type:  'post',
                    beforeSend: function () {
                            //valor=-18;
                    },
                    success:  function (response) {
                      //console.log(response);
                      var gas= parseInt(response);
                      var parametros = {
                          "mostrar" : "dato",
                          "where" : "sensor",
                          "tabla" : "humos",
                          "dato" : "1",
                          "orden" : "idhumos"   
                      };
                      $.ajax({
                              data:  parametros,
                              url:   'Welcome/co',
                              type:  'post',
                              beforeSend: function () {
                                      //valor=-18;
                              },
                              success:  function (response) {
                                var co= parseInt(response);
                                g.series[0].update({
                                    data: [ {
                                            name: 'GAS',
                                            y: gas
                                        },{
                                            name: 'CO',
                                            y: co
                                        }]
                                });
                              }
                      });
                    }
            });

  //alert(valor);
  
}, 1000);
//}, 1000);    
/////////////////// humedad interna
var hi= Highcharts.chart('hi', {
              title: {
                  text: 'Control de Humedad Internas'
              },
              legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'middle'
              },
              series: [{
                  name: 'Sensor 1',
                  data: [0, 0, 0, 0, 0, 0, 0, 0]
              }, {
                  name: 'Sensor 2',
                  data: [0, 0, 0, 0, 0, 0, 0, 0]
              }]

          });
////////////////luz
var l= Highcharts.chart('l', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Sensor de luz'
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
                  name: 'Sensor 1',
                  data: [0, 0, 0, 0, 0, 0, 0, 0]
              }]/*
    series: [{
        name: 'Tokyo',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            }
        }, 23.3, 18.3, 13.9, 9.6]

    }, {
        name: 'London',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 3.9,
            marker: {
                symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            }
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]*/
});        
Highcharts.setOptions({
    colors: ['#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
var g=Highcharts.chart('g', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sensores de GAS y CO'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
      /*
    series: [{
        name: 'Sensor 1',
        data: [12]
    }, {
        name: 'Sensor 2',
        data: [11]
    }]
    */
    series: [{
    name: 'Dato',
    colorByPoint: true,
    data: [ {
            name: 'GAS',
            y: 10
        }, {
            name: 'CO',
            y: 10
        }]
    }]

});   