import { FC } from 'react';
import { useCreateTicket, useFetchAllTicketsData } from '../../../../hooks';
import { EditTicketModal } from '../EditTicketModal/EditTicketModal';
import { CreateTicketDataVariables } from '../../../../types';

type CreateTicketModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
};

export const CreateTicketModalContainer: FC<CreateTicketModalProps> = ({
    isOpen,
    onClose,
}) => {
    const { createTicket } = useCreateTicket();
    const { refetch } = useFetchAllTicketsData();

    const handleCreateTicket = async (values: CreateTicketDataVariables) => {
        try {
            const response = await createTicket({
                name: values.name,
                category: values.category,
                dateCreated: values.dateCreated,
                comment: values.comment,
                priority: values.priority,
            });

            if (response.data?.createTicket.id) {
                refetch();
                onClose();
            }
        } catch (error) {
            throw new Error(error as string);
        }
    };

    return (
        <EditTicketModal
            isOpen={isOpen}
            onClose={onClose}
            handleCreateTicket={handleCreateTicket}
            currectTicket={null}
        />
    );
};
