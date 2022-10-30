
# 🪅 CodeOp final project 🎉

Esta es una single page application desarrollada con Vue.js, TailwindsCss, Html consumiendo datos de una fake Rest api con un Json server 


## Guías Instalación 

 - [Install Vue width TailwindCSS](https://tailwindcss.com/docs/guides/vite)
 - [Install Vue router](https://router.vuejs.org/installation.html)
 - [Install axios](https://www.npmjs.com/package/vue-axios)
 
 

## Creando un fake Api Rest con Json Server

- Install Json Server

    Nos generamos una carpeta con el nombre que queramos utilizar para nuestra API - en mi caso he decido llamarla db

    Dentro de db ejecutamos el siguiente comando

    




## Installation

Dentro de db ejecutamos el siguiente comando

```bash
  npm init -y
```
    
Esto nos generará un fichero package.json

Lo siguiente es instalar nuestra dependencia:

```bash
  npm i json-server
```

Ahora vamos a modificar nuestro package.json para correr como servidor, tenemos que añadir un script como veis en el ejemplo:

```bash
  {
  "name": "bd",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "server": "json-server --watch ./db/db.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.16.1"
  }
}
```

Ahora tendremos que arrancarlo para ver que todo ha ido bien:

```bash
  npm run server
```

MUY IMPORTANTE CUANDO QUERAMOS TRABAJAR CON NUESTRA API-DB DEBEMOS TENER LEVANTADO EL PROYECTO ES DECIR DEBE ESTAR ESCUCHANDO EL PUERTO DE LO CONTRARIO TENDREMOS ERRORES AL LANZAR LAS PETICIONES DESDE FRONT

```bash
  npm run server
  npm run dev
```
## Demo

https://youtu.be/YHG_Ei7Cj7o
https://www.figma.com/proto/YdK8XfBRCWx1BuTau0RBea/Tlb-Soul-project?node-id=44%3A47&scaling=min-zoom&page-id=0%3A1

