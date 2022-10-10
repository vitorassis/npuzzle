import Table from '../Table';
import Queue from '../Util/Queue';

export default class Astar{
    niveis;
    base; avaliacao;

    setNiveis(niveis){
        this.niveis = niveis;
    }

    getEstado(base, avaliacao, st){
        this.avaliacao = avaliacao;
        this.base = base;
        if(this.niveis == 1){
            var menor = this.getSoma(st.q[0].table);
            var tabMenor = st.q[0];
            st.q.map(structure => {
                if(this.getSoma(structure.table) < menor){
                    menor = this.getSoma(structure.table);
                    tabMenor = structure;
                }
            })
            // for(var i=0; i<st.q.length; i++){
            //     if(this.getSoma(st.q[i].table) < menor){
            //         menor = this.getSoma(st.q[i].table);
            //         tabMenor = st.q[i];
            //     }
            // }
        }
        return tabMenor;
    }

    getSoma(table){
        return table.custo + this.avaliacao.getAvaliacao(table, this.base);
    }

    getStructure(){
        return new Queue();
    }
}