import { useQuery } from '@apollo/client';
import { ALL_TICKETS_QUERY } from './queries';
import { AllTicketsDataResponse } from './types';

export const useFetchAllTicketsData = () => {
    const { data, error, loading } =
        useQuery<AllTicketsDataResponse>(ALL_TICKETS_QUERY);

    return {
        allTickets: data?.allTickets,
        error,
        loading,
    };
};
