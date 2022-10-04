import Table from '../Table';
import Queue from '../Util/Queue';

export default class Astar{
    niveis;

    setNiveis(niveis){
        this.niveis = niveis;
    }

    getEstado(base, avaliacao, st){
        // if(this.niveis == 1){
        //     var menor = st.
        // }
        return base;
    }

    getStructure(){
        return new Queue();
    }
}