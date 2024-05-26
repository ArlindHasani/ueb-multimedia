import { LuHeart } from "react-icons/lu";

interface WishlistButton{
    buttonName: string
}

export default function Wishlsit(props: WishlistButton) {

    const {buttonName} = props

    return (
        <button className="bg-zinc-700/95 h-full px-4 rounded-lg text-sm transition-transform">
            <LuHeart/>
        </button>
    )
}
