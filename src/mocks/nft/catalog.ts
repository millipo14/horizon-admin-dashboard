import img1 from '../../assets/nft/cards_background/1.png'
import img2 from '../../assets/nft/cards_background/2.png'
import img3 from '../../assets/nft/cards_background/3.png'
import img4 from '../../assets/nft/cards_background/4.png'
import img5 from '../../assets/nft/cards_background/5.png'
import img6 from '../../assets/nft/cards_background/6.png'

import type { CatalogCardType } from "../../types/mocksNftTypes";

export const catalogCards: CatalogCardType[] = [
    // ─── Trending NFTs ───
    {
        id: 1,
        image: img1,
        liked: false,
        title: 'Abstract Colors',
        author: 'Esthera Jackson',
        currentBid: 0.91,
        bidders: [
            'https://i.pravatar.cc/150?img=1',
            'https://i.pravatar.cc/150?img=2',
            'https://i.pravatar.cc/150?img=3',
            'https://i.pravatar.cc/150?img=4',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'trending',
    },
    {
        id: 2,
        image: img2,
        liked: false,
        title: 'ETH AI Brain',
        author: 'Nick Wilson',
        currentBid: 2.82,
        bidders: [
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=6',
            'https://i.pravatar.cc/150?img=7',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'trending',
    },
    {
        id: 3,
        image: img3,
        liked: false,
        title: 'Mesh Gradients',
        author: 'Will Smith',
        currentBid: 0.56,
        bidders: [
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=9',
            'https://i.pravatar.cc/150?img=10',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'trending',
    },

    // ─── Recently Added ───
    {
        id: 4,
        image: img4,
        liked: false,
        title: 'Swipe Circles',
        author: 'Peter Will',
        currentBid: 2.30,
        bidders: [
            'https://i.pravatar.cc/150?img=11',
            'https://i.pravatar.cc/150?img=12',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'recently',
    },
    {
        id: 5,
        image: img5,
        liked: false,
        title: 'Colorful Heaven',
        author: 'Mark Benjamin',
        currentBid: 1.30,
        bidders: [
            'https://i.pravatar.cc/150?img=13',
            'https://i.pravatar.cc/150?img=14',
            'https://i.pravatar.cc/150?img=15',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'recently',
    },
    {
        id: 6,
        image: img6,
        liked: false,
        title: '3D Cubes Art',
        author: 'Manny Gates',
        currentBid: 6.58,
        bidders: [
            'https://i.pravatar.cc/150?img=16',
            'https://i.pravatar.cc/150?img=17',
            'https://i.pravatar.cc/150?img=18',
            'https://i.pravatar.cc/150?img=19',
        ],
        extraBiddersCount: 18,
        categoryId: 1,
        section: 'recently',
    },
];