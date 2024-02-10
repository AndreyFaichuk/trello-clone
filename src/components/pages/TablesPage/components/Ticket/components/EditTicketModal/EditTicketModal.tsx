import { FC, useState } from 'react';
import { ModalWindow } from '../../../shared/ModalWindow';
import {
    StyledEditTicketCommentsWrapper,
    StyledEditTicketInfoWrapper,
    StyledEditTicketModalColumnText,
    StyledEditTicketModalTitle,
    StyledEditTicketModalWrapper,
} from './EditTicketModal.styled';
import QueueIcon from '@mui/icons-material/Queue';

import {
    Button,
    FormControl,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
} from '@mui/material';
import { getCategoryLabel } from './utils';
import { getDaysDifference } from '../../utils';
import DeleteIcon from '@mui/icons-material/Delete';
import { CreateTicketDataVariables, ExpandTicketData } from '../../../../types';
import { PRIORITIES, TABLES } from '../../../../TablePage.constants';
import dayjs from 'dayjs';

type EditTicketModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
    currectTicket: ExpandTicketData | null;
    handleDeleteTicket?: VoidFunction;
    handleCreateTicket?: (values: CreateTicketDataVariables) => void;
};

export const EditTicketModal: FC<EditTicketModalProps> = ({
    isOpen,
    onClose,
    currectTicket,
    handleDeleteTicket,
    handleCreateTicket,
}) => {
    const [newTicketData, setNewTicketData] =
        useState<CreateTicketDataVariables>({
            name: '',
            comment: '',
            dateCreated: dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZ'),
            category: 'backlog',
            priority: 'low',
        });

    const handleChange = (field: string, value: string) => {
        setNewTicketData({
            ...newTicketData,
            [field]: value,
        });
    };

    if (currectTicket) {
        return (
            <ModalWindow isOpen={isOpen} onClose={onClose}>
                <StyledEditTicketModalWrapper>
                    <Stack gap={3} height="100%">
                        <StyledEditTicketInfoWrapper>
                            <StyledEditTicketModalTitle>
                                {currectTicket.name}
                            </StyledEditTicketModalTitle>
                            <StyledEditTicketModalColumnText>
                                Column name:{' '}
                                {getCategoryLabel(currectTicket.category)}
                            </StyledEditTicketModalColumnText>
                            <StyledEditTicketModalColumnText>
                                Days after creating:{' '}
                                {getDaysDifference(currectTicket.dateCreated)}
                            </StyledEditTicketModalColumnText>
                            <StyledEditTicketModalColumnText>
                                Priority: {currectTicket.priority}
                            </StyledEditTicketModalColumnText>
                        </StyledEditTicketInfoWrapper>
                        <StyledEditTicketCommentsWrapper>
                            <StyledEditTicketModalColumnText>
                                Comments:
                            </StyledEditTicketModalColumnText>
                            <Paper elevation={3} sx={{ p: 1 }}>
                                {currectTicket.comment}
                            </Paper>
                        </StyledEditTicketCommentsWrapper>
                        <Button
                            onClick={handleDeleteTicket}
                            variant="contained"
                            color="primary"
                            startIcon={<DeleteIcon />}
                            sx={{ color: 'black' }}
                        >
                            Delete ticket
                        </Button>
                    </Stack>
                </StyledEditTicketModalWrapper>
            </ModalWindow>
        );
    }

    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <StyledEditTicketModalWrapper>
                <Stack gap={7.5} height="100%">
                    <StyledEditTicketInfoWrapper>
                        <StyledEditTicketModalTitle>
                            Enter a name for the ticket
                        </StyledEditTicketModalTitle>
                        <TextField
                            size="small"
                            value={newTicketData.name}
                            onChange={(e) =>
                                handleChange('name', e.target.value)
                            }
                        />
                        <StyledEditTicketModalTitle>
                            Choose a column for the ticket
                        </StyledEditTicketModalTitle>
                        <FormControl fullWidth>
                            <Select
                                size="small"
                                value={newTicketData.category}
                                onChange={(e) =>
                                    handleChange('category', e.target.value)
                                }
                            >
                                {TABLES.map((table) => {
                                    return (
                                        <MenuItem
                                            key={table.category}
                                            value={table.category}
                                        >
                                            {table.title}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <StyledEditTicketModalTitle>
                            Choose a priority type for the ticket
                        </StyledEditTicketModalTitle>
                        <FormControl fullWidth>
                            <Select
                                size="small"
                                value={newTicketData.priority}
                                onChange={(e) =>
                                    handleChange('priority', e.target.value)
                                }
                            >
                                {PRIORITIES.map((priority) => {
                                    return (
                                        <MenuItem
                                            key={priority}
                                            value={priority}
                                        >
                                            {priority.replace(
                                                /^./,
                                                priority[0].toUpperCase(),
                                            )}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </StyledEditTicketInfoWrapper>
                    <StyledEditTicketCommentsWrapper>
                        <StyledEditTicketModalTitle>
                            Here you can add comment:
                        </StyledEditTicketModalTitle>
                        <TextField
                            value={newTicketData.comment}
                            onChange={(e) =>
                                handleChange('comment', e.target.value)
                            }
                        />
                    </StyledEditTicketCommentsWrapper>
                    <Button
                        onClick={() =>
                            handleCreateTicket &&
                            handleCreateTicket(newTicketData)
                        }
                        variant="contained"
                        color="primary"
                        startIcon={<QueueIcon />}
                        sx={{ color: 'black' }}
                        disabled={
                            !(newTicketData.comment && newTicketData.name)
                        }
                    >
                        Create ticket
                    </Button>
                </Stack>
            </StyledEditTicketModalWrapper>
        </ModalWindow>
    );
};
