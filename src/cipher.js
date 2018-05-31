window.cipher = {
  encode: (cipherText, numbToMove) => {
    let result = "";
    for (let i = 0; i < cipherText.length; i++) {
      let letter = (cipherText.charCodeAt(i) - 65 + numbToMove) % 26 + 65;
      result += String.fromCharCode(letter);
      console.log(result);    
  }

  return result;    

  },

  decode: () => {
    /* Acá va tu código */
  }
}