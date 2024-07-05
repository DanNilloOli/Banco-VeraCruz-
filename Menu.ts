import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/contacorrente";
import { ContaController } from "./src/controller/ContraController";
import { ContaPoupanca } from "./src/model/contapoupanca";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;

    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController();

    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00, 100000.00);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'João da Silva', 1000.00, 100.00);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`\nSaque de R$ 25.000,00 na Conta CC1: ${cc1.sacar(25000)}`);
    cc1.visualizar();

    console.log(`\nSaque de R$ 1.500,00 na Conta CC2: ${cc2.sacar(15000)}`);

    console.log(`\nDepositar R$ 3.000.99 Reais da Conta CC2: `); 
    cc2.depositar(3000.99)
    cc2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.green,"\n-----------------------------------------------------");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);
        console.log(colors.bg.black, colors.fg.yellow,"   --------------  BANCO VERACRUZ   --------------  ");
        console.log("                                                     ",colors.reset);
        console.log(colors.bg.black, colors.fg.green,"*****************************************************");
        console.log("-----------------------------------------------------",colors.reset);
        
        console.log(colors.bg.black, colors.fg.green,"\n*****************************************************");
        console.log("********************    MENU    *********************");
        console.log("-----------------------------------------------------");
        console.log("                                                     ",colors.reset);
        console.log(colors.bg.black, colors.fg.yellow,"            1 - Criar uma nova Conta                 ");
        console.log("            2 - Listar todas as minhas Contas        ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ",colors.reset);
        console.log(colors.bg.black, colors.fg.green,"-----------------------------------------------------");
        console.log("*****************************************************",colors.reset);

        console.log(colors.bg.black, colors.fg.yellow,"Entre com a opção desejada: ",colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco VeraCruz - Desde 1554!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log("Digite o número da Agéncia: ");
                    agencia = readlinesync.questionInt("");
                    console.log("Digite o nome do titular da conta: ");
                    titular = readlinesync.question("");
                    console.log("Digite o tipo da conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", { cancel : false }) + 1;
                    console.log("Digite o saldo da conta: ");
                    saldo = readlinesync.questionFloat("");
                    

                    switch (tipo){
                        case 1:
                    console.log("Digite o limite da conta: ");
                    limite = readlinesync.questionFloat(""); 
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero (), agencia, tipo, titular, saldo, limite));
                    break;
                         case 2:
                    console.log("Digite a data de aniversário da conta: ");
                    aniversario = readlinesync.questionInt(""); 
                    contas.cadastrar(
                        new ContaPoupanca(contas.gerarNumero (), agencia, tipo, titular, saldo, aniversario));
                    break;
                    }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o número da conta: ")
                    numero = readlinesync.questionInt("");

                    contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("-----------------------------------------------------");
    console.log("Projeto Desenvolvido por: ");
    console.log("Danillo Oliveira - danillooliveirasp@gmail.com");
    console.log("github.com/DanNilloOli");
    console.log("-----------------------------------------------------");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();