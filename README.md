# ProjetoColetor

## Boas práticas de comentário do Git:

- Padrões definidos para commit no git em [https://udacity.github.io/git-styleguide/]

## Configurar ambiente

- Instalar Angular CLI: $ `npm install -g @angular/cli`
- No diretório do repositório, executar: $ `npm install` para instalar as dependências.(Necessário somente após clonar o repositório, ou adicionar uma nova dependência)

## Subir o Front

- Pelo CMD executar o comando `npm start` np diretório do projeto. A aplicação ficará disponível no endereço `http://localhost:4200/`.
- As alterações no código serão compilados automaticamente e atualizado no navegador.

## Gerar código pelo Angular/CLI

- Executar `ng generate component component-name` para gerar um novo componente. 
- Existem as opções: `ng generate directive|pipe|service|class|guard|interface|enum|module`.
- Opções mais utilizadas no projeto `module | component | service` nesta ordem.

## Comandos úteis GIT
- `git config --global http.proxy http://proxyUsername:proxyPassword@proxy.server.com:port`: Configurar Proxy
- `git clone url-projeto-git`: Clonar repositório
- `git status`: Verificar arquivos alterados localmente
- `git add caminho-arquivo`: Adicionar arquivos para commit
- `git commit -m "mensagem-commit"`: Comitar arquivos adicionados anteriormente
- `git pull`: Puxar alterações do repositório remoto para o repositório local
- `git push`: Enviar commits feito para o repositório remoto

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).