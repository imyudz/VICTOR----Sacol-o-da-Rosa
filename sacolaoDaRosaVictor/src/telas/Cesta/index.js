import React from "react";
import { ScrollView } from "react-native";

import Topo from './componentes/Topo.js';
import Descricao from './componentes/Descricao.js';
import Itens from './componentes/Itens.js';

export default function Cesta({topo, detalhes, itens}){
    return <ScrollView>
        <Topo {...topo}/>
        <Descricao {...detalhes}/> 
        <Itens {...itens} />
    </ScrollView>
}