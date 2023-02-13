import MenuLateral from "./MenuLateral"
import Cabecalho from "@/components/template/Cabecalho";
import Conteudo from "@/components/template/Conteudo";
import useAppData from "@/data/hook/useAppData";

interface LayoutProps {
    titulo: string,
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const {tema} = useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen`}>
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