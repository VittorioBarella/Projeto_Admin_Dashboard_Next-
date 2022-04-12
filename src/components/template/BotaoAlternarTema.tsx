import { IconeSol } from './../../icons/index';

interface BotaoAlternarTemaProps {
    tema: String
    alternarTema: () => void
}

export default function BotaoAlternarTema(props:BotaoAlternarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={``}>
            <div className={`
            
            `}>
                {IconeSol}
            </div>
            <div className={`
            
            `}>
                <span>Claro</span>
            </div>
        </div>
    ):(
        <div></div>
    )
}