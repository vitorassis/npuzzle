import No from './No';
import Table from './Table';
import PecasFora from './Avaliacao/PecasFora';
import Manhattan from './Avaliacao/Manhattan';
import Astar from './Metodo/Astar';
import CegaLargura from './Metodo/CegaLargura';
import CegaProfundidade from './Metodo/CegaProfundidade';
import Stack from './Util/Stack';

export default class Puzzle {
    track;
    base;
    avaliacao;
    metodo;
    resolvido;

    constructor(base, avaliacao, metodo, moves, niveis) {
        this.resolvido = false;
        this.base = base;

        switch (avaliacao) {
            case 'p':
                this.avaliacao = new PecasFora();
                break;
            case 'm':
                this.avaliacao = new Manhattan();
                break;
        }

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

        this.raiz = new No(base.shuffle(moves), base, this.avaliacao);
    }

    resolver() {

        var st = this.metodo.getStructure();
        this.track = new Stack();
        st.push(this.raiz);

        var atual = this.raiz;
        this.track.push(atual.table);

        do {
            console.log(st);

            if(atual.table.estadosPossiveis.length == 0)
                atual.table.calculatePossibilidades();
            
            for (var i = 0; i < atual.table.estadosPossiveis.length && !atual.table.estadosPossiveis[i].final; i++) {
                st.push(new No(atual.table.estadosPossiveis[i], this.base, this.avaliacao));
            }
            var estado = this.metodo.getEstado(this.base, this.avaliacao, st);
            while (!this.track.isEmpty() && !this.track.top().isEstadoPossivel(estado.table.guid)) {
                debugger; this.track.pop();
            }
            this.track.push(estado.table);

            atual = estado;
        } while (!st.isEmpty() && !atual.final);

        console.log(this.raiz);

        this.resolvido = true;
    }

    buscar(guid) {
        return this.raiz.buscar(guid);
    }

    getTrack() {
        var track = [];
        var cp = JSON.parse(JSON.stringify(this.track));

        for (var i = 0; i < cp.s.length; i++)
            track.push(cp.s[i]);

        return track;
    }
}