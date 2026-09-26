import type { StorageDataType, StoragePeriod } from "../types/mocksTypes";

export const storageMock: Record<StoragePeriod, StorageDataType[]> = {
    weekly: [
        { id: 1, name: 'Your files', value: 58 },
        { id: 2, name: 'System', value: 27 },
        { id: 3, name: 'Other', value: 15 },
    ],
    monthly: [
        { id: 1, name: 'Your files', value: 63 },
        { id: 2, name: 'System', value: 25 },
        { id: 3, name: 'Other', value: 12 },
    ],
    yearly: [
        { id: 1, name: 'Your files', value: 68 },
        { id: 2, name: 'System', value: 21 },
        { id: 3, name: 'Other', value: 11 },
    ]
}