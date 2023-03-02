import { Typography, List } from "@mui/material";
import { useContext } from "react";
import LstItem from "../components/LstItem";
import { usersContext } from "../context/UsersProvider";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { users } = useContext(usersContext);
  const navigate = useNavigate();

  const  womansArr = users.filter(user => user.gender  === 'female' )

  const sortAlphabetically = (a, b) => {
    switch (a.name > b.name) {
      case true:
        return 1;
      case false:
        return -1;
      default:
        return 0;
    }
  };
  
  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      {JSON.parse(localStorage.getItem("toggle")) === true ? (
        <List
          sx={{
            bgcolor: "background.paper",
            listStyleType: "disc",
          }}
          
        >
          {womansArr.sort(sortAlphabetically)?.map((user, i) => (
            <LstItem key={i} data={user}   >
                    <Btn clickHandler={() => handleClick(user.id)} title="get more information" />
            </LstItem>
          ))}
        </List>
      ) : (
        <Typography textAlign="center" >Click on the button above to see the users list</Typography>
      )}
      </>
  );
}