export type CategoryType = 'Art' | 'Music' | 'Collectibles' | 'Sports'

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