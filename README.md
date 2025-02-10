# Desafio React - Python

## Executar

A aplicação pode ser executada de duas maneiras, **1** utilizando o docker-compose ou **2** executando manualmente.

### 1 Docker Compose
É possivel, mas não obrigatório, confiugurar os parâmetros da aplicação a partir de um arquivo **.env** como exemplicado no arquivo **.env**.example. A aplicação sempre irá rodar na porta 8080.
```
docker-compose up
```
### 2 Execução Manual
#### 2.1 Banco de Dados SQL Server
Para a execuçao da aplicação é necessário que aja o acesso adequado a uma instância do SQL Server, o que inclui o driver ["ODBC Driver 18 for SQL Server"](https://learn.microsoft.com/pt-br/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16) instalado em sua máquina. 
#### 2.2 Web Api
A aplicação foi desenvolvida utilizando o **python 3.12**, utilize essa versão para evitar erros de versionamento das dependências. 

É altamente recomendado que utilize a IDE PyCharm para uma instalação e execução mais fácil. Caso utilize, basta executar o arquivo **src/entrypoints/flask_app.py**.

Configure o **PYTHONPATH** para **"/app/src"**. 
Dentro da pasta web-api, crie um arquivo **.env** de acordo com arquivo **.env.example**, as váriaveis que iniciam com **DATABASE** devem ser preenchidas com os dados do seu banco de dados.
```
pip install -r requirements.txt
pytyhon src/entrypoints/flask_app.py
```
Opcionalmente voce pode executar o script abaixo para gerar dados de 10 em 10 segundos ou conforme configurado no arquivo **.env**.
```
pytyhon src/entrypoints/populate_database.py
```
#### 2.3 Web App
Informaões mais detalhadas podem ser encontradas no **README.md** em **/web-app** .

Execute os comandos abaixo para instalar as depêndencias e executar a aplicação.
```
npm install
npm run dev
```


