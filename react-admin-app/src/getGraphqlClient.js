import { buildApolloClient } from "aor-simple-graphql-client";
import gql from "graphql-tag";

export default buildApolloClient({
    queries: {
        Command: {
            GET_LIST: gql`
                query getTransactionIdentificationCheckFromTransaction(bank_transaction_id: $bankTransactionId) {
                id,
                uuid,
                score,
                debtor_name,
                invoice_number,
                invoice_numbers,
                merchant_name,
                ticket_uuid,
                ticket_amount,
                ticket_state,
                ticket_due_date,
                ticket_outstanding_amount,
                invoice_date
            }`,
        },
    },
});
