import { TableConfig, TablePriority } from './TablesPageProvider/types';

export const TABLES: TableConfig[] = [
    { title: 'Backlog', category: 'backlog' },
    {
        title: 'Selected for development',
        category: 'selected_for_development',
    },
    { title: 'In Progress', category: 'in_progress' },
    { title: 'On review', category: 'on_review' },
    { title: 'Selected for QA', category: 'selected_for_qa' },
    { title: 'Done', category: 'done' },
];

export const PRIORITIES: TablePriority[] = [
    'low',
    'middle',
    'high',
    'urgent',
    'blocker',
];
