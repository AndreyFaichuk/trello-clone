import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
    TableCategory,
    TableConfig,
    TablePageProps,
    TablePageProviderProps,
    Ticket,
} from './types';

export const TablePageContext = React.createContext<TablePageProps>({
    tables: [],
    tickets: [],
    onDragOver: () => {},
    onDragStart: () => {},
    onDrop: () => {},
});

export const TablePageProvider: React.FC<TablePageProviderProps> = ({
    children,
}) => {
    const [tickets, setTickets] = useState<Ticket[]>([
        {
            id: 1,
            name: 'Fix UI bug',
            category: 'backlog',
            dateCreated: '2024-01-31 14:08:42.307222+00',
        },
        {
            id: 2,
            name: 'Add new logic',
            category: 'backlog',
            dateCreated: '2024-02-02 14:08:42.307222+00',
        },
        {
            id: 3,
            name: 'Prepare component for new feature',
            category: 'backlog',
            dateCreated: '2024-01-15 14:08:42.307222+00',
        },
        {
            id: 4,
            name: 'Replace old styles',
            category: 'in_progress',
            dateCreated: '2024-01-11 14:08:42.307222+00',
        },
        {
            id: 5,
            name: 'Add new layout',
            category: 'in_progress',
            dateCreated: '2024-01-30 14:08:42.307222+00',
        },
        {
            id: 6,
            name: 'Add new button',
            category: 'done',
            dateCreated: '2024-01-27 14:08:42.307222+00',
        },
        {
            id: 7,
            name: 'Fix new layout',
            category: 'selected_for_qa',
            dateCreated: '2024-02-08 14:08:42.307222+00',
        },
        {
            id: 8,
            name: 'Remove old ui',
            category: 'in_progress',
            dateCreated: '2024-02-04 14:08:42.307222+00',
        },
    ]);

    const onDragOver = useCallback((ev: React.DragEvent) => {
        ev.preventDefault();
    }, []);

    const onDragStart = useCallback((ev: React.DragEvent, id: number) => {
        ev.dataTransfer.setData('id', id.toString());
    }, []);

    const onDrop = useCallback(
        (ev: React.DragEvent, destinationCategory: TableCategory) => {
            ev.preventDefault();

            const id = ev.dataTransfer.getData('id');

            setTickets((prevTasks) => {
                const updatedTasks = prevTasks.map((task) => {
                    if (task.id === +id) {
                        return { ...task, category: destinationCategory };
                    }
                    return task;
                });

                return updatedTasks;
            });
        },
        [],
    );

    const tables: TableConfig[] = useMemo(() => {
        return [
            { title: 'Backlog', category: 'backlog' },
            {
                title: 'Selected for development',
                category: 'selected_for_development',
            },
            { title: 'In Progress', category: 'in_progress' },
            { title: 'Selected for QA', category: 'selected_for_qa' },
            { title: 'Done', category: 'done' },
        ];
    }, []);

    const value = useMemo(() => {
        return { tickets, tables, onDragOver, onDragStart, onDrop };
    }, [tickets, tables, onDragOver, onDragStart, onDrop]);

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
