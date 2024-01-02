import React from "react";
import { useUsers } from "../hooks/useUsers";
import { Paper } from "@mui/material";
import UserInfo from "../components/UserInfo";

const Profile = () => {
  const {
    data: userData,
    isError: userIsError,
    isLoading: userIsLoading,
  } = useUsers();
  if (userIsLoading) {
    return null;
  }
  const { address, email, id, name, phone, username } = userData;
  return (
    <Paper sx={{ width: 500, ml: "auto", mr: "auto", mt: 5, p: 1 }}>
      <UserInfo title={"User ID:"} value={username} />
      <UserInfo
        title={"User Name:"}
        value={`${name.firstname} ${name.lastname}`}
      />
      <UserInfo noCap title={"Email:"} value={email} />
      <UserInfo
        title={"Address:"}
        value={`${address.number}, ${address.street}, ${address.city}`}
      />
      <UserInfo title={"Phone:"} value={phone} />
    </Paper>
  );
};

export default Profile;
