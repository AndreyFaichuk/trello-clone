import { useMutation, useQuery } from '@apollo/client';
import {
    ALL_TICKETS_QUERY,
    CREATE_TICKET_MUTATION,
    DELETE_TICKET_MUTATION,
    TICKET_QUERY,
    UPDATE_TICKET_MUTATION,
} from './queries';
import {
    AllTicketsDataResponse,
    CreateTicketDataResponse,
    CreateTicketDataVariables,
    DeleteTicketDataResponse,
    DeleteTicketDataVariables,
    TicketDataResponse,
    TicketDataVariables,
    UpdateTicketDataResponse,
    UpdateTicketDataVariables,
} from './types';

export const useFetchAllTicketsData = () => {
    const { data, error, loading, refetch } =
        useQuery<AllTicketsDataResponse>(ALL_TICKETS_QUERY);

    return {
        allTickets: data?.allTickets,
        error,
        loading,
        refetch,
    };
};

export const useFetchTicketData = (id: string) => {
    const { data, error, loading } = useQuery<
        TicketDataResponse,
        TicketDataVariables
    >(TICKET_QUERY, {
        variables: {
            id,
        },
        fetchPolicy: 'network-only',
    });

    return {
        ticket: data?.Ticket,
        error,
        loading,
    };
};

export const useUpdateTicket = () => {
    const [mutationFn, mutationResult] = useMutation<
        UpdateTicketDataResponse,
        UpdateTicketDataVariables
    >(UPDATE_TICKET_MUTATION);

    const updateTicket = async (values: UpdateTicketDataVariables) => {
        return mutationFn({
            variables: {
                ...values,
            },
        });
    };

    return { updateTicket, mutationResult } as const;
};

export const useDeleteTicket = () => {
    const [mutationFn, mutationResult] = useMutation<
        DeleteTicketDataResponse,
        DeleteTicketDataVariables
    >(DELETE_TICKET_MUTATION);

    const deleteTicket = async (values: DeleteTicketDataVariables) => {
        return mutationFn({
            variables: {
                ...values,
            },
        });
    };

    return { deleteTicket, mutationResult } as const;
};

export const useCreateTicket = () => {
    const [mutationFn, mutationResult] = useMutation<
        CreateTicketDataResponse,
        CreateTicketDataVariables
    >(CREATE_TICKET_MUTATION);

    const createTicket = async (values: CreateTicketDataVariables) => {
        return mutationFn({
            variables: {
                ...values,
            },
        });
    };

    return { createTicket, mutationResult } as const;
};
