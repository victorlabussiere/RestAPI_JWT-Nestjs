## Description

[Nest](https://github.com/victorlabussiere/nest-protected-routes) Serviço de Rotas Protegidas com Nest js e JWT

## Pré requisitos

- Node js
- MySQL Server

## Instalação

```bash
$ npm install
```

## Iniciando o APP

Para iniciar o APP, é necessário que você configure um arquivo .env na raiz do projeto seguindo o modelo do arquivo .example.env contendo as variáveis de ambiente com as informações necessárias para realizar uma conexão com seu banco de dados MySQL ou Mariadb

Desta forma, suas configurações de banco de dados serão implementadas automaticamente na aplicação, gerando uma tabela de acordo com o UserSchema.

```bash
# desenvolvimento
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Entre em contato

- Author - [Victor Labussiere](https://linkedin.com/in/victorlabussiere)

## Licença

[MIT licensed](LICENSE).
