# Postman test API

### Descripción 

Esta es una API básica hecha con NodeJS, Express y MongoDB con su respectiva colección y ambiente de Postman para pruebas. La API consta de un CRUD para las entidades:

+ **Usuarios**

+ **Productos**

+ **Pedidos**

Para realizar los requests, pueden hacerse las peticiones a **http://localhost:8051/** con los endpoints **usuarios**, **productos** y **pedidos** respectivamente una vez levantado el servicio Node y Mongod.

### Requisitos del sistema

Para poder usar la API, es necesario tener en tu sistema:

+ Git

+ Node 9.x 

+ Mongo 4.x

### Inicio de la API

Para poder usar la API en tu sistema local es necesario seguir los siguientes pasos:

+ Clonar repositorio en tu máquina local desde: https://github.com/impactotecnologico/nodejs-postman-demo

+ En el directorio clonado, ejecutar **npm install** en una terminal 

+ Iniciar el servicio **mongod** en tu sistema, en el caso de linux, ejecutando **sudo service mongod start**

+ Iniciar la app node ejecutando **node app.js**

+ Si todo ha ido bien, la app estará disponible en **http://localhost:8051**