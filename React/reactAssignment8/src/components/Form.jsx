import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        gender: 'male',
        phone: '',
        password: ''
    });
    const [errMsg, setError] = useState({
        userName_error: '',
        email_error: '',
        gender_error: 'Nil',
        phone_error: '',
        password_error: ''
    });
    const [display, setDisplay] = useState('');

    function inputValidator(event) {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === 'userName') { (/^[\w\s\d]+$/.test(value)) ? (setFormData({ ...formData, userName: value }), setError({...errMsg, userName_error: ''})) : setError({ ...errMsg, userName_error: ('Name Error: Name is not Alphanumeric') }) }
        else if (name === 'email') { (/^[\w\d.-_+]+@[\w\d.-_+]+$/.test(value)) ? (setFormData({ ...formData, email: value }), setError({ ...errMsg, email_error: '' })) : setError({ ...errMsg, email_error: "Email Error: Email must contain @" }) }
        else if (name === 'gender') { (/male|female|others/.test(value)) ? (setFormData({ ...formData, gender: value }), setError({...errMsg, gender_error: 'Nil'})) : setError({ ...errMsg, gender_error: "Gender Error: Please Identify as male, female or others" }) }
        else if (name === 'phone') { (/^[0-9]+$/.test(value)) ? (setFormData({ ...formData, phone: value }), setError({...errMsg, phone_error: ''})) : setError({ ...errMsg, phone_error: "Phone Error: Phone Number must contain only numbers" }) }
        else if (name === 'password') { (value.length > 5) ? (setFormData({ ...formData, password: value }), setError({...errMsg, password_error: ''})) : setError({ ...errMsg, password_error: "Password Error: Password must contain atleast 6 letters" }) }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        console.log(errMsg);
        if ((formData.userName === '' && errMsg.userName_error === '') || (formData.email === '' && errMsg.email_error === '') || (formData.phone === '' && errMsg.phone_error === '') || (formData.password === '' && errMsg.password_error == '')) {
            setDisplay("All fields are mandatory")
        }
        else if (errMsg.userName_error != '') { setDisplay(errMsg.userName_error) }
        else if (errMsg.email_error != '') { setDisplay(errMsg.email_error) }
        else if (errMsg.gender_error != 'Nil') { setDisplay(errMsg.gender_error) }
        else if (errMsg.phone_error != '') { setDisplay(errMsg.phone_error) }
        else if (errMsg.password_error != '') { setDisplay(errMsg.password_error) }
        else { 
            let user = formData.email;
            user = user.slice(0,user.indexOf('@')); 
            setDisplay(`Welcome ${user}`) }
    };

    return (
        <form id="container" action="./" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name: <input data-testid='name' type="text" id="name" name="userName" onChange={inputValidator} /></label>
            <label htmlFor="email">Email Address: <input data-testid='email' type="email" id="email" name="email" onChange={inputValidator} /></label>
            <label htmlFor="gender"> Gender <select data-testid='gender' value={formData.gender} name="gender" onChange={inputValidator} >
                <option value="male" >Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
            </label>
            <label htmlFor="phone">Phone No: <input data-testid='phoneNumber' type='text' id="phone" name="phone" onChange={inputValidator} /></label>
            <label htmlFor="password">Password: <input data-testid='password' type='password' id="password" name="password" onChange={inputValidator} /></label>
            <input type="submit" value="Submit" data-testid='submit' />
            <div className="display">{display}</div>
        </form>
    )
}

export default Form;