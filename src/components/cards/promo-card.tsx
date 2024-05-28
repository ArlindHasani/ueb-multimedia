import { Link } from 'react-router-dom'

export default function PromoCard(props: GamePromo) {
  const {gameName, gameImage, promoDescription, promoAction} = props

  return (
    <div className='flex flex-col gap-5 rounded-lg cursor-pointer'>
        <img 
          className="w-full h-[300px] object-cover rounded-md"
          src={gameImage} 
          alt={`${gameName} promotional image`}
        />
        <div className='flex flex-col gap-4 text-white'>
            <h4 className='text-lg font-semibold'>{gameName}</h4>
            <p className='text-sm text-zinc-400'>{promoDescription}</p>
            <Link 
              className="border-b w-fit border-zinc-700 transition-colors hover:border-white hover:text-white"
              to={`/${gameName}`}
            >
              {promoAction}
            </Link>
        </div>
    </div>
  )
}
