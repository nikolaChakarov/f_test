import { useState, useEffect } from "react";

import JobList from "./JobList";
// import { jobs } from "../fake-data";
import { getJobs } from "../graphql/queries";

function JobBoard() {
    const [jobs, setJobs] = useState([]);

    const callApi = async () => {
        const data = await getJobs();

        setJobs(data);
    };

    useEffect(() => {
        callApi();
    }, []);

    return (
        <div>
            <h1 className="title">Job Board</h1>
            <JobList jobs={jobs} />
        </div>
    );
}

export default JobBoard;
