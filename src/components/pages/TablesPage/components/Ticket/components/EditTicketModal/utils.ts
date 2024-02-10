import { TABLES } from '../../../../TablePage.constants';
import { TableCategory } from '../../../../TablesPageProvider/types';

export const getCategoryLabel = (category: TableCategory) => {
    const tableConfig = TABLES.find((config) => config.category === category);
    return tableConfig ? tableConfig.title : 'Unknown Category';
};
