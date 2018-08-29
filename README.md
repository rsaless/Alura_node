# ALURA NODE.JS

## Instalação e configuração do banco

### Instalando o MySql

[Instalando MySql (Alura)](https://cursos.alura.com.br/course/introducao-a-banco-de-dados-e-sql/task/5652)  
[Corrigindo possíveis problemas](https://cursos.alura.com.br/forum/topico-erro-er_not_supported_auth_mode-client-does-not-support-authentication-protocol-requested-by-server-consider-upgrading-mysql-client-61991)

### Criando as tabelas necessárias

com o terminal/cmd aberto:

> mysql -u root  

> create database casadocodigo_nodejs;
  
> use casadocodigo_nodejs;
  
> CREATE TABLE livros (id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,titulo varchar(255) DEFAULT NULL,descricao text,preco decimal(10,2) DEFAULT NULL);  

> insert into livros(titulo, descricao, preco) values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);  

> insert into livros(titulo, descricao, preco) values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);  
  
> insert into livros(titulo, descricao, preco) values ('Comecando com express', 'livro introdutório sobre express', 39.90);  


## Configuração dos módulos do Node
caso algum módulo não esteja configurado corretamente

> cd casadocodigo  
> npm install  
> npm install -g nodemon 