import { useEffect } from "react";
import "./ControlEligibilite.scss";
import useForm from "./useForm";

const ControlEligibilite = () => {
    const initValues = {
        onSale: false,
        date: new Date(),
        portail: null,
        price: 0,
        numberOfCalls: 0,
        numberOfVisites: 0,
        numberOfferts: 0,
        onSaleByAgent: false,
        saleAgentDate: new Date(),
        lastProposedPrice: 0,
        test: "",
        test2: "",
    };

    const validate = (values) => {
        const errors = {};

        if (values["test"] === "") {
            errors.test = "Test is required...";
        }

        if (values["test2"] === "") {
            errors.test2 = "Test 2 is required...";
        }

        return errors;
    };

    const onSubmit = (values) => {
        setTimeout(() => {
            setIsSubmitting(false);
        }, 500);
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        setIsSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useForm({ initValues, validate, onSubmit });

    console.log(isValid);
    return (
        <div className="control-eligibilite">
            <div className="ce-form-wrapper">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>

                <label htmlFor="test">
                    <input
                        type="text"
                        name="test"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.test}
                    />
                </label>
                {touched?.test && errors?.test && <p>{errors.test}</p>}

                <label htmlFor="test2">
                    <input
                        type="text"
                        name="test2"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.test2}
                    />
                </label>
                {touched?.test2 && errors?.test2 && <p>{errors.test2}</p>}

                <button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ControlEligibilite;
