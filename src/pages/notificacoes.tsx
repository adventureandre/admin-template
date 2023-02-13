import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
   const {tema, alternarTema} = useAppData()
    return (
        <>
            <Layout titulo="Notificações"
                    subtitulo="Gerencie as suas Notificaçoes">
                {tema}
                <button onClick={alternarTema}>Click</button>
            </Layout>
        </>
    )
}
