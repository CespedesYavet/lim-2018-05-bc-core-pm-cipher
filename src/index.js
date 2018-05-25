function encrypt(){
    var  data = document.getElementById("data").value,
     key = document.getElementById("key").value;
   
    var encrypted = crypt(data,key);
    document.getElementById("encrypted").value=encrypted;
   
    var encrypted = crypt(data,key);
    document.getElementById("encrypted_ASCII").value=HTA(encrypted);
   
    var decrypted = crypt(encrypted,key);
    document.getElementById("decrypted").value=decrypted;
   }
   function crypt(data,key) {
    var crypted="";
    for( var i=0; i<data.length; i++ ){
     crypted+=String.fromCharCode(data.charCodeAt(i)^key.charCodeAt(i%key.length));
    };
    return crypted;
   }
   function ATH(s) { 
       // Convierte una cadena ASCII to HEX
     for (var ath="", i=0; i<s.length-1; i+=2) {
       ath += String.fromCharCode(parseInt(s.substr(i,2),16));
     }
     return ath;
   }
   
   function HTA(s) { // Convierte una cadena HEX a ASCII
     for (var hta="", i=0; i<s.length; i++) {
       var z = "0"+s.charCodeAt(i).toString(16).toUpperCase();
       hta += z.substr(z.length-2,2);
     }
     return hta;
   }