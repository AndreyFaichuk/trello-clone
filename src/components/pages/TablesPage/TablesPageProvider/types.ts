export type TableCategory =
    | 'backlog'
    | 'selected_for_development'
    | 'in_progress'
    | 'selected_for_qa'
    | 'done';

export type Ticket = {
    id: number;
    name: string;
    category: TableCategory;
    dateCreated: string;
};

export type TableConfig = {
    title: string;
    category: TableCategory;
};

export type TablePageProps = {
    tables: TableConfig[];
    tickets: Ticket[];
    onDragOver: (ev: React.DragEvent) => void;
    onDragStart: (ev: React.DragEvent, id: number) => void;
    onDrop: (ev: React.DragEvent, category: TableCategory) => void;
};

export interface TablePageProviderProps {
    children: React.ReactNode;
}
