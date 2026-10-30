import { faker } from '@faker-js/faker';

import AppleIcon from '../../assets/tables/apple.svg?react';
import AndroidIcon from '../../assets/tables/android.svg?react';
import WindowsIcon from '../../assets/tables/windows.svg?react';

import type { DevelopmentTableType } from '../../types/mockTablesTypes';

const platformsPool = [AppleIcon, AndroidIcon, WindowsIcon];

export const developmentTableMock: DevelopmentTableType[] = faker.helpers.multiple(
    () => {
        const platforms = faker.helpers.arrayElements(platformsPool, { min: 1, max: 3 });
        const progress = faker.number.float({ min: 0, max: 100, fractionDigits: 1 });
        const date = faker.date.past({ years: 2 })
            .toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })
            .replace(/ /g, '.');

        return {
            id: faker.number.int({ min: 1, max: 100000 }),
            name: faker.commerce.productName(),
            platforms,
            date,
            progress,
        };
    },
    { count: 11 }
);