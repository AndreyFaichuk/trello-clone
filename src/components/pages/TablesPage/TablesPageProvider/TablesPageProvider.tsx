import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import {
    TableCategory,
    TablePageProps,
    TablePageProviderProps,
    Ticket,
} from './types';
import { useUpdateTicket } from '../hooks';

export const TablePageContext = createContext<TablePageProps>({
    allTickets: [],
    onDragOver: () => {},
    onDragStart: () => {},
    onDrop: () => {},
    updateFilter: () => {},
    filter: '',
});

export const TablePageProvider: React.FC<TablePageProviderProps> = ({
    children,
    tickets,
}) => {
    const { updateTicket } = useUpdateTicket();

    const [allTickets, setAllTickets] = useState<Ticket[]>(tickets);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        setAllTickets(tickets);
    }, [tickets]);

    const onDragOver = useCallback((ev: React.DragEvent) => {
        ev.preventDefault();
    }, []);

    const onDragStart = useCallback((ev: React.DragEvent, id: string) => {
        ev.dataTransfer.setData('id', id);
    }, []);

    const onDrop = useCallback(
        async (ev: React.DragEvent, destinationCategory: TableCategory) => {
            ev.preventDefault();

            const id = ev.dataTransfer.getData('id');

            const foundTicket = allTickets.find((ticket) => ticket.id === id);

            if (foundTicket && destinationCategory !== foundTicket.category) {
                try {
                    await updateTicket({
                        id,
                        category: destinationCategory,
                    });
                } catch (error) {
                    throw new Error(error as string);
                }
            }
        },
        [allTickets],
    );

    const updateFilter = (newFilter: string) => {
        setFilter(newFilter);
    };

    const filteredTickets = useMemo(() => {
        return allTickets.filter((ticket) =>
            ticket.name.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [allTickets, filter]);

    const value = useMemo(() => {
        return {
            allTickets: filteredTickets,
            onDragOver,
            onDragStart,
            onDrop,
            updateFilter,
            filter,
        };
    }, [filteredTickets, onDragOver, onDragStart, onDrop, filter]);

    return (
        <TablePageContext.Provider value={value}>
            {children}
        </TablePageContext.Provider>
    );
};

export const useTablePageContext = () => {
    const context = useContext(TablePageContext);

    if (context === undefined) {
        throw new Error(
            'useTablePageContext must be used within a TablePageProvider',
        );
    }

    return context;
};
