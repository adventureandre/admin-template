import { IconeSol } from "../icons"
import { IconeLua } from "../icons"

interface BotaoAlternarTemaProps {
    tema: any
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className="
        hidden sm:flex items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
        ">
            <div className="
            flex justify-center items-center
            bg-white text-yellow-600 w-6 h-6 rounded-full
            ">
                {IconeSol(4)}
            </div>
            <div className="hidden lg:flex  ml-4 text-white" >
                <span className="text-sm">Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className="
        hidden sm:flex justify-end items-center cursor-pointer
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8 p-1 rounded-full
        ">
            <div className="hidden lg:flex  mr-2 text-gray-300" >
                <span className="text-sm">Escuro</span>
            </div>
            <div className="
            flex justify-center items-center
            bg-black text-yellow-300 w-6 h-6 rounded-full
            ">
                {IconeLua(4)}
            </div>
        </div>
    )
}