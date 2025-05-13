import readline from 'readline-sync';
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
        console.log('-> Realizar Devolução');
        break;
      case '5':
        console.log('-> Consultar Acervo');
        break;
      case '6':
        console.log('-> Backup de Dados');
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
