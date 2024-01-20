`use strict`

//2. Separar por palabras y mostrar cuantas palabras tiene la siguiente frase:
let phrase = 'La programación web es fundamental para el progreso';

let wordsArray = phrase.split (' ');
alert (wordsArray);
alert (wordsArray.length);

//3. En base al resultado del ejercicio anterior agrupar en un array únicamente las palabras que tengan mas de 3 letras.
let more3Letras = wordsArray.filter(wordsArray => wordsArray.length > 3);
alert (more3Letras);

