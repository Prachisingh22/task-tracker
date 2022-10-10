import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./logo.webp";
import "./NavBar.css";

const Header = styled(AppBar)`
  background: #295a04;
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

function NavBar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tab to="/"><img src={logo} alt="logo" className="logo" /></Tab>
        <Tab to="/">Home</Tab>
        <Tab to="/all">Tasks</Tab>
        <Tab to="/add">Add Task</Tab>
        <Tab to="/deadLines">DeadLines</Tab>
        <Tab to="/calender">calender</Tab>
      </Toolbar>
    </Header>
  );
}

export default NavBar;