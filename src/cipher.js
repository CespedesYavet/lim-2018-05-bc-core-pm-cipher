window.cipher={
    encode:function(offset,string){
        let output = '';
        if (string.match(/[A-Za-z]/)) { //obtener todas las ocurrencias de una expresión dentro de una cade
            // variable para la salida de la palabra encriptada*/
            for (let i = 0; i < string.length;i++) { // recorrido dentro de la palabra ingresada
                let code = string.charCodeAt(i); // variable en donde se convierte la letra en codigo ascii
                let code2 = string[i]; // variable que guarda la conversion de codigo ascii a letra
                if ((code >= 65) && (code <= 90)) { // revisa letras mayusculas A= 65 - Z= 90
                    code2 = String.fromCharCode(((code - 65 + parseInt(offset) % 26) + 65)); //ejcutar espacios y cnvtirndo ascii a letra
                }
                else if ((code >= 97) && (code <= 122)) {//Analizar letras minus a= 97 y z=122 y ejecutar 33 espacios
                    code2 = String.fromCharCode(((code - 97 + parseInt(offset)) % 26) + 97); //ejcutar los 33espacios y cnvtirndo ascii a letra
                }
                output += code2; // salida de la palabra encriptadas
            }
        }
        else{
            alert('Ingrese la palabra a cifrar');
        }
        return output;
    },
    decode:function(offset,string){
        let output = '';
        if (string.match(/[A-Za-z]/)) { //obtener todas las ocurrencias de una expresión dentro de una cade
            for (let i = 0; i < string.length;i++) { // recorrido dentro de la palabra ingresada
                let code = string.charCodeAt(i); // variable en donde se convierte la letra en codigo ascii
                let code2 = string[i]; // variable que guarda la conversion de codigo ascii a letra
                if ((code >= 65) && (code <= 90)) {// analizando las letras mayusculas A= 65 Y Z= 90
                    code2 = String.fromCharCode(((code - 65 - parseInt(offset) + 26 * 2) % 26) + 65);// ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
                }
                else if ((code >= 97) && (code <= 122)) {// analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
                    code2 = String.fromCharCode(((code - 97 - parseInt(offset) + 26 * 2) % 26) + 97);
                }
                output += code2; // salida de la palabra encriptada
            }
        }
        else{
            alert('Ingrese ingrese la palabra a decifrar');
        }
        return output;
    }
};
   //console.log(cipher.encode(33, 'ABC'));
