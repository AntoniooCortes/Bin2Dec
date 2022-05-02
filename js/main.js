function parrafos() {
   var infonum = document.getElementById('infonum')
   var infonum2 = document.getElementById('infonum2')
   var numero = document.getElementById('numero').value
   var calculando = document.getElementById('calculando')
   calculando.innerHTML = parseInt(numero, 2);
   var ultimodigito = numero.charAt(numero.length - 1)
   if (numero == '') {
       calculando.innerHTML = ''
   }
   if (ultimodigito == 0 || ultimodigito == 1) {
       infonum2.innerHTML = 'Es binario'
       infonum.innerHTML = ''
   } else {
       calculando.innerHTML = 'No binario ...'
   }
   if (ultimodigito >> 1 || ultimodigito >> 99999) {
       infonum.innerHTML = ' Solo puedes escribir 1 o 0'
       infonum2.innerHTML = ''
   }
   if (ultimodigito == '') {
       infonum.innerHTML = ''
       infonum2.innerHTML = ''
   }
}