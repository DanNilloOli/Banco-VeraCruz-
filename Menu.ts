import readlinesync = require("readline-sync");
import { colors } from './src/util/colors';

export function main() {

    let opcao: number;

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
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();