import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

export default function LstItem({ data, children }) {
  const { id, name, status } = data;
  return (
    <ListItem  sx={{ display: "list-item" }}>
      <ListItemText
        id={id}
        primary={`user name: ${name} status: ${status}`}
        style={{ color: status === "active" ? "green" : "red" }}
      />
      {children}
    </ListItem>
  );
};