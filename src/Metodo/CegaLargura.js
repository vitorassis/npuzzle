import Table from '../Table';
import Queue from '../Util/Queue';

export default class CegaLargura{
    setNiveis(niveis){}

    getEstado(base, avaliacao, st){
        var ret =  st.pop();
        st.clear();
        return ret;
    }

    getStructure(){
        return new Queue();
    }
}