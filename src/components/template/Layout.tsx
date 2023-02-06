import MenuLateral from "./MenuLateral"
import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";

interface LayoutProps {
    titulo: string,
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="dark flex h-screen w-screen">
            <MenuLateral/>
            <div className="flex flex-col bg-gray-300 dark:bg-gray-800 w-full p-7">
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )

}