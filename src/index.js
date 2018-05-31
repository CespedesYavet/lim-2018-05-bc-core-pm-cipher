window.addEventListener('load', () => {
    /* variables*/
    let input = document.getElementById('input');
    let desplazamiento = document.getElementById('desplazamiento');
    let encode = document.getElementById('cipher');
    let decode = document.getElementById('decipher');
    let result = document.getElementById('result');
    //let salida = document.getElementById('salida');
   
    /* función para encriptar una palabra*/
    encode.addEventListener('click', () => {
      var inputWord = input.value;
      if (inputWord.match(/[a-zA-Z]/)) { //obtener todas las ocurrencias de una expresión dentro de una cadena.
        
        let output = ''; // variable para la salida de la palabra encriptada*/
        for (let i = 0; i < inputWord.length;i++) { // recorrido dentro de la palabra ingresada
          let code = inputWord.charCodeAt(i); // variable en donde se convierte la letra en codigo ascii
          let code2 = inputWord[i]; // variable que guarda la conversion de codigo ascii a letra
          if ((code >= 65) && (code <= 90)) { // analizando las letras mayusculas A= 65 Y Z= 90
            code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65); //ejcutar los 33espacios y cnvtirndo ascii a letra
          } else if ((code >= 97) && (code <= 122)) {//Analizar letras minus a= 97 y z=122 y ejecutar 33 espacios
            code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97); //ejcutar los 33espacios y cnvtirndo ascii a letra
          }
          output += code2; // salida de la palabra encriptada
        }
        result.classList.remove('hide'); /* Resultado*/
        result.innerHTML = 'El texto encriptado es <br/>: ' + output ;
      } else {
        alert('Ingres una palabra');
      }
    });
    decode.addEventListener('click', () => {/* $('#desencriptar').click(function() {*/
        let inputWord = input.value;// variable para la salida de la palabra encriptada
        let output = '';// recorrido dentro de la palabra ingresada
        for (let i = 0; i < inputWord.length;i++) {// variable en donde se convierte la letra en codigo ascii
          let code = inputWord.charCodeAt(i);// variable que guarda la conversion de codigo ascii a letra
          let code2 = inputWord[i];// analizando las letras mayusculas A= 65 Y Z= 90
          if ((code >= 65) && (code <= 90)) {// ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
            code2 = String.fromCharCode(((code - 65 - 33 + 26 * 2) % 26) + 65);
          } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
            code2 = String.fromCharCode(((code - 97 - 33 + 26 * 2) % 26) + 97);
          };
          output += code2; // salida de la palabra encriptada
        };
        result.innerHTML = 'El texto desencriptado es <br/>: ' + output ;  /* resultado*/
      });
      let eraser = document.getElementById('clearbutton'); /* función para limpiar la entrada*/
      eraser.addEventListener('click', () => {
        input.value = ''; /* borrar el campo.*/
      });
    });