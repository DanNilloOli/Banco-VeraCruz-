import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';
import { Conta } from "./src/model/conta";

export function main() {

    let opcao: number;

    const c1: Conta = new Conta(1, 1234, 1, 'Juliao', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Marcela', 600000.00);

    c1.visualizar();

    c2.visualizar();

    console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

    c2.saldo = 900000.00;

    console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`);

    console.log(`\nSacar 100.00 Reais da Conta C1: ${c1.sacar(100)}`); // true
    c1.visualizar();

    console.log(`\nSacar 1000000.00 Reais da Conta C2: ${c2.sacar(1000000)}`); // false
    c2.visualizar();

    console.log(`\nDepositar 200000.00 Reais da Conta C1: `); 
    c1.depositar(200000)
    c1.visualizar();

    console.log(`\nDepositar 300000.25 Reais da Conta C2: `); 
    c2.depositar(300000.25)
    c2.visualizar();

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