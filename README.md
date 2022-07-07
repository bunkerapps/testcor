# Diego S. Pacheco

Test COR.

1. The code is in 
```js
/app/Controllers/Http/PrincipalController
```
2. The route "/" (home) espects a body parameter call data.
Example: ```js
127.0.0.1:3333?data=['chair', 'height', 'racket', 'touch', 'tunic']
```

Inglés:
Given a list of words, determine whether the words can be chained to form a circle. A word X
can be placed in front of another word Y in a circle if the last character of X is the same as
the first character of Y.
For example, the words ['chair', 'height', 'racket', touch', 'tunic'] can form the following circle:
chair --> racket --> touch --> height --> tunic --> chair
The output it has to be a txt file with one word per line, ex:
chair
racket
touch
height
tunic
Is very important the logic and the performance of the algorithm.

Español:
Dada una lista de palabras, determine si las palabras se pueden encadenar para formar un
círculo. Una palabra X se puede colocar delante de otra palabra Y en un círculo si el último
carácter de X es el mismo que el primer carácter de Y.
Por ejemplo, las palabras ['chair', 'height', 'racket', touch', 'tunic'] pueden formar el siguiente
círculo: chair --> racket --> touch --> height --> tunic --> chair
El resultado tiene que ser un archivo de texto con una palabra por línea, por ejemplo:
chair
racket
touch
height
tunic
Es muy importante la lógica y la performance del algoritmo.


## Setup

Manually clone the repo and then run `npm install`.


### Migrations

This project doesn't have migration's files.

