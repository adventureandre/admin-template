import Link from "next/link";

interface MenuItemProps {
    url?: string,
    texto: string,
    icone: any,
    className?: string,
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        let link = (
            <Link className={`
                flex flex-col justify-center items-center 
                 h-20 w-20
                 dark:text-gray-200
                 ${props.className}
                 `}
                  href={(props.url ? props.url : '')}>
                {props.icone}
                <span className="text-xs font-light">
                    {props.texto}
                </span>
            </Link>
        )
        let icon = (
            <div className={`
                flex flex-col justify-center items-center 
                 h-20 w-20
                 dark:text-gray-200
                 ${props.className}
                 `}>
                {props.icone}
                <span className="text-xs font-light">
                    {props.texto}
                </span>
            </div>
        )

        return props.url ? link : icon
    }

    return (
        <li onClick={props.onClick} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            {renderizarLink()}
        </li>
    )
}