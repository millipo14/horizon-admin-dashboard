import { faker } from '@faker-js/faker';

import type { TopCreatorType } from "../../types/mocksNftTypes";


export const topCreatorsMock: TopCreatorType[] = faker.helpers.multiple(
    () => ({
        id: faker.number.int(),
        avatar: faker.image.avatar(),
        username: `@${faker.internet.username().toLowerCase()}`,
        artworks: faker.number.int({ min: 2000, max: 10000 }),
        rating: faker.number.int({ min: 10, max: 100 })
    }),
    { count: 15 }
)