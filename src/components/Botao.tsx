interface BotaoProps {
    cor?: 'green' | 'gray' | 'yellow'
    className?: string
    children: any,
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    //const cor = props.cor ?? 'yellow'
    const cor = props.cor ?? 'yellow'
    //bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
    //bg-gradient-to-r from-green-400 to-green-700
    return (
        <button onClick={props.onClick} className=
        {cor === 'green' ? 
            `bg-gradient-to-r from-green-400 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.className}` 

        : cor === 'gray' ? 
        `bg-gradient-to-r from-gray-400 to-gray-700
        text-white px-4 py-2 rounded-md
        ${props.className}` 

        : `bg-gradient-to-r from-yellow-400 to-yellow-700
        text-white px-4 py-2 rounded-md
        ${props.className}`}>
            {props.children}
        </button>
    );
}