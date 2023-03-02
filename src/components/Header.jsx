import { Box, IconButton, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Btn from "./Btn";
import { useContext, useState } from "react";
import { usersContext } from "../context/UsersProvider";

export default function Header() {
  const { toggle, setToggle } = useContext(usersContext);

  const handleClick = () => {
    setToggle(!toggle);
    localStorage.setItem("toggle", toggle);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      height="10vh"
      backgroundColor="#000"
    >
      <Box display="flex" borderRadius="3px">
        <Typography>Logo</Typography>
      </Box>
      <Box display="flex">
        <Btn clickHandler={handleClick} title="Show Users List" />
      </Box>
      <Box display="flex">
        <IconButton>
          <DarkModeOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
