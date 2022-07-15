
/* function alerta1() {
    Swal.fire({
        imageUrl: './Imagenes/invitacion.gif',
        imageWidth: 100,
        imageHeight: 100,
        text:'a la boda de Delia y Santiago',
        title:'Haz sido invitado',
        confirmButtonText: 'Abrir',
    });
}
alerta1(); */
 
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 15, 2023 12:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)


/*     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      //location.href ="http://www.weddingfy.online/vermuestra"; 
      console.log('ok');
  }
      else{      
   location.href ="https://www.weddingfy.online/vermovil.html"; 
  } */