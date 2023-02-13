import {createContext, useState} from "react";

type Tema = 'dark' | '';

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}
interface AppProviderProps{
    props?: any
    children?: any
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppProviderProps) {
    const [tema, setTema] = useState<Tema>('')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;