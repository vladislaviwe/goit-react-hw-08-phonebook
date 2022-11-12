import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { LabelText, Input, FormBtn } from './RegisterFormStyled';
import { useState, useMemo } from 'react';

export default function RegisterForm({onSubmit}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const nameId = useMemo(() => nanoid(), []);
    const emailId = useMemo(() => nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value);
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
        onSubmit({name, email, password});
        setName('');
        setEmail('');
        setPassword('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <LabelText>Name:</LabelText>
            <Input
                type="text"
                name="name"
                id={nameId}
                value={name}
                onChange={handleChange}
                required
            />
        </label>
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
        <FormBtn type="submit">Registraton</FormBtn>
    </form>
  )
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}