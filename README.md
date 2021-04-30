<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This repository contains a bunch of pinned dependencies to validate user input with nestjs and its `ValidationPipe`. This repsitory is used to point out a scenario where the pipe fails to "do its job".

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing io

After starting the backend you can do a request like the following. 
```sh
curl --location --request GET 'http://localhost:3000/?name=chris&external=false&age=20'
```

As of today (30.04.2021) the output of this should be something like this:
```json
{
    "statusCode": 400,
    "message": [
        "external must be a boolean value",
        "age must be a positive number",
        "age must be an integer number"
    ],
    "error": "Bad Request"
}
```
Which means the string is "transformed" as its a string by default as query but other types are not transformed. They should be as it is activated as an options on a global `ValidationPipe`.

## License

Nest is [MIT licensed](LICENSE).
