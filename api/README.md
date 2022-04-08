

# Backend Challenge - TAP
<p align='left'>
    <img src='https://i1.wp.com/habrastorage.org/getpro/habr/post_images/1e5/8dc/9a1/1e58dc9a1016eca05f6504b64b6251d9.gif' </img>
</p>


## Objetivos del Challenge

- La consigna se basa en implementar al menos un método API REST que serán parte del backend para un
buscaminas. No hay limitación con respecto a arquitectura, protocolo o librerías.


## Aqui el instructivo para poder levantar el proyecto


## Comenzando:

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar


__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v


En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `Game`


## COMANDOS:
- Instalar dependencias del proyecto: npm install
- Levantar el servidor: npm start
- Test: npm test


## RUTAS REALIZADAS:
- GET /game
- GET /game/{ID}
- POST /game

## Tecnologías utilizadas:
- Node.js
- PostgreSQL
- Sequelize
- Express
- Mocha



