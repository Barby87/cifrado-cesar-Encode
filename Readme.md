Cifrado César

Introduction
Instrucciones de uso: Al abrir la página aparecerá un área donde dice: "ingresa tu mensaje secreto aquí", aquí debes ingresar el mensaje que quieres cifrar o decifrar. Debes ingresar en el cuadro de abajo la cantidad de espacios que quieres que se desplace el alfabeto para obtener el mensaje final, das click en el botón CIFRAR o DECIFRAR, según sea el caso, y aparecerá el mensaje final en el área de abajo. Para cifrar o decifrar un nuevo mensaje simplemente borra el mensaje de arriba y sigue los pasos anteriores dando click a uno de los dos botones.

Code Samples
<body>

  <header>
    <h1><strong>Bienvenid@ a Encode</strong></h1>
  </header>

  <section id="encode">
    <div>
      <h2><strong>¿Qué quieres cifrar?</strong></h2>
    </div> 

    <div>
        <textarea id="messageOne" type="text" cols="50" rows="10" placeholder="Ingresa tu mensaje secreto aquí"></textarea>
    </div>

    <div>    
    <h3><strong>Ingresa la cantidad de letras a desplazar:</strong></h3>
    <input type="number" id="numb" min="1" max="40">
    <button id="btnCifrar">CIFRAR</button>
    <button id="btnDecifrar">DECIFRAR</button>
    </div>


Installation

Modo de descarga de la aplicación: Para poder descargar la aplicación debes seguir lps siguientes pasos:

1. En PC/Mis documentos crear una carpeta con el nombre del repositorio scl-2018-05-bc-core-am
2. En el navegador ir a la siguiente página: https://github.com/Barby87/scl-2018-05-bc-core-am
3. Hacer click en "clone or download", se generará un link del repositorio.
4. Abrir consola de gitbash y posicionar la carpeta creada en Mis documentosr ($cd y arrastrar carpeta, poner un espacio y pegar el link generado en el paso 3, apretar Enter y cerrar consola.
Ir a Mis documentos/scl-2018-05-bc-core-am/src/ y abrir el archivo index.html para ver la página en el navegador.