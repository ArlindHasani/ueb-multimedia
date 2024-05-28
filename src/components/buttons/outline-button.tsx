import { Link } from 'react-router-dom'

interface Button{
    buttonCta: string
    buttonLink: string
}

export default function OutlineButton(props: Button) {

    const {buttonCta, buttonLink} = props

    return (
        <Link to={buttonLink} className="border py-1.5 px-6 rounded-lg text-sm transition-colors hover:bg-white/30">
            {buttonCta}
        </Link>
    )
}
