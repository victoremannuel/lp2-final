import readline from 'readline-sync';

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
        console.log('-> Cadastrar Livro');
        // lógica
        break;
      case '2':
        console.log('-> Cadastrar Usuário');
        break;
      case '3':
        console.log('-> Realizar Empréstimo');
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