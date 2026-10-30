export type CategoryType = 'All' | 'Art' | 'Music' | 'Collectibles' | 'Sports'

export interface CategoryTabType {
    id: number;
    label: CategoryType;
}

// catalog cards
export type NftSection = 'trending' | 'recently';

export interface CatalogCardType {
    id: number;
    image: string;
    liked: boolean;
    title: string;
    author: string;
    currentBid: number;
    bidders: string[];
    extraBiddersCount: number;
    categoryId: number;
    section: NftSection;
}

// top creators

export interface TopCreatorType {
    id: number;
    avatar: string;
    username: string;
    artworks: number;
    rating: number;
}

export interface HistoryType extends Pick<CatalogCardType, 'id' | 'image' | 'title' | 'author' | 'currentBid'> {
    time: string;
}