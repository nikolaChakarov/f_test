import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
// import { jobs } from "../fake-data";
import { getJob } from "../graphql/queries";

function JobDetail() {
    const params = useParams();
    // const { state } = useLocation();

    const [job, setJob] = useState(null);

    useEffect(() => {
        let test = params.jobId.toString();
        getJob(test)
            .then(({ job }) => setJob(job))
            .catch((err) => console.log(err));
    }, [params.jobId]);

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
