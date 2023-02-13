import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";
import {useState} from "react";

export default function Notificacoes() {
const {alternarTema} = useAppData()
    return (
        <>
            <Layout titulo="Notificações"
                    subtitulo="Gerencie as suas Notificaçoes">
                <button onClick={alternarTema}>Alterna Tema</button>
            </Layout>
        </>
    )
}
