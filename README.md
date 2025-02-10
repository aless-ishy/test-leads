# Teste React - Python

## Executar

A aplicação pode ser executada de duas maneiras, 1 utilizando o docker-compose ou 2 executando manualmente.

### 1 Docker Compose
É possivel, mas não obrigatório, confiugurar os parâmetros da aplicação a partir de um arquivo .env como exemplicado no arquivo .env.example. A aplicação sempre ira rodar na porta 8080.
```
docker-compose up
```

### 2.1 Web Api
Dentro da pasta web-api, existe um arquivo .env, as váriaveis que iniciam com DATABASE devem ser preenchidas com os dados do seu banco de dados. Além disso a sua máquina deve possuir o driver "ODBC Driver 18 for SQL Server". 
```
cd web-api
pip install -r requirements.txt
pytyhon src/entrypoints/populate_database.py
```
Opcionalmente voce pode executar o script abaixo para gerar dados de 10 em 10 segundos ou conforme configurado no arquivo .env
```
pytyhon src/entrypoints/populate_database.py
```
### 2.2 Web App

```
cd web-app
npm install
npm run dev
```


