## configurar projeto TS
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
npm init -y
npm i typescript --save-dev
npx tsc --init
npm i -g ts-node
npm i --save-dev @types/readline-sync
npm i readline-sync
npm i @types/readline-sync
```

Para compilar todos os arquivos ts em js, execute no terminal:
```npx tsc```<br>
Para executar um arquivo em específico, execute no terminal:
```node ./pasta/arquivo.js```