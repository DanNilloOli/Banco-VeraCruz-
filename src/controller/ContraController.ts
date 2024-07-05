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
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: any, valor: number): void {
        throw new Error("Method not implemented.");
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