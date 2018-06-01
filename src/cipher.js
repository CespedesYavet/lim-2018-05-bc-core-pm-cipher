window.cipher={
    encode:function(offset,inputWord){
        let output = '';
        if (inputWord.match(/[A-Z]/)) { //obtener todas las ocurrencias de una expresión dentro de una cade
            // variable para la salida de la palabra encriptada*/
            for (let i = 0; i < inputWord.length;i++) { // recorrido dentro de la palabra ingresada
                let code = inputWord.charCodeAt(i); // variable en donde se convierte la letra en codigo ascii
                let code2 = inputWord[i]; // variable que guarda la conversion de codigo ascii a letra
                if ((code >= 65) && (code <= 90)) { // revisa letras mayusculas A= 65 - Z= 90
                code2 = String.fromCharCode(((code - 65 + parseInt(offset) % 26) + 65)); //ejcutar espacios y cnvtirndo ascii a letra
                } 
                output += code2; // salida de la palabra encriptada
            }
        }
        return output;
    },

    decode:function(offset,inputWord){
        if (inputWord.match(/[A-Z]/)) { //obtener todas las ocurrencias de una expresión dentro de una cade
        let output = '';
          for (let i = 0; i < inputWord.length;i++) { // recorrido dentro de la palabra ingresada
            let code = inputWord.charCodeAt(i); // variable en donde se convierte la letra en codigo ascii
            let code2 = inputWord[i]; // variable que guarda la conversion de codigo ascii a letra
            if ((code >= 65) && (code <= 90)) {// analizando las letras mayusculas A= 65 Y Z= 90
              code2 = String.fromCharCode(((code - 65 - desplazamiento.value + 26 * 2) % 26) + 65);// ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
            };
            output += code2; // salida de la palabra encriptada
            };    
        }
    }
};
   

console.log(cipher.encode(33, 'ABC'));