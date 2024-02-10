import { gql } from '@apollo/client';

export const TICKET_DATA_FRAGMENT = gql`
    fragment TicketData on Ticket {
        id
        name
        category
        dateCreated
        priority
    }
`;
