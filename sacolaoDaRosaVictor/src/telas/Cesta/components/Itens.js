import React from "react";
import Texto from "../../../components/Texto";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Itens({ titulo, frutas }) {
    return (<>
        <Texto style="titulo">{titulo}</Texto>
        {
            frutas.map(({ nome, imagem }) => {
                return <View key={nome} style={estilos.item}>
                    <Texto style={estilos.nome}>{nome}</Texto>
                    <Image source={imagem} />
                </View>
            })
        }
    </>);
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
    },
    item: {
        flexDirection: "none",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
    },
})

