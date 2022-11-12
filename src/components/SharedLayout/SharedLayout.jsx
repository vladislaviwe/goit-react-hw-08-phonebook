import NavBar from "components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

import { Box } from "./SharedLayoutStyled";

export default function SharedLayot() {
  return (
    <Box>
        <NavBar />
            <Outlet />
    </Box>
  )
}