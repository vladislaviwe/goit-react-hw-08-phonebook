import { NavLink } from "react-router-dom"

import { AuthMenu } from "./NavbarAuthStyled"

export default function NavbarAuth() {
  return (
      <AuthMenu>
        <NavLink to="/register" end>Register </NavLink>
        |
        <NavLink to="/login"> Login </NavLink>
      </AuthMenu>
  )
}
