import dayjs from 'dayjs';
import { theme } from '../../../../../theme';
import { TablePriority } from '../../TablesPageProvider/types';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import UrgentIcon from '@mui/icons-material/PriorityHigh';
import MiddlePriorityIcon from '@mui/icons-material/KeyboardArrowUp';
import HighPriorityIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import BlockerIcon from '@mui/icons-material/Block';
import { ReactElement } from 'react';

export const getDaysDifference = (date: string): number => {
    return Math.max(1, Math.abs(dayjs(date).diff(dayjs(), 'day')));
};

export const getColorFromDaysCount = (days: number): string => {
    switch (true) {
        case days <= 3:
            return theme.palette.success.light;
        case days <= 5:
            return theme.palette.success.main;
        case days <= 7:
            return theme.palette.success.dark;
        case days <= 9:
            return theme.palette.warning.light;
        case days <= 11:
            return theme.palette.warning.main;
        case days <= 13:
            return theme.palette.warning.dark;
        case days <= 15:
            return theme.palette.error.light;
        case days <= 17:
            return theme.palette.error.main;
        case days >= 20:
            return theme.palette.error.dark;
        default:
            return theme.palette.success.main;
    }
};

export const TicketIcon: React.FC<{ type: TablePriority }> = ({
    type,
}): ReactElement => {
    switch (type) {
        case 'low':
            return <LowPriorityIcon />;
        case 'middle':
            return <MiddlePriorityIcon />;
        case 'high':
            return <HighPriorityIcon />;
        case 'urgent':
            return <UrgentIcon />;
        case 'blocker':
            return <BlockerIcon />;
        default:
            return <LowPriorityIcon />;
    }
};
