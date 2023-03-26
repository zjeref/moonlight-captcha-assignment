import React, { useState } from 'react';

const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaCode, setCaptchaCode] = useState(generateCode());
    const [captchaStatus, setCaptchaStatus] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (captchaInput.toLocaleLowerCase() === captchaCode.toLocaleLowerCase() && password && emailValid && lastName && firstName) {
            alert('Sucess');
        } else {
            setCaptchaStatus(false);
            setCaptchaCode(generateCode());
        }


    };



    const handleEmailChange = (event) => {
        const value = event.target.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmail(value);
        setEmailValid(isValid);
    };

    const [emailValid, setEmailValid] = useState(false);

    return (
        <div className="w-full flex justify-center  ">
            <form onSubmit={handleSubmit} className="max-w-md w-full bg-white dark:bg-gray-700 dark:text-white shadow-md rounded px-8 pt-6 pb-8 dark:border-gray-600 border-">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 dark:text-white font-bold mb-2">
                        First Name
                    </label>
                    <input type="text" id="firstName" placeholder="Enter First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="inp" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 dark:text-white font-bold mb-2">
                        Last Name
                    </label>
                    <input type="text" id="lastName" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="inp" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 dark:text-white font-bold mb-2">
                        Email
                    </label>
                    <input type="email" id="email" placeholder="Enter Email" name="email" value={email} onChange={handleEmailChange} className={`inp ${emailValid ? '' : 'border-red-500'}`} />
                    {!emailValid && <span className="text-red-500 text-xs italic">Invalid email address</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 dark:text-white font-bold mb-2">
                        Password
                    </label>
                    <input type="password" id="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="inp" />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-white font-bold mb-2">
                        <span>Confirm Password</span>
                    </label>
                    <input type="password" id="confirmPassword" placeholder="Re-enter Password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="inp" />

                </div>

                <div className="">
                    <p>Please enter the code shown below:</p>
                    <div className="space-y-3 text-end">
                        <p className="captcha-text" data-text={captchaCode}>
                            {captchaCode.split('').map((char, i) => (
                                <span key={i} className="captcha-char dark:text-slate-500 line-through">{char}</span>
                            ))}
                        </p>
                        <input type="text" className="inp" id="code" placeholder="Enter Captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />

                    </div>
                    {!captchaStatus && <span className="text-red-500 text-xs italic">Invalid Captcha</span>}
                </div>
                <div className="mt-4 text-center ">
                    <button className='px-4 py-1 bg-green-500 text-xl rounded-sm text-white' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
