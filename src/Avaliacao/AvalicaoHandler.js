import Manhattan from "./Manhattan";
import PecasFora from "./PecasFora";

export default function getMetodoAvaliacao(avaliacao, base){
    var av = null;
    switch (avaliacao) {
        case 'p':
            av = new PecasFora(base);
            break;
        case 'm':
            av = new Manhattan(base);
            break;
    }
    return av;
}