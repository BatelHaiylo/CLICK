import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../service/users";
import { useEffect, useState } from "react";
import LstItem from "../components/LstItem";
import Btn from "../components/Btn";
import { Box } from "@mui/material";

export default function UserInfo() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(id)
      .then((res) => setUser(res))
      .catch((error) => console.log(error));
  }, [id]);
  
  const handleClick = () => {
    navigate("/");
  };

  return (
      <LstItem data={user}>
        <Btn clickHandler={handleClick} title="back" />
      </LstItem>
  );
}
