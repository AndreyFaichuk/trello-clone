import { Ticket } from './TablesPageProvider/types';

export type ExpandTicketData = Ticket & { comment: string };

// all tickets

export type AllTicketsDataResponse = { allTickets: Ticket[] };

// one ticket

export type TicketDataResponse = { Ticket: ExpandTicketData };

export type TicketDataVariables = {
    id: string;
};

// update one ticket

export type UpdateTicketDataResponse = { Ticket: Ticket };

export type UpdateTicketDataVariables = {
    id: string;
    category: string | null;
};

// delete one ticket

export type DeleteTicketDataResponse = { removeTicket: Ticket };

export type DeleteTicketDataVariables = {
    id: string;
};

// create one ticket

export type CreateTicketDataResponse = { createTicket: Ticket };

export type CreateTicketDataVariables = Omit<ExpandTicketData, 'id'>;
