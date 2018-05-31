window.onload = () => {

//Variables botones
const btnCifrar = document.getElementById("btnCifrar");
const btnDecifrar = document.getElementById("btnDecifrar");

//Evento click CIFRAR

btnCifrar.addEventListener('click', () => {
  let textToEncode = document.getElementById("messageOne").value.toUpperCase();
  console.log(textToEncode);

  let numbToMove = document.getElementById("numb").value;
  console.log(numbToMove);

  let encodedText =  window.cipher.encode(textToEncode, numbToMove);
  
  document.getElementById("messageTwo").value = encodedText;
  
});

//Evento Click DECIFRAR

btnDecifrar.addEventListener('click', () => {

  let textToDecode = document.getElementById("messageOne").value.toUpperCase();
  console.log(textToDecode);

  let numbToMove = document.getElementById("numb").value;
  console.log(numbToMove);
  
  let decodedText = window.cipher.decode(textToDecode, numbToMove);
  
  document.getElementById("messageTwo").value = decodedText;

});

}