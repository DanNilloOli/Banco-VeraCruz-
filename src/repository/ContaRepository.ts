import { Conta } from "../model/conta";

export interface ContaRepository{

procurarPorNumero(Numero: number): void;
listarTodas(): void;
cadastrar(conta: Conta): void;
Atualizar(conta: Conta): void;
deletar(numero: number): void;


sacar(numero:number, valor: number): void
depositar(numero: number, valor: number): void
transferir(numeroOrigem: number, numeroDestino: any, valor: number): void;


}