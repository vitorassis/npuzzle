import Table from '../Table';

export default class PecasFora{
    getAvaliacao(table){
        var cont = 0;
        for (var i = 0; i < table.tam; i++) 
            for (var j = 0; j < table.tam; j++) 
                if(this.base.table[i][j] != table.table[i][j])
                    cont ++;

        return cont;
    }

    constructor(base){
        this.base = base;
    }
}