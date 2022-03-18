# Aplicação

Api com Nodejs

## Pré-requisitos

> * Node: 16.14.0
> * Docker: 20.10.13
> * Docker Compose: 1.29.2

---
**OBSERVAÇÃO**

* Se a imagem `docker` do banco não existir, será necessário conexão com a internet para que o `docker-compose` possa efetuar o download

* Certifique-se de que o serviço do `docker` está sendo executado em sua máquina

---


## Instruções

### Passo 1

Criar o arquivo `.env` e "setar" as variáveis com suas credenciais e configurações. Usar como base o arquivo `.env-sample`.

Para execução local, por exemplo:

```bash
DB_USER=root
DB_PASSWORD=root
DB_NAME=
DB_LOCAL_PORT=
DB_DOCKER_PORT=
DB_DRIVER=mysql
DB_HOST=127.0.0.1

NODE_LOCAL_PORT=

OPEN_WEATHER_MAP_URL=http://api.openweathermap.org/data/
OPEN_WEATHER_MAP_VERSION=2.5/
OPEN_WEATHER_MAP_APPID=
```

### Passo 2: Executar os camandos

```bash
# Baixa a imagem e cria o container
$ docker-compose up

# Depois que o container estiver pronto, execute os demais comandos (será preciso abrir outro terminal)

# Instala as dependências do projeto
$ npm install

# Cria as tabelas no banco de dados
$ npx sequelize db:migrate

# Insere dados nas tabelas
$ npx sequelize db:seed:all

# Inicia o projeto
$ npm run start
```

## Uso

Você pode escolher um `Http Client` para fazer as requisições, mas
também é possível usar a ferramenta `curl`. Abaixo há alguns exemplos usando-a.

### Criar _Activity_

```bash
curl -d '{
	"activity_title": "Corrida",
  "requisites": {
		"cost": "R$ 30,2",
		"participants_number": 2
	},
	"suggested_location": "",
  "suggested_weather_conditions": "Clouds",
	"unsuggested_weather_conditions": [""]
}' -H 'Content-Type: application/json' \
  -X POST http://localhost:3333/activities
```

### Listar _Suggested Activities_

```bash
curl -d '{"city":"Extremoz"}' -H 'Content-Type: application/json' -X GET http://localhost:3333/list
```

---
**OBSERVAÇÃO**

A porta deve ser igual a que você escolheu em `NODE_LOCAL_PORT=` 

---