import { request, gql } from "graphql-request";

const GRAPHQL_URL = "http://localhost:9000/graphql";

export async function getJob() {
    const query = gql`
        query {
            job(id: "soP9m8MdKeQX_ZXZOCSaL") {
                id
                title
                company {
                    id
                    name
                }
                description
            }
        }
    `;

    const { job } = await request(GRAPHQL_URL, query);
    return job;
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
