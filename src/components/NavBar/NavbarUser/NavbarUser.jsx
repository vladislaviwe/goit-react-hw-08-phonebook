import { useDispatch, useSelector } from "react-redux";

import { logout } from "redux/auth/auth-operations";
import { selectUser } from "redux/auth/auth-selectors";

import { GiCat } from "react-icons/gi";

import { UserContainer, Button } from "./NavbarUserStyled";

export default function NavbarUser() {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);

    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <UserContainer>
            <b>{`Welcome, ${name}`}</b>
            {name === "Karyna Tkachenko" && <GiCat />}
            <Button onClick={onLogout}>Logout</Button>
        </UserContainer>
    )
}
