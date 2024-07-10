import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{
    
    private listaContas: Array<Conta> = new Array<Conta>();

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
            let buscaConta = this.buscarNoArray(numero);
            if (buscaConta !== null)
                buscaConta.visualizar();
            else
                console.log("\nA conta não foi encontrada!");
    }
    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar()
        }
        ;
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }
    Atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta foi atualizada!");
       }else
            console.log("\nA conta não foi encontrada!");
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("\nConta excluida com sucesso!")
        }else
            console.log("\nNão entramos essa conta...")
    }
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true)
                console.log("\nO saque foi efetuado com sucesso!")
        }else
                console.log("\nA conta não foi encontrada!")
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null) {
                buscaConta.depositar(valor);
                console.log("\nO deposito foi efetuado com sucesso!")
        }else
                console.log("\nA conta não foi encontrada!");
    }
    transferir(numeroOrigem: number, numeroDestino: any, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino !== null) {
            if (buscaContaOrigem.sacar(valor) === true){
                buscaContaDestino.depositar(valor);
                console.log("\nA transferencia foi realizada com sucesso!")
            }
        } else
        console.log("\nA conta não foi encontrada!")
    }

    public gerarNumero(): number{
       return ++ this.numero;  

    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;
        }
        
        return null;
    }
}