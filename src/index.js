window.onload = () => {

//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click
btnCifrar.addEventListener('click', function() {
  let cipherText = document.getElementById("encodeText").value;
  console.log(cipherText);

  let numbToMove = document.getElementById("numb").value;
  console.log(numbToMove);
  
  let decodeText = document.getElementById("decodeText").value;

  //window.cipher.encode(cipherText, numbToMove);

  decodeText = window.cipher.encode(cipherText, numbToMove);


});
btnDecifrar.addEventListener('Click', function() {

    
});


}