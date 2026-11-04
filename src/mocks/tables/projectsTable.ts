import { faker } from "@faker-js/faker";

import type { ProjectTableType } from "../../types/mockTablesTypes";


export const projectsTableMock: ProjectTableType[] = faker.helpers.multiple(
    () => {
        const date = faker.date.past({ years: 2 })
            .toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })
            .replace(/ /g, '.');

        return {
            id: faker.number.int({ min: 1, max: 10000 }),
            name: faker.company.name(),
            progress: faker.number.float({ min: 1, max: 100, fractionDigits: 1 }),
            tasks: faker.number.int({ min: 100, max: 1000 }),
            date,
        }
    },
    { count: 5 }
)