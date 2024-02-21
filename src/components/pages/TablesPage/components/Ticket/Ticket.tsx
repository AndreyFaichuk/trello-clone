import { FC } from 'react';
import {
    StyledTicketDaysCounterText,
    StyledTicketNameWrapper,
    StyledTicketTitle,
    StyledTicketTooltipWrapper,
    StyledTicketWrapper,
} from './Ticket.styled';
import { useTablePageContext } from '../../TablesPageProvider/TablesPageProvider';
import {
    TableCategory,
    Ticket as TicketProps,
} from '../../TablesPageProvider/types';
import { TicketIcon, getColorFromDaysCount, getDaysDifference } from './utils';
import { Box } from '@mui/system';
import { Stack, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

type CurrentTicketProps = TicketProps & {
    onClick: (id: string, category: TableCategory) => void;
};

export const Ticket: FC<CurrentTicketProps> = ({
    id,
    name,
    category,
    dateCreated,
    priority,
    onClick,
}) => {
    const { onDragStart } = useTablePageContext();

    const daysInColumn = getDaysDifference(dateCreated);
    const daysInColumnColor = getColorFromDaysCount(daysInColumn);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.1 }}
        >
            <StyledTicketWrapper
                draggable
                onDragStart={(e) => onDragStart(e, id)}
                onClick={() => onClick(id, category)}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <StyledTicketNameWrapper>
                        <StyledTicketTitle variant="h3">
                            {name}
                        </StyledTicketTitle>
                    </StyledTicketNameWrapper>
                    <Stack direction="column" alignItems="center" gap={2}>
                        <Tooltip title={`${daysInColumn} days in column`}>
                            <StyledTicketTooltipWrapper
                                style={{
                                    backgroundColor: daysInColumnColor,
                                }}
                            >
                                <Box>
                                    <StyledTicketDaysCounterText>
                                        {daysInColumn}
                                    </StyledTicketDaysCounterText>
                                </Box>
                            </StyledTicketTooltipWrapper>
                        </Tooltip>
                        <Tooltip title={`${priority} priority`}>
                            <Box>
                                <TicketIcon type={priority} />
                            </Box>
                        </Tooltip>
                    </Stack>
                </Box>
            </StyledTicketWrapper>
        </motion.div>
    );
};
