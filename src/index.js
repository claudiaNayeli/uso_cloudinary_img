/*
const jokeurl = 'https://api.chucknorris.io/jokes/random';
 opcion 1 ejecuta una promesa dentro de otra promesa
fetch(jokeurl).then(resp => {
    resp.json().then(data => {
        console.log(data.id);
        console.log(data.value);
    });
});
opcion 2  promesas en cadena
fetch(jokeurl).then (resp => resp.json())
               .then(({id, value}) => {
                console.log(id, value);
               });

obtenerChiste().then(console.log);

import { obtenerUsuarios } from "./js/http-provider";

import { init } from "./js/chistes-pages";

obtenerUsuarios().then(console.log);

init();

import{init} from "./js/usuarios-page";

init();

import * as CRUD from './js/crud-provider'; //especial para importar al CRUD

CRUD.getUsuario(1).then(console.log);
CRUD.crearUsuario({
    name: 'claudia',
    job: 'Inge'
}).then(console.log);

CRUD.actualizarUsuario(1, {
    name: 'claudia',
    job:'Inge en software'
}).then(console.log);

CRUD.borrarUsuario(1).then(console.log);
*/

import {init} from "./js/archivos-page";
init();
