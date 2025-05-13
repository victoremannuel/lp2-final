import readline from 'readline-sync';
import fs from 'fs';
import path from 'path';
import { Livro, CategoriaLivro } from './models/Livro';
import { Usuario, TipoUsuario } from './models/Usuario';
import { Emprestimo, StatusEmprestimo } from './models/Emprestimo';
import { LivroRepositorio } from './services/LivroRepositorio';
import { UsuarioRepositorio } from './services/UsuarioRepositorio';
import { EmprestimoRepositorio } from './services/EmprestimoRepositorio';

const livroRepo = new LivroRepositorio();
const usuarioRepo = new UsuarioRepositorio();
const emprestimoRepo = new EmprestimoRepositorio();

function cadastrarLivro(): void {
  console.log('== Cadastro de Livro ==');
  const id = Number(readline.question('ID: '));
  const titulo = readline.question('Título: ');
  const autor = readline.question('Autor: ');
  const ano = Number(readline.question('Ano: '));
  console.log('Categorias disponíveis:');
  Object.entries(CategoriaLivro).forEach(([key, value]) => {
    console.log(`- ${key} (${value})`);
  });
  const categoriaStr = readline.question('Categoria (FICCAO, NAO_FICCAO, TECNICO, DIDATICO): ');

  const categoria = CategoriaLivro[categoriaStr as keyof typeof CategoriaLivro];
  if (!categoria) {
    console.log('Categoria inválida. Livro não cadastrado.');
    return;
  }

  try {
    const livro = new Livro(id, titulo, autor, ano, categoria);
    livroRepo.criar(livro);
    console.log('Livro cadastrado com sucesso!');
  } catch (error: any) {
    console.log(`Erro ao cadastrar livro: ${error.message}`);
  }
}

function cadastrarUsuario(): void {
  console.log('== Cadastro de Usuário ==');
  const id = Number(readline.question('ID: '));
  const nome = readline.question('Nome: ');
  const matricula = readline.question('Matrícula: ');
  console.log('Tipos de usuário disponíveis:');
  Object.entries(TipoUsuario).forEach(([key, value]) => {
    console.log(`- ${key} (${value})`);
  });
  const tipoStr = readline.question('Tipo (ESTUDANTE, PROFESSOR, FUNCIONARIO): ');

  const tipo = TipoUsuario[tipoStr as keyof typeof TipoUsuario];
  if (!tipo) {
    console.log('Tipo inválido. Usuário não cadastrado.');
    return;
  }

  try {
    const usuario = new Usuario(id, nome, matricula, tipo);
    usuarioRepo.criar(usuario);
    console.log('Usuário cadastrado com sucesso!');
  } catch (error: any) {
    console.log(`Erro ao cadastrar usuário: ${error.message}`);
  }
}

function realizarEmprestimo(): void {
  console.log('== Realizar Empréstimo ==');
  const id = Number(readline.question('ID do Empréstimo: '));
  const idLivro = Number(readline.question('ID do Livro: '));
  const idUsuario = Number(readline.question('ID do Usuário: '));

  const livro = livroRepo.buscarPorId(idLivro);
  const usuario = usuarioRepo.buscarPorId(idUsuario);

  if (!livro) {
    console.log('Livro não encontrado.');
    return;
  }
  if (!usuario) {
    console.log('Usuário não encontrado.');
    return;
  }

  const dataEmprestimo = new Date();
  const dataDevolucao = null;
  const status = StatusEmprestimo.ATIVO;

  try {
    const emprestimo = new Emprestimo(id, livro, usuario, dataEmprestimo, dataDevolucao, status);
    emprestimoRepo.criar(emprestimo);
    console.log('Empréstimo registrado com sucesso!');
  } catch (error: any) {
    console.log(`Erro ao registrar empréstimo: ${error.message}`);
  }
}

function realizarDevolucao(): void {
  console.log('== Realizar Devolução ==');
  const id = Number(readline.question('ID do Empréstimo: '));

  const emprestimo = emprestimoRepo.buscarPorId(id);
  if (!emprestimo) {
    console.log('Empréstimo não encontrado.');
    return;
  }

  if (emprestimo.status !== StatusEmprestimo.ATIVO) {
    console.log('Empréstimo já foi devolvido ou está em outro status.');
    return;
  }

  emprestimo.status = StatusEmprestimo.DEVOLVIDO;
  emprestimo.dataDevolucao = new Date();
  emprestimoRepo.atualizar(id, emprestimo);

  console.log('Livro devolvido com sucesso!');
}

function consultarAcervo(): void {
  console.log('== Acervo de Livros ==');
  const livros = livroRepo.listar();

  if (livros.length === 0) {
    console.log('Nenhum livro cadastrado.');
  } else {
    livros.forEach(livro => {
      console.log(`ID: ${livro.id} | Título: ${livro.titulo} | Autor: ${livro.autor} | Ano: ${livro.ano} | Categoria: ${livro.categoria}`);
    });
  }
}

function backupDados(): void {
  const backup = {
    livros: livroRepo.listar(),
    usuarios: usuarioRepo.listar(),
    emprestimos: emprestimoRepo.listar()
  };
  const caminho = path.join(__dirname, 'database/backup.json');
  try {
    fs.writeFileSync(caminho, JSON.stringify(backup, null, 2), 'utf-8');
    console.log(`Backup realizado com sucesso em: ${caminho}`);
  } catch (error: any) {
    console.error(`Erro ao salvar backup: ${error.message}`);
  }
}

function restaurarBackup(): void {
  const caminho = path.join(__dirname, 'database/backup.json');
  try {
    if (!fs.existsSync(caminho)) {
      console.log('Arquivo de backup não encontrado.');
      return;
    }
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    const backup = JSON.parse(conteudo);

    backup.livros.forEach((l: any) => {
      const livro = new Livro(l.id, l.titulo, l.autor, l.ano, l.categoria);
      livroRepo.criar(livro);
    });

    backup.usuarios.forEach((u: any) => {
      const usuario = new Usuario(u.id, u.nome, u.matricula, u.tipo);
      usuarioRepo.criar(usuario);
    });

    backup.emprestimos.forEach((e: any) => {
      const livro = livroRepo.buscarPorId(e.livro.id);
      const usuario = usuarioRepo.buscarPorId(e.usuario.id);
      if (livro && usuario) {
        const emprestimo = new Emprestimo(e.id, livro, usuario, new Date(e.dataEmprestimo), e.dataDevolucao ? new Date(e.dataDevolucao) : null, e.status);
        emprestimoRepo.criar(emprestimo);
      }
    });

    console.log('Backup restaurado com sucesso!');
  } catch (error: any) {
    console.error(`Erro ao restaurar backup: ${error.message}`);
  }
}

function main() {
  let option = '';
  while (option !== '0') {
    console.clear();
    console.log('=== Sistema de Biblioteca ===');
    console.log('1 - Cadastrar Livro');
    console.log('2 - Cadastrar Usuário');
    console.log('3 - Realizar Empréstimo');
    console.log('4 - Realizar Devolução');
    console.log('5 - Consultar Acervo');
    console.log('6 - Backup de Dados');
    console.log('7 - Restaurar Backup');
    console.log('8 - Buscar Livro por Título');
    console.log('9 - Buscar Livro por ID');
    console.log('0 - Sair');
    option = readline.question('Escolha uma opcao: ');

    switch (option) {
      case '1':
        cadastrarLivro();
        break;
      case '2':
        cadastrarUsuario();
        break;
      case '3':
        realizarEmprestimo();
        break;
      case '4':
        realizarDevolucao();
        break;
      case '5':
        consultarAcervo();
        break;
      case '6':
        backupDados();
        break;
      case '7':
        restaurarBackup();
        break;
      case '8':
        const termo = readline.question('Digite o título do livro a buscar: ');
        const resultado = livroRepo.buscarPorTitulo(termo);
        if (resultado) {
          console.log(`Encontrado: ${resultado.titulo} - ${resultado.autor}`);
        } else {
          console.log('Livro não encontrado.');
        }
        break;
      case '9':
        const idBusca = Number(readline.question('Digite o ID do livro a buscar: '));
        const livroEncontrado = livroRepo.buscarPorId(idBusca);
        if (livroEncontrado) {
          console.log(`Encontrado: ${livroEncontrado.titulo} - ${livroEncontrado.autor}`);
        } else {
          console.log('Livro não encontrado.');
        }
        break;
      case '0':
        console.log('Encerrando o sistema...');
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
    }

    if (option !== '0') readline.question('\nPressione ENTER para continuar...');
  }
}

main();
