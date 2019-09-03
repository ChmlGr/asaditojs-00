## AsaditoJS

##### Temas a tratar

0. Repaso de conceptos básicos de Javascript
1. REST API - Nodejs
2. Requests - fetch, promesas, manejo de errores
3. Métodos de Array y Objetos - Filtrado
4. Manipulación del DOM

<hr />

### Consigna

Crearemos una simple web para visualizar los animes mas populares. Cada entrada contará con la siguiente información:

- Imagen
- Título
- Puntaje

#### Requerimientos

##### Crear una API para nuestro proyecto

- Utilizará la siguiente fuente de datos

  > `https://api.jikan.moe/v3/top/anime/1`

- Tendrá el siguiente endpoint

  > `GET /anime`

- Deberemos devolver <em>solo</em> los campos pedidos

##### Crear una web para visualizar 15 entradas

- Pedirá los datos a nuestra API
- Mostrara el titulo con su correspondiente imagen (de no poseer imagen, deberá mostrarse una por default) y el puntaje
