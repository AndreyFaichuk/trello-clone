import React, { useContext, useState } from 'react';

export type Task = {
    id: number;
    name: string;
    category: string;
};

export type TableConfig = {
    title: string;
    category: string;
};

export type TablePageProps = {
    tables: TableConfig[];
    tickets: Task[];
    onDragOver: (ev: React.DragEvent) => void;
    onDragStart: (ev: React.DragEvent, id: number) => void;
    onDrop: (ev: React.DragEvent, category: string) => void;
};

export const TablePageContext = React.createContext<TablePageProps>({
    tables: [],
    tickets: [],
    onDragOver: () => {},
    onDragStart: () => {},
    onDrop: () => {},
});

export interface TablePageProviderProps {
    children: React.ReactNode;
}

export const TablePageProvider: React.FC<TablePageProviderProps> = ({
    children,
}) => {
    const [tickets, setTickets] = useState<Task[]>([
        {
            id: 1,
            name: 'Add More Tasks',
            category: 'backlog',
        },
        {
            id: 2,
            name: 'Add',
            category: 'backlog',
        },
        {
            id: 3,
            name: 'Add',
            category: 'backlog',
        },
        {
            id: 4,
            name: 'Add Mosre Ts',
            category: 'in_progress',
        },
        {
            id: 5,
            name: 'Add More ddTs',
            category: 'in_progress',
        },
    ]);

    const onDragOver = (ev: React.DragEvent) => {
        ev.preventDefault();
    };

    const onDragStart = (ev: React.DragEvent, id: number) => {
        ev.dataTransfer.setData('id', id.toString());
    };

    const onDrop = (ev: React.DragEvent, destinationCategory: string) => {
        ev.preventDefault();

        const id = ev.dataTransfer.getData('id');
        const draggedTask = tickets.find((task) => task.id === +id);

        if (draggedTask) {
            setTickets((prevTasks) => {
                const updatedTasks = [...prevTasks];

                const sourceIndex = prevTasks.findIndex(
                    (task) => task.id === +id,
                );

                // If the category remains the same, handle position swap
                if (draggedTask.category === destinationCategory) {
                    updatedTasks.splice(sourceIndex, 1);
                    const destinationIndex = updatedTasks.findIndex(
                        (task) => task.category === destinationCategory,
                    );
                    updatedTasks.splice(destinationIndex, 0, draggedTask);
                } else {
                    // If the category changes, move the task to the new category
                    const updatedTask = {
                        ...draggedTask,
                        category: destinationCategory,
                    };
                    updatedTasks.splice(sourceIndex, 1);
                    updatedTasks.push(updatedTask);
                }

                return updatedTasks;
            });
        }
    };

    const tables: TableConfig[] = [
        { title: 'Backlog', category: 'backlog' },
        {
            title: 'Selected for development',
            category: 'selected_for_development',
        },
        { title: 'In Progress', category: 'in_progress' },
        { title: 'Done', category: 'done' },
    ];

    const value = { tickets, tables, onDragOver, onDragStart, onDrop };

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
