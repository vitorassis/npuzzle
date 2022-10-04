import Table from '../Table';
import Stack from '../Util/Stack';

export default class CegaProfundidade{
    setNiveis(niveis){}

    getEstado(base, avaliacao, st){
        var ret =  st.pop();
        st.clear();
        return ret;
    }

    getStructure(){
        return new Stack();
    }
}