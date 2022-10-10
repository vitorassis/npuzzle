import Astar from './Metodo/Astar';
import CegaLargura from './Metodo/CegaLargura';
import CegaProfundidade from './Metodo/CegaProfundidade';
import getMetodoAvaliacao from './Avaliacao/AvalicaoHandler';

export default class Puzzle {
    track;
    base;
    avaliacao;
    metodo;
    resolvido;
    visitados;
    inicio;

    constructor(base, avaliacao, metodo, moves, niveis) {
        this.resolvido = false;
        this.base = base;
        this.visitados = [];

        this.avaliacao = getMetodoAvaliacao(avaliacao);

        switch (metodo) {
            case 'a':
                this.metodo = new Astar();
                break;
            case 'p':
                this.metodo = new CegaProfundidade();
                break;
            case 'l':
                this.metodo = new CegaLargura();
                break;

        }
        this.metodo.setNiveis(niveis);

        this.inicio = base.shuffle(moves);
    }

    resolver() {
        this.track = this.metodo.resolver(this);
        this.resolvido = true;
    }

    buscar(guid) {
        return this.raiz.buscar(guid);
    }

    getTrack() {
        return this.track;
    }

    visitado(_tb) {
        
        function start(o, tb) {
            var igual = true;
            for (var i = 0; i < o.length && igual; i++)
                for (var j = 0; j < o.length && igual; j++)
                    igual = o[i][j] == tb[i][j];

            return igual;
        }
        return this.visitados.find(start.bind(this, _tb));
    }
}