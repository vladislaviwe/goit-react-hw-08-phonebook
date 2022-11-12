import { useDispatch } from "react-redux"
import { login } from "redux/auth/auth-operations"

import LoginForm from "components/LoginForm/LoginForm"

export default function RegisterPage() {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }

    return (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={onLogin} />
        </>
    )
}