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

    resolver(puzzle){
        var struct = this.getStructure();
        var track = new Stack();

        struct.push(puzzle.inicio);
        var obj = null;
        do{
            obj = struct.pop();
            track.push(obj);

            puzzle.visitados.push(obj.table);

            if(!obj.final){
                var menor = Number.MAX_SAFE_INTEGER;
                var menorTable = null;
                if(obj.estadosPossiveis.length < 2)
                    obj.calculatePossibilidades();
                for(var i = 0; i<obj.estadosPossiveis.length; i++){
                    if(!puzzle.visitado(obj.estadosPossiveis[i].table)){
                        if(obj.estadosPossiveis[i]._avaliacao < menor){
                            menor = obj.estadosPossiveis[i]._avaliacao;
                            menorTable = obj.estadosPossiveis[i];
                        }
                    }
                }
                struct.push(menorTable);
            }
        }while(!struct.isEmpty() && !obj.final);

        return track;
    }
}