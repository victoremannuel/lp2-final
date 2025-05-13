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
```node ./pasta/arquivo.js```<br>
ou podemos instalar a extensão code runner do VSCode e executar o typescript diretamente<br>
Ainda no VSCode, acesse o menu File > Preferences > Settings e na caixa de busca digite: code-runner.runInTerminal e marque a caixa como na imagem abaixo:
![alt text](image/README/image.png)
Ainda em Settings e na caixa de busca digite: code-runner.executorMap e clique no link edit in settings como na imagem abaixo:
![alt text](image/README/image-1.png)
No arquivo que settings.json, procure pela chave "typescript" e adicione o prefixo npx antes do comando ts-node, como na imagem abaixo. Depois salve (CTRL+S):
![alt text](image/README/image-2.png)
