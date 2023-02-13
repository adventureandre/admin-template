import Layout from "@/components/template/Layout";
import {AppConsumer} from "@/data/context/AppContext";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
   const dados = useAppData()
    return (
        <>
            <Layout titulo="Notificações"
                    subtitulo="Gerencie as suas Notificaçoes">
                <AppConsumer>
                    {dados => <h3>{dados.nome}</h3>}
                </AppConsumer>
                {dados.nome}
            </Layout>
        </>
    )
}
