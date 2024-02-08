import { FC, useState } from 'react';
import {
    StyledTicketDaysCounterText,
    StyledTicketNameWrapper,
    StyledTicketTitle,
    StyledTicketTooltipWrapper,
    StyledTicketWrapper,
} from './Ticket.styled';
import { useTablePageContext } from '../../TablesPageProvider/TablesPageProvider';
import { Ticket as TicketProps } from '../../TablesPageProvider/types';
import { generatePath, useHistory } from 'react-router';
import { AppRoute } from '../../../../../lib/routes';
import { EditTicketModal } from './components/EditTicketModal';
import { getColorFromDaysCount, getDaysDifference } from './utils';
import { Box } from '@mui/system';
import { Tooltip } from '@mui/material';

export const Ticket: FC<TicketProps> = ({
    id,
    name,
    category,
    dateCreated,
}) => {
    const { onDragStart } = useTablePageContext();
    const history = useHistory();

    const [openEditTicketModal, setIsEditTicketModal] =
        useState<boolean>(false);

    const handleEditTicketModalOpen = () => setIsEditTicketModal(true);
    const handleEditTicketModalClose = () => setIsEditTicketModal(false);

    const onEditTicketModalOpen = () => {
        history.push(
            generatePath(AppRoute.EDIT_TICKET, {
                category,
                id,
            }),
        );
        handleEditTicketModalOpen();
    };

    const onEditTicketModalClose = () => {
        history.push(generatePath(AppRoute.TABLES));
        handleEditTicketModalClose();
    };

    const daysInColumn = getDaysDifference(dateCreated);
    const daysInColumnColor = getColorFromDaysCount(daysInColumn);

    return (
        <>
            <StyledTicketWrapper
                elevation={1}
                draggable
                onDragStart={(e) => onDragStart(e, id)}
                onClick={onEditTicketModalOpen}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <StyledTicketNameWrapper>
                        <StyledTicketTitle>{name}</StyledTicketTitle>
                    </StyledTicketNameWrapper>
                    <StyledTicketTitle>
                        <Tooltip title={`${daysInColumn} days in column`}>
                            <StyledTicketTooltipWrapper
                                style={{ backgroundColor: daysInColumnColor }}
                            >
                                <Box>
                                    <StyledTicketDaysCounterText>
                                        {daysInColumn}
                                    </StyledTicketDaysCounterText>
                                </Box>
                            </StyledTicketTooltipWrapper>
                        </Tooltip>
                    </StyledTicketTitle>
                </Box>
            </StyledTicketWrapper>
            <EditTicketModal
                isOpen={openEditTicketModal}
                onClose={onEditTicketModalClose}
            />
        </>
    );
};
