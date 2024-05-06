interface Category {
    categoryName: string,
}

interface Game {
    gameName: string,
    gameCategories?: Category[],
    gamePrice: number,
    gameImage: string,
    gameVideo?: string
}