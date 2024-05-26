import { Link } from "react-router-dom"

interface Button{
    buttonCta: string
    buttonLink: string
}

export default function PrimaryButton(props: Button) {

    const {buttonCta, buttonLink} = props

    return (
        <Link to={buttonLink} className="button-gradient py-4 px-4 rounded-lg text-sm transition-transform">
            {buttonCta}
        </Link>
    )
}
