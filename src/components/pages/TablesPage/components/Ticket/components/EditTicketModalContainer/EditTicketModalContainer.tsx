import { FC } from 'react';
import {
    useDeleteTicket,
    useFetchAllTicketsData,
    useFetchTicketData,
} from '../../../../hooks';
import { EditTicketModal } from '../EditTicketModal/EditTicketModal';

type EditTicketModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
    ticketId: string;
};

export const EditTicketModalContainer: FC<EditTicketModalProps> = ({
    isOpen,
    onClose,
    ticketId,
}) => {
    const { ticket } = useFetchTicketData(ticketId);
    const { deleteTicket } = useDeleteTicket();
    const { refetch } = useFetchAllTicketsData();

    if (!ticket) return null;

    const handleDeleteTicket = async () => {
        try {
            const response = await deleteTicket({
                id: ticketId,
            });

            if (response.data?.removeTicket.id) {
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
            handleDeleteTicket={handleDeleteTicket}
            currectTicket={ticket}
        />
    );
};
