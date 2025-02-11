# Desafio React - Python

## Executar

A aplicação pode ser executada de duas maneiras: **1** utilizando o Docker Compose ou **2** executando manualmente.

### 1. Docker Compose

É possível, mas não obrigatório, configurar os parâmetros da aplicação a partir de um arquivo **.env**, conforme exemplificado no arquivo **.env.example**. A aplicação sempre será executada na porta **8080**.

```sh
docker-compose up
```

### 2. Execução Manual

#### 2.1 Banco de Dados SQL Server

Para a execução da aplicação, é necessário ter acesso adequado a uma instância do SQL Server, incluindo a instalação do driver ["ODBC Driver 18 for SQL Server"](https://learn.microsoft.com/pt-br/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16) em sua máquina.

#### 2.2 Web API

A aplicação foi desenvolvida utilizando **Python 3.12**. Utilize essa versão para evitar erros de compatibilidade com as dependências.

Dentro da pasta **web-api**, crie um arquivo **.env** de acordo com o arquivo **.env.example**. As variáveis que iniciam com **DATABASE** devem ser preenchidas com os dados do seu banco de dados.

É altamente recomendado utilizar a IDE **PyCharm** para facilitar a instalação e execução. Caso utilize, marque a pasta **src** como **Source Root** e execute o arquivo **`src/entrypoints/flask_app.py`** diretamente pela IDE após instalar as dependências.

Caso você prefira não utilizar o PyCharm:
Configure o **PYTHONPATH** para a pasta **"/src"** para que aplicaçao consigua encontrar corretamente os módulos do projeto.

Instale as depêndencias com o comando abaixo:
```sh
pip install -r requirements.txt
```

Execute a aplicação com o comando a seguir.
```sh
python src/entrypoints/flask_app.py
```

Opcionalmente, você pode executar o script abaixo para gerar dados a cada 10 segundos (ou conforme configurado no arquivo **.env**):

```sh
python src/entrypoints/populate_database.py
```

#### 2.3 Web App

Informações mais detalhadas podem ser encontradas no **README.md** dentro da pasta **/web-app**.

Execute os comandos abaixo para instalar as dependências e executar a aplicação:

```sh
npm install
npm run dev
```
