// store.js
import { reactive } from 'vue'
import Table from '../src/Table';
import Puzzle from '../src/Puzzle';

export const store = reactive({
    table: [[1, 2, 3], [4, 5, 6],[7, 8, 0]],
    N: 3,
    avaliacao: 'p',
    busca: 'p',
    niveis: 1,
    movimentos: 1,
    
    shuffledTable:null,//: new Table(),
    base:null,//: new Table(),
    puzzle:null,//: new Puzzle(),

    resolver(){
        console.log(this);
        this.puzzle.resolver();
    },

    updateTableValue(i, j, val){
        val = parseInt(val);
        var copy = this.table;
        if (val >= 0 && val < Math.pow(this.N, 2)){
            var achou = false;
            for(var bi = 0; bi < this.N && !achou; bi++)
                for(var bj=0; bj <this.N && !achou; bj++)
                    achou = val == this.table[bi][bj];
            if(achou){
                alert("Número já inserido!");
            }else{
                copy[i][j] = val;
            }
        }else{
            alert("Número inválido, tente entre 0 e "+ (Math.pow(this.N, 2)-1));
        }
        this.table = copy;
    },
    updateN(val){
        val = parseInt(val);

        if(val < 2)
            alert("Tente um número maior que um!");
        else{
            var arr = [];
            var n = 1;
            var max = Math.pow(val, 2);
            for(var i = 0; i < val; i++){
                arr[i] = [];
                for(var j=0; j<val; j++){
                    arr[i][j] = max == n ? 0 : n;
                    n++;
                }
            }

            this.table = arr;
            this.N = val;
        }
    },
    embaralhar(){
        this.shuffledTable = null;
        this.base = new Table({tam: this.N, table: this.table});

        this.puzzle = new Puzzle(this.base, this.avaliacao, this.busca, this.movimentos, this.niveis);

        this.shuffledTable = this.puzzle.raiz.table;
    }
})