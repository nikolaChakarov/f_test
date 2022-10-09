import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { companies } from "../fake-data";
import { getCompany } from "../graphql/queries";

function CompanyDetail() {
    const { companyId } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {
        getCompany(companyId)
            .then((res) => setCompany(res.company))
            .catch((err) => console.log(err));
    }, [companyId]);

    if (!company) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 className="title">{company?.name}</h1>
            <div className="box">{company?.description}</div>
        </div>
    );
}

export default CompanyDetail;
