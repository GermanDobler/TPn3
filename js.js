/*
Crear un elemento: document.createElement(´etiqueta´) 
Escribir texto en un elemento: element.textContent = texto
Añadir el elemento creado al HTML: parent.appendChild(element)*/
var div1 = document.createElement('div');
var div = document.createElement('div'); /*Creé la etiqueta <div></div>*/
var subtitulo = document.createElement('h2');/*Creé la etiqueta <h2></h2>*/
var subtitulo1 = document.createElement('h2');/*Creé la etiqueta <h2></h2>*/
subtitulo.innerHTML = 'Aca solo TEXTO';/*En esta solo estoy escribiendo TEXTO*/
subtitulo1.innerHTML = '<p class="parrafo">maradona</p>'; 
div.innerHTML = '<h1 class="titulo">Aca con etiquetas que no se ven por el innerHTML</h1>';/*En esta etiqueta defino que quiero poner texto y que entienda las etiquetas de HTML*/
body.appendChild(div);/*En esta estoy diciendo que en la etiqueta padre que se llama body por su ID, le introduzco la etiqueta que creé anterior-mente */
div.appendChild(subtitulo);/*En esta puse el elemento h2 dentro del el elemento padre DIV */
body.appendChild(div1);
div1.appendChild(subtitulo1);




