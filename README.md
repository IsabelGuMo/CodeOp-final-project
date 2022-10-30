
# 🪅 CodeOp final project 🎉

Esta es una single page application desarrollada con Vue.js, TailwindsCss, Html consumiendo datos de una fake Rest api con un Json server:

## Configuración:
- [Install packages width npm install]
- [Ejecuta el servidor de desarrollo]

```bash
  npm install
  npm run dev
```

## Proyecto
Creo la carpeta del poyecto y ejecuto [Install Vue width TailwindCSS](https://tailwindcss.com/docs/guides/vite);

Creo los componentes principales dentro de la carpeta views:

He usado Vue Router para separar partes lógicas y darles estructura de rutas con <RouterView> y <RouterLink>, utilizaremos router.js (donde definimos las rutas de la aplicación) en el programa generando así páginas con rutas y sub-rutas dinámicas.
- [Install Vue router](https://router.vuejs.org/installation.html)

-Home.vue mostrará una lista de bisutería accediendo a la data de nuestra db.json con axios como alternativa a fetch.
- [Install axios](https://www.npmjs.com/package/vue-axios)

Creo la ruta en el archivo ruotes.js y lo llamo Home

```bash
import Home from "./views/Home.vue";

export const routes = [
    { path: "/", name: "home", component: Home },
];
```

-Jewel.vue mostrará el detalle de cada componente de la lista de bisutería utilizando el id  y enlazandola a Home.vue a través de <RouterLink>

```bash
.then(response => {
            this.data = response.data.find(element => element.id == this.id)
```

Creo la ruta en el archivo routes.js y lo llamo Jewel

```bash
import Home from "./views/Home.vue";
import Jewel from "./views/Jewel.vue";

export const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/jewel/:id", name: "jewel", component: Jewel, props: true },

];
```

El componente <App /> delega que componente se muestra a través de <RouterView>

Usando el [livecycle mounted](https://vuejs.org/guide/essentials/lifecycle.html) tendrá acceso completo al componente reactivo, las plantillas y DOM renderizado y cargará los datos al cargar la página.

```bash
mounted() {
        this.getJewel();
    },
```

A todo le damos estilo con tailwindCSS


## Creando un fake Api Rest con Json Server

- Install Json Server

    He generado una carpeta con el nombre que quiero utilizar para la API - en mi caso he decido llamarla db

    Dentro de db ejecuto el siguiente comando

## Installation

Dentro de db ejecuto el siguiente comando

```bash
  npm init -y
```
    
Esto generará un fichero package.json

Lo siguiente es instalar nuestra dependencia:

```bash
  npm i json-server
```

Modifico mi package.json para correr como servidor, añado un script como veis en el ejemplo:

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

Ahora tengo que arrancarla para ver que todo ha ido bien:

```bash
  npm run server
```

MUY IMPORTANTE CUANDO QUERAMOS TRABAJAR CON NUESTRA API-DB DEBEMOS TENER LEVANTADO EL PROYECTO ES DECIR DEBE ESTAR ESCUCHANDO EL PUERTO DE LO CONTRARIO TENDREMOS ERRORES AL LANZAR LAS PETICIONES DESDE FRONT

```bash
  npm run server
  npm run dev
```
## Guías Instalación 
 - [Install packages width npm install]
 - [Install Vue width TailwindCSS](https://tailwindcss.com/docs/guides/vite)
 - [Install Vue router](https://router.vuejs.org/installation.html)
 - [Install axios](https://www.npmjs.com/package/vue-axios)
 
## Demo

https://youtu.be/YHG_Ei7Cj7o

https://www.figma.com/proto/YdK8XfBRCWx1BuTau0RBea/Tlb-Soul-project?node-id=44%3A47&scaling=min-zoom&page-id=0%3A1

