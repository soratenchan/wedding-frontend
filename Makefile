COMPOSE_YML := docker-compose.yml
DC := docker compose -f $(COMPOSE_YML)
SERVICE := app


build:
	mkdir -p node_modules
	$(DC) build

up:
	$(DC) up -d

down:
	$(DC) down --remove-orphans

down-v:
	$(DC) down --remove-orphans --volumes

logs:
	$(DC) logs -f $(SERVICE)

sh:
	$(DC) exec $(SERVICE) sh

npm-install:
	$(DC) run --rm $(SERVICE) npm install

dev:
	$(DC) exec $(SERVICE) npm run dev

npm-build:
	$(DC) exec $(SERVICE) npm run build

npm-start:
	$(DC) exec $(SERVICE) npm run start

lint:
	$(DC) exec $(SERVICE) npm run lint

gen:
	$(DC) exec $(SERVICE) npm run gen

init:
	@make down-v
	@make build
	@make npm-install
	@make up
	@make logs

run-build:
	@make npm-build
	@make npm-start