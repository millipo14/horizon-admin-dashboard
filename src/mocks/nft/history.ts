import { catalogCards } from "./catalog";

import type { HistoryType } from "../../types/mocksNftTypes";

const timeLabels = ['30s ago', '58s ago', '1m ago', '1m ago', '2m ago', '3m ago'];

export const historyMock: HistoryType[] = catalogCards.map((card, index) => ({
    id: card.id,
    image: card.image,
    title: card.title,
    author: card.author,
    currentBid: card.currentBid,
    time: timeLabels[index],
}));