import { Job, Company } from "./db.js";

export const resolvers = {
    Query: {
        company: async (_root, { id }) => await Company.findById(id),
        job: async (_root, { id }) => await Job.findById(id),
        jobs: async () => Job.findAll(),
    },

    Job: {
        company: (job) => {
            // console.log(job);
            return Company.findById(job.companyId);
        },
    },
};
