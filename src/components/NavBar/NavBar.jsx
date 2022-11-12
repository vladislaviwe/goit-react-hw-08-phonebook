import NavbarAuth from "./NavbarAuth/NavbarAuth"
import NavbarUser from "./NavbarUser/NavbarUser"

import useAuth from "shared/hooks/useAuth"

import { Header } from "./NavbarStyled";

export default function NavBar() {

    const isLogin = useAuth();

    return (
        <Header>
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </Header>
    )
}
