interface Category {
    categoryName: string;
}

interface Game {
    gameName: string;
    gameCategories?: Category[];
    gameDescription?: string;
    gamePrice: number;
    gameImage: string;
    gameVideo?: string;
}

interface GamePromo {
    gameName: string;
    gamePrice: number;
    gameImage: string;
    promoDescription: string;
    promoAction: string;
}

interface Sale {
    saleName: string;
    saleImage: string;
}
