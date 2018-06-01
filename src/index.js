
    let input = document.getElementById('input'); //caja de texto
    let desplazamiento = document.getElementById('desplazamiento'); //caja de desplazamiento
    let encode = document.getElementById('cipher');//boton encriptar
    let decode = document.getElementById('decipher');//boton desencriptar
    let result = document.getElementById('result'); //limpiar
    //let salida = document.getElementById('salida');

  encode.addEventListener('click', () => {
    console.log('entre al click');

    let inputWord = input.value;
    let inputnumber = desplazamiento.value;
    console.log(inputWord);
    console.log(inputnumber);
    result.innerHTML = cipher.encode(inputnumber,inputWord) ;
  });

  decode.addEventListener('click', () => {
    let inputWord = input.value; // variable para la salida de la palabra encriptada

    result.innerHTML = 'El texto desencriptado es <br/>: ' + output;  /* resultado*/  
  });