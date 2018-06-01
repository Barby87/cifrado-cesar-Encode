window.cipher = {
  encode: (textToEncode, numbToMove) => {
    let result = "";
    for (let i = 0; i < textToEncode.length; i++) {

      //Fórmula para posicionar la letra dentro del código ASCII
      let letter = (textToEncode.charCodeAt(i) - 65 + parseInt(numbToMove)) % 26 + 65;

      //Concatenando letras codificadas
      result += String.fromCharCode(letter);
    }

    return result;

  },

  decode: (textToDecode, numbToMove) => {
    let result = "";
    for (let i = 0; i < textToDecode.length; i++) {

      //Fórmula para posicionar la letra dentro del alfabeto  
      let letter = (textToDecode.charCodeAt(i) + 65 - parseInt(numbToMove)) % 26 + 65;

      //Concatenando las letras decodificadas
      result += String.fromCharCode(letter);

    }

    return result;

  }
}