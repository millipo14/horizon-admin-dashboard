import earningsIcon from '../assets/dashboard/cardIcons/earnings.svg'
import spendIcon from '../assets/dashboard/cardIcons/spend.svg'
import balanceIcon from '../assets/dashboard/cardIcons/balance.png'
import tasksIcon from '../assets/dashboard/cardIcons/tasks.svg'
import projectsIcon from '../assets/dashboard/cardIcons/projects.svg'

import type { DashboardCards } from '../types/mocksTypes'

export const dashboardCardsData: DashboardCards[] = [
    {
        id: 1,
        type: 'earnings',
        title: 'Earnings',
        value: '$350.4',
        icon: earningsIcon,
    },
    {
        id: 2,
        type: 'spend',
        title: 'Spend this month',
        value: '$642.39',
        icon: spendIcon,
    },
    {
        id: 3,
        type: 'sales',
        title: 'Sales',
        value: '$574.34',
        icon: '',
        change: {
            percent: '+23 %',
            text: 'since last month '
        }
    },
    {
        id: 4,
        type: 'balance',
        title: 'Your balance',
        value: '$1,000',
        icon: balanceIcon,
        additionalElement: 'dropdown'
    },
    {
        id: 5,
        type: 'tasks',
        title: 'New Tasks',
        value: '154',
        icon: tasksIcon,
    },
    {
        id: 6,
        type: 'projects',
        title: 'Total Projects',
        value: '2935',
        icon: projectsIcon,
    }
]