import { FC } from 'react';
import { StyledTicketTitle, StyledTicketWrapper } from './Ticket.styled';
import {
    Task,
    useTablePageContext,
} from '../../TablesPageProvider/TablesPageProvider';

export const Ticket: FC<Task> = ({ id, name }) => {
    const { onDragStart } = useTablePageContext();

    return (
        <StyledTicketWrapper
            elevation={1}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
        >
            <StyledTicketTitle>{name}</StyledTicketTitle>
        </StyledTicketWrapper>
    );
};
