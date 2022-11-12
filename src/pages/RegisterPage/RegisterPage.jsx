import { useDispatch } from "react-redux"
import { signup } from "redux/auth/auth-operations"

import RegisterForm from "components/RegisterForm/RegisterForm"

export default function RegisterPage() {
    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(signup(data));
    }

    return (
        <>
            <h1>Registration</h1>
            <RegisterForm onSubmit={onRegister}/>
        </>
    )
}
