export default function SaleCard(props: Sale) {

    const { saleName, saleImage } = props;

    const cardStyle = {
        backgroundImage: `url(${saleImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="rounded-lg w-full h-[275px] cursor-pointer group" style={cardStyle}>
            <div className="w-full h-full z-10 transition-colors group-hover:bg-white/10"></div>
        </div>
    );
}
