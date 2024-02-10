import { gql } from '@apollo/client';
import { TICKET_DATA_FRAGMENT } from '../../../fragments';

export const ALL_TICKETS_QUERY = gql`
    query {
        allTickets {
            ...TicketData
        }
    }
    ${TICKET_DATA_FRAGMENT}
`;

export const TICKET_QUERY = gql`
    query Ticket($id: ID!) {
        Ticket(id: $id) {
            comment
            ...TicketData
        }
    }
    ${TICKET_DATA_FRAGMENT}
`;

export const UPDATE_TICKET_MUTATION = gql`
    mutation updateTicket(
        $id: ID!
        $name: String
        $category: String
        $comment: String
    ) {
        updateTicket(
            id: $id
            name: $name
            category: $category
            comment: $comment
        ) {
            ...TicketData
        }
    }
    ${TICKET_DATA_FRAGMENT}
`;

export const DELETE_TICKET_MUTATION = gql`
    mutation removeTicket($id: ID!) {
        removeTicket(id: $id) {
            ...TicketData
        }
    }
    ${TICKET_DATA_FRAGMENT}
`;

export const CREATE_TICKET_MUTATION = gql`
    mutation createTicket(
        $name: String!
        $category: String!
        $comment: String!
        $dateCreated: String!
        $priority: String!
    ) {
        createTicket(
            name: $name
            category: $category
            comment: $comment
            dateCreated: $dateCreated
            priority: $priority
        ) {
            ...TicketData
        }
    }
    ${TICKET_DATA_FRAGMENT}
`;
