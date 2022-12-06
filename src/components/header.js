import "./header.scss";
import React, { useState,useContext } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineShopping,
  // AiFillRead,
} from "react-icons/ai";
import { MdCardMembership } from "react-icons/md";
// import { IoIosPeople } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../assets/icono.png";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const Header = () => {
  const [state, setState] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const redirect = (direccion) => {
    navigate(direccion);
  };


  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "#000000e6",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem
          key={"error"}
          disablePadding
          onClick={() => redirect("/error")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Error"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"lagrange"}
          disablePadding
          onClick={() => redirect("/lagrange")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Lagrange"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"netwon"}
          disablePadding
          onClick={() => redirect("/netwon")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Netwon"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"puntofijo"}
          disablePadding
          onClick={() => redirect("/puntofijo")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Punto Fijo"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"integracion"}
          disablePadding
          onClick={() => redirect("/integracion")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Integracion"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"diferenciacion"}
          disablePadding
          onClick={() => redirect("/diferenciacion")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Diferenciacion"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Biseccion"}
          disablePadding
          onClick={() => redirect("/biseccion")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Biseccion"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Gauss Seidel"}
          disablePadding
          onClick={() => redirect("/gauss")}
          sx={{ ":hover": { opacity: "0.58" } }}
        >
          <ListItemButton>
            <ListItemText primary={"Gauss Seidel"} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
        <Divider color="white" />
      </List>

    </Box>
  );

  return (
    <>
      <nav
        style={{
          position: location.pathname === "/" ? "absolute" : "relative",
          width: "100%",
          zIndex: "2",
        }}
      >
        <div
          className="menu-first"
          style={{
            backgroundColor:"black",
            borderBottom: "0px solid black",
          }}
        >
            <div>
              <AiOutlineMenu
                fontSize={25}
                color="white"
                style={{ marginLeft: "20px", cursor: "pointer" }}
                onClick={toggleDrawer(true)}
              />
            </div>
            
            
          <ul className="redes">
            
            <li>
              <a href="https://www.facebook.com/BROUS-109184671936238">
                <AiFillFacebook fontSize={25} />
              </a>
            </li>
            <li>3
              <a href="https://www.instagram.com/brousoriginal/" >
                <AiFillInstagram fontSize={25} />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=573147089430&text=Hola,%20estoy%20interesado%20en%20la%20siguiente%20prenda...">
                <AiOutlineWhatsApp fontSize={25} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Drawer  anchor={"left"} open={state} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)} >
        {list("left")}
      </Drawer>
    </>
  );
};
export default Header;
