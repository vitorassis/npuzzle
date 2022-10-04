import Table from '../Table';

export default class PecasFora{
    getAvaliacao(table, base){
        var cont = 0;
        for (var i = 0; i < table.tam; i++) 
            for (var j = 0; j < table.tam; j++) 
                cont += base.table[i][j] != table.table[i][j];

        return cont;
    }
}