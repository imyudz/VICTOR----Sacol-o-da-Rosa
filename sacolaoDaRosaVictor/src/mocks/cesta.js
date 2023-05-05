import icone from '../../assets/icon.png';
import banana from '../../assets/frutas/banana.png';
import morango from '../../assets/frutas/morango.png';
import kiwi from '../../assets/frutas/kiwi.png';
import maca from '../../assets/frutas/maca.png';
import manga from '../../assets/frutas/manga.png';

const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    detalhes: {
        nome: "Cesta de Frutas",
        logoSacolao: icone,
        nomeSacolao: "Sacolão da Rosa",
        descricao: "Uma cesta com produtos cuidadosamente selecionados da horta direto para sua cozinha.",
        preco: "R$ 50,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Banana",
                imagem: banana,
            },
            {
                nome: "Morango",
                imagem: morango,
            },
            {
                nome: "Kiwi",
                imagem: kiwi,
            },
            {
                nome: "Maça",
                imagem: maca,
            },
            {
                nome: "Manga",
                imagem: manga,
            },
        ]
    }
}

export default cesta;