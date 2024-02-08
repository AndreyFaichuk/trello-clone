import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ModalWindow } from '../../../shared/ModalWindow';
import { StyledEditTicketModalWrapper } from './EditTicketModal.styled';

type EditTicketModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
};

export const EditTicketModal: FC<EditTicketModalProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <StyledEditTicketModalWrapper>
                <Typography variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                </Typography>
            </StyledEditTicketModalWrapper>
        </ModalWindow>
    );
};
