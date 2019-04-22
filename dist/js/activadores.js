setInterval(function(){

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
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#t1').html(response+"ºC");
            }
    });
    parametros['dato']=2;
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#t2').html(response+"ºC");
            }
    });
    parametros['dato']=3;
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#t3').html(response+"ºC");
            }
    });
    parametros['dato']=4;
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#t4').html(response+"ºC");
            }
    });
    pt=((parseInt($('#t4').html())+parseInt($('#t3').html())+parseInt($('#t2').html())+parseInt($('#t1').html()))/4 );
    $('#pt').html(pt);
    parametros['tabla']='humedadinternas';
    parametros['dato']=1;
    parametros['orden']='idhumedadinternas';
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#h1').html(response+" %");
            }
    });
    parametros['dato']=2;
    parametros['orden']='idhumedadinternas';
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#h2').html(response+" %");
            }
    });
    ph=((parseInt($('#h1').html())+parseInt($('#h2').html()))/2 );
    $('#ph').html(ph);
    parametros['tabla']='luzs';
    parametros['dato']=1;
    parametros['orden']='idluzs';
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#l1').html(response+"º");
            }
    });
    parametros['tabla']='gass';
    parametros['dato']=1;
    parametros['orden']='idgass';
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#g1').html(response+"º");
            }
    });
    parametros['tabla']='humos';
    parametros['dato']=1;
    parametros['orden']='idhumos';
    $.ajax({
            data:  parametros,
            url:   'Activadores/con',
            type:  'post',
            beforeSend: function () {
                    //valor=-18;
            },
            success:  function (response) {
               $('#c1').html(response+"º");
            }
    });
}, 1000);