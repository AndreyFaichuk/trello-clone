export type TableCategory =
    | 'backlog'
    | 'selected_for_development'
    | 'in_progress'
    | 'on_review'
    | 'selected_for_qa'
    | 'done';

export type TablePriority = 'low' | 'middle' | 'high' | 'urgent' | 'blocker';

export type Ticket = {
    id: string;
    name: string;
    category: TableCategory;
    dateCreated: string;
    priority: TablePriority;
};

export type TableConfig = {
    title: string;
    category: TableCategory;
};

export type TablePageProps = {
    allTickets: Ticket[];
    onDragOver: (ev: React.DragEvent) => void;
    onDragStart: (ev: React.DragEvent, id: string) => void;
    onDrop: (ev: React.DragEvent, category: TableCategory) => void;
    updateFilter: (newFilter: string) => void;
    filter: string;
};

export interface TablePageProviderProps {
    children: React.ReactNode;
    tickets: Ticket[];
}
