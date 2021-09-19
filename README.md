# Microserviço de autenticação com Nodejs

Este é um projeto desenvolvido durante algumas lives para dissiminação de conhecimento dentro da [DIO](https://digitalinnovation.one/)

## Composição do projeto

Neste projeto Temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate