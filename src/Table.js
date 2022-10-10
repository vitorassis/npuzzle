import getMetodoAvaliacao from "./Avaliacao/AvalicaoHandler";
import guid from "./Util/GUID";

export default class Table {
    guid;
    table;
    estadosPossiveis;
    tam = 3;
    lacuna;
    custo = 0;
    _avaliacao;

    constructor(obj = { table: undefined, tam: undefined }, passo = false) {

        this.guid = obj.guid ? (passo ? guid() : obj.guid) : guid();
        if (typeof obj.avaliacao == 'string')
            this.avaliacao = getMetodoAvaliacao(obj.avaliacao, this);
        else
            this.avaliacao = obj.avaliacao;

        if (obj.lacuna) {
            this.tam = obj.tam;
            this.lacuna = { i: obj.lacuna.i, j: obj.lacuna.j };
            this.table = [];
            for (var i = 0; i < this.tam; i++) {
                this.table[i] = [];
                for (var j = 0; j < this.tam; j++)
                    this.table[i][j] = obj.table[i][j];
            }
            this.estadosPossiveis = [];
            for (var i = 0; i < obj.estadosPossiveis.length; i++) {
                this.estadosPossiveis[i] = new Table(obj.estadosPossiveis[i]);
            }
            this.custo = passo ? obj.custo + 1 : obj.custo;
        } else {

            this.table = obj.table;
            //if(!inicio)
            //    this.custo = table.custo+1;
            this.tam = obj.tam;

            this.lacuna = this.search(0);

            this.custo = obj.custo ? (passo ? obj.custo + 1 : obj.custo) : 0;

            this.calculatePossibilidades();
        }
        
        this._avaliacao = this.getAvaliacao(this);
    }

    getAvaliacao(){
        var av = this.avaliacao.getAvaliacao(this);
        this.final = av == 0;
        return av;
    }

    isEstadoPossivel(guid) {
        if (!this.estadosPossiveis)
            return false;
        var found = this.estadosPossiveis.filter(table => table.guid == guid);
        return found.length > 0;
    }

    calculatePossibilidades() {
        this.estadosPossiveis = [];


        if (this.lacuna.i > 0)
            this.estadosPossiveis.push(this.move(this.lacuna.i - 1, this.lacuna.j));
        if (this.lacuna.i < this.tam - 1)
            this.estadosPossiveis.push(this.move(this.lacuna.i + 1, this.lacuna.j));

        if (this.lacuna.j > 0)
            this.estadosPossiveis.push(this.move(this.lacuna.i, this.lacuna.j - 1));
        if (this.lacuna.j < this.tam - 1)
            this.estadosPossiveis.push(this.move(this.lacuna.i, this.lacuna.j + 1));
    }

    move(i, j) {
        var novo = this.clone(true);

        if (novo.isMoveLegal(i, j, novo.lacuna)) {
            novo.table[novo.lacuna.i][novo.lacuna.j] = novo.table[i][j];
            novo.table[i][j] = this.table[novo.lacuna.i][novo.lacuna.j];
            novo.lacuna = { i: i, j: j };
        }
        novo._avaliacao = novo.getAvaliacao();
        return novo;
    }

    isMoveLegal(i, j, lacuna) {
        return (lacuna.i == i && Math.abs(j - lacuna.j) == 1 ||
            lacuna.j == j && Math.abs(i - lacuna.i) == 1);
    }

    search(elem) {
        var _i = 0, _j = 0;
        var achou = false;

        for (_i; _i < this.tam && !achou; _i++)
            for (_j=0; _j < this.tam && !achou; _j++)
                achou = this.table[_i][_j] == elem;

        return { i: _i - 1, j: _j - 1 };
    }

    shuffle(moves) {
        var novo = this.clone();

        let cont = 0;
        while (cont < moves) {
            novo = novo.estadosPossiveis[Math.floor(Math.random() * novo.estadosPossiveis.length)];
            novo.calculatePossibilidades();
            cont++;
        }
        novo.custo = 0;
        novo._avaliacao = novo.getAvaliacao();

        return novo;
    }

    clone(passo = false) {
        var novo = new Table(this, passo);

        return novo;
    }
}