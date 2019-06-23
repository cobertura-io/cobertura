<p align='center'>
  <img src='https://i.imgur.com/CDYRNuN.png' height='90px'/>
</p>

# Cobertura

## Pré-requisitos

Coisas necessárias para rodar o maravilhoso **Cobertura** 😁

* Node.js
* Yarn/NPM (Recomendável utilizar YARN)
* Nodemon
* Redis

## Estrutura de pastas
```
.
│
├── src                     # Código da aplicação
│   ├── controllers         # Toda conversa de UI (Interface) com Banco será passado por aqui dentro
│   ├── views               # Todas telas UI estão nessa pasta 
└── public                  # Todos arquivos de assets ficam nessa pasta pública
```

## Iniciar projeto

Para iniciar o projeto no modo desenvolvimento siga os passos abaixos:

* 1 Clone o repositório
* 2 Tenha todos os pré-requisitos instalados
* 3 Acesse a pasta do projeto pelo terminal
* 4 Instale o nodemon (caso nao tenha) com : ```yarn add global nodemon``` 
* 5 Comandos para iniciar o projeto:
  * Para iniciar apenas o servidor digite ```yarn start```
  * Para iniciar o servidor com o sass digite ```yarn dev```
  * Caso deseje iniciar apenas o sass por algum motivo digite ```yarn sass``` <- isso sozinho **não** inicia o projeto.
* 6 Aguarde a mensagem de **Servidor iniciado com sucesso na porta 8080**
* 7 Acesse pelo navegador **http://127.0.0.1:8080/**
