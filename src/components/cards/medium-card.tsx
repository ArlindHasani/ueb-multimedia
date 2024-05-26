import CategoryTag from "../buttons/category-tag";

export default function MediumCard(props: Game) {
    const { gameName, gamePrice, gameImage } = props;

    return (
        <div className="relative cursor-pointer p-3 h-[350px] w-[250px] rounded-lg overflow-hidden group">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(./assets/${gameImage})` }}
            ></div>
            <div className="absolute w-full h-full left-0 top-0 bg-light-black/10 rounded-2xl"></div>
            <div className="h-full flex flex-col justify-between z-10 relative">
                <h2 className="text-white text-md font-bold z-10">{gameName}</h2>
                <CategoryTag categoryName={`$${gamePrice}`} />
            </div>
        </div>
    );
}
