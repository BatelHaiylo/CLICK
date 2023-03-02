import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

export default function LstItem({ data, children }) {
  const { id, name, status } = data;
  return (
    <ListItem>
      <ListItemText
        id={id}
        primary={`user name: ${name} status: ${status}`}
        sx={{ color: status === "active" ? "green" : "red", display: "list-item" } }
      />
      {children}
    </ListItem>
  );
};