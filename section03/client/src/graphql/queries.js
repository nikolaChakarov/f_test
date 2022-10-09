import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export async function getCompany(id) {
    const query = gql`
        query Company($id: ID!) {
            company(id: $id) {
                name
                id
                description
            }
        }
    `;

    const variables = { id };
    const res = await request(GRAPHQL_URL, query, variables);
    return res;
}

export async function getJob(id) {
    const query = gql`
        query JobQuery($id: ID!) {
            job(id: $id) {
                title
                id
                description
                company {
                    id
                    name
                }
            }
        }
    `;

    const variables = { id };
    const res = await request(GRAPHQL_URL, query, variables);
    return res;
}

export async function getJobs() {
    const query = gql`
        {
            jobs {
                id
                title
                company {
                    name
                }
            }
        }
    `;

    const { jobs } = await request(GRAPHQL_URL, query);
    return jobs;
}
