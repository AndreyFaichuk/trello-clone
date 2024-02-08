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
