## 📝 **Relatório Técnico - Sistema de Gerenciamento de Biblioteca**

### 📌 **Identificação**

* **Curso:** Engenharia de Computação
* **Disciplina:** Linguagem de Programação 2
* **Aluno:** \[Seu Nome Aqui]
* **Período:** \[Informe aqui]
* **Professor:** \[Informe aqui]
* **Projeto:** Sistema de Gerenciamento de Biblioteca
* **Linguagem:** TypeScript

---

### 🎯 **Objetivos**

* Desenvolver um sistema completo, aplicando conceitos avançados de programação em TypeScript.
* Utilizar uma arquitetura em camadas com boas práticas de engenharia de software.
* Integrar banco de dados, coleções, recursividade, reflexão, serialização, enumerações e tratamento de exceções.
* Fornecer uma interface de usuário funcional via terminal.

---

### 🧱 **Arquitetura do Sistema**

* **Camada de Apresentação:** `index.ts` com menus interativos.
* **Camada de Serviços (Negócio):** `services/` com repositórios de Livro, Usuário e Empréstimo.
* **Camada de Dados:** Simulada com coleções (`Map`) e persistência via arquivos (`fs`).

---

### 📁 **Estrutura de Pastas**

```
src/
├── controllers/          # (futura implementação para separar interface)
├── database/             # (pode conter conexões ou simulações com DB)
├── interfaces/           # Interfaces e contratos (ICrud, IBusca)
├── models/               # Entidades: Livro, Usuario, Emprestimo
├── services/             # Regras de negócio e repositórios
├── utils/                # Funções auxiliares: logs, busca recursiva
├── index.ts              # Interface principal do usuário
```

---

### 📚 **Funcionalidades Implementadas**

| Funcionalidade                        | Status |
| ------------------------------------- | ------ |
| Cadastro de livros                    | ✅      |
| Cadastro de usuários                  | ✅      |
| Registro de empréstimos               | ✅      |
| Devolução de livros                   | ✅      |
| Consulta ao acervo                    | ✅      |
| Backup de dados                       | ✅      |
| Restauração do sistema                | ✅      |
| Log com reflexão (`@LogarMetodo`)     | ✅      |
| Busca recursiva                       | ✅      |
| Enumerações (status, tipo, categoria) | ✅      |
| Tratamento de exceções                | ✅      |
| Serialização (JSON)                   | ✅      |

---

### ⚙️ **Recursos Técnicos Utilizados**

* **Linguagem:** TypeScript
* **Execução:** `ts-node` via `npm`
* **Serialização:** `fs.writeFileSync`, `JSON.stringify`
* **Reflexão:** Decorators para logging (`@LogarMetodo`)
* **Recursividade:** Busca de livro por título
* **Coleções:** `Map<number, T>` para simular repositórios
* **Tratamento de exceções:** try/catch em todas as operações críticas
* **Enumerações:** `CategoriaLivro`, `TipoUsuario`, `StatusEmprestimo`

---

### 📦 **Execução do Projeto**

```bash
npm install
npm run dev
```

---

### 📂 **Backup e Restauração**

* Backup salvo em `src/backup.json`
* Restauração reconstroi objetos a partir de JSON.

---

### 🧪 **Testes Realizados**

* Foram realizados testes manuais com inserção, consulta, empréstimo e devolução de dados.
* Casos de erro como duplicidade de ID e busca por inexistentes foram testados com sucesso.

