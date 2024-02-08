import React, { FC } from 'react';

import { Dialog } from '@mui/material';
import {
    StyledModalWindowIconButton,
    StyledModalWindowWrapper,
} from './ModalWindow.styled';
import CloseIcon from '@mui/icons-material/Close';

type ModalWindowProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const ModalWindow: FC<ModalWindowProps> = ({
    isOpen,
    onClose,
    children,
}) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
            <StyledModalWindowIconButton onClick={handleClose}>
                <CloseIcon />
            </StyledModalWindowIconButton>
            <StyledModalWindowWrapper dividers={false}>
                {children}
            </StyledModalWindowWrapper>
        </Dialog>
    );
};
