import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// import { jobs } from "../fake-data";
import { getJob } from "../graphql/queries";

function JobDetail() {
    const params = useParams();

    const [job, setJob] = useState(null);

    useEffect(() => {
        getJob(params.jobId)
            .then(setJob)
            .catch((err) => console.log(err));
    }, []);

    if (!job) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="title">{job?.title}</h1>
            <h2 className="subtitle">
                <Link to={`/companies/${job?.company?.id}`}>
                    {job?.company?.name}
                </Link>
            </h2>
            <div className="box">{job?.description}</div>
        </div>
    );
}

export default JobDetail;
