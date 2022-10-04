import Table from "./Table";

export default class No{
    table;
    final;
    avaliacao;
    proximo;

    constructor(table, base, avaliacao){
        this.table = table;
        this.avaliacao = avaliacao;
        
        this.final = avaliacao.getAvaliacao(table, base) == 0;
        this.proximo = null;
    }
    
    inserirProximo(no){
        this.proximo = no;
    }

    buscar(guid){
        if(this.table.guid == guid)
            return this;

        return this.proximo.buscar(guid);
    }
}