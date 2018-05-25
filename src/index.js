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
  