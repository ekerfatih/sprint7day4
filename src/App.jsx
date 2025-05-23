import Login from "./components/Login.jsx";
import "./App.css";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Success from "./components/Success.jsx";

function App() {
    const navigate = useNavigate();
    const errorsInitialState = {
        email: null,
        password: null,
        terms: null,
    }
    const dataInitialState = {
        email: "",
        password: '',
        terms: false
    }

    function IsValid() {
        return Object.values(errors).every(error => error === true);
    }

    const [errors, setErrors] = useState(errorsInitialState)
    const [isValid, setIsValid] = useState(dataInitialState);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    useEffect(() => {
        console.log("Errors güncellendi:", errors);
        console.log("IsValid sonucu:", IsValid());
    }, [errors]);

    function validate(e) {
        const {name, type, checked, value} = e.target;
        //console.log(name, type === 'checkbox' ? checked : value);

        const newValid = {...isValid, [name]: type === 'checkbox' ? checked : value};
        const emailValidation = emailRegex.test(newValid.email || '');
        const passwordValidation = passwordRegex.test(newValid.password || '');
        const termsValidation = type === "checkbox" ? !!newValid.terms : null;

        setErrors({...errors, email: emailValidation, password: passwordValidation, terms: termsValidation})
        setIsValid(newValid);
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!IsValid()) return;

        navigate('/Success');
    }

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Login" replace/>}/>
            <Route path="/Login" element={<Login buttonActive={IsValid()} errors={errors} valids={isValid} onChange={validate}
                                                 onSubmit={onSubmit}/>}/>
            <Route path="/Success" element={<Success/>}/>
        </Routes>
    )
}

export default App
