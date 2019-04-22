<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="dist/favicon.ico">
    <title>Menu principal de Monitoreo</title>
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="dist/css/font-awesome.min.css">
    <link href="dist/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="dist/css/dashboard.css" rel="stylesheet">
    <link href="dist/css/style.css" rel="stylesheet"> 
    <script src="dist/js/ie-emulation-modes-warning.js"></script>
    <!--script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script-->
    
   <script type="text/javascript">
      /*google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Temperatura', 80]
        ]);
        var options = {
          width: 200, height: 200,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };
        var chart = new google.visualization.Gauge(document.getElementById('t1'));
        chart.draw(data, options);
        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 1000);
      }*/
    </script>
  </head>
  <body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand menu" href="#"><i class="fa fa-envira" aria-hidden="true"></i> FLORE</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="<?= base_url()?>" class="menu"><i class="fa fa-server" aria-hidden="true"></i> Sensores</a></li>
            <li><a href="activadores" class="menu"><i class="fa fa-cogs" aria-hidden="true"></i> Activadores</a></li>
            <li><a href="historial" class="menu"><i class="fa fa-file" aria-hidden="true"></i> Historial</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="<?= $container ?>">