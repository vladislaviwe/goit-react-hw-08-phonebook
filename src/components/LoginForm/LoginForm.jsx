import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { LabelText, Input, FormBtn } from './LoginFormStyled';
import { useState, useMemo } from 'react';


export default function LoginForm({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const emailId = useMemo(() => nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
        setEmail('');
        setPassword('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <LabelText>Email:</LabelText>
            <Input
                type="email"
                name="email"
                id={emailId}
                value={email}
                onChange={handleChange}
                required
            />
        </label>
        <label>
            <LabelText>Password:</LabelText>
            <Input
                type="password"
                name="password"
                id={passwordId}
                value={password}
                onChange={handleChange}
                required
            />
        </label>
        <FormBtn type="submit">Login</FormBtn>
    </form>
  )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}