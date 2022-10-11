import { useState } from "react";

const useForm = (props) => {
    const { initValues, validate, onSubmit } = props;

    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleBlur = (e) => {
        setTouched((prev) => ({
            ...prev,
            [e.target.name]: true,
        }));

        const validationErrors = validate(values);

        setErrors(Object.assign(errors, validationErrors));
        handleValid(values);
    };

    const handleChange = (e) => {
        setErrors((prev) => {
            delete prev[e.target.name];
            console.log({ prev });
            return prev;
        });

        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        handleValid(values);
    };

    const handleValid = (val) => {
        const validationErrors = validate(val);
        const isErrors = Boolean(Object.keys(validationErrors).length > 0);

        setIsValid(!isErrors);
    };

    const handleSubmit = () => {
        handleValid(values);

        setIsSubmitting(true);

        onSubmit(values);
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        setIsSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
