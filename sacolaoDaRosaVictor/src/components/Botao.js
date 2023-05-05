import React from "react";
import Texto from "./Texto";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Botao({texto, style}){
    return<>
        <TouchableOpacity style={[estilos.botao, style]}>    
            <Texto style={estilos.botaoTexto}>{texto}</Texto>
        </TouchableOpacity>
    </>
};

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "purple",
        paddingVertical: 12,
        borderRadius: 6,
    },
    botaoTexto: {
        color: "#FFFF",
        textAlign: "center",
        fontSize: 23,
        fontWeight: "bold",
        lineHeight: 26,
    }
})