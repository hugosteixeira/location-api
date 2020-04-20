# Location API

This is a location API
## Installation

First thing you need to make a copy of the .env.example and rename it to .env and set the configs up.

```bash
HOST=0.0.0.0
PORT=8080
NODE_ENV=development

APP_NAME=Location API
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

DB_CONNECTION=pg
DB_HOST=postgres
DB_PORT=5432
DB_USER=user
DB_PASSWORD=pass
DB_DATABASE=db
HASH_DRIVER=bcrypt
```
- Install Adonis CLI, in case you need: `npm i -g @adonisjs/cli`
- Then you need to run the docker `docker-compose up -d`
- And inside the docker terminal you run the migration `node ace migration:run` and `adonis key:generate
`
- Restart the docker `docker-compose stop` and `docker-compose up -d`

Your server now should be running in the localhost:3000

#Routes

```
Cadastro, Visualizar Perfil, Atualiar: /users
Login, Deletar Refresh Token: /sessions
Resource Location: /locations
Cadastrar Sessions: /rating


```

## License
[MIT](https://choosealicense.com/licenses/mit/)
