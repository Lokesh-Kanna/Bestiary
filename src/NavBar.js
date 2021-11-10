import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export function NavBar() {
  return (
    <AppBar style={{ backgroundColor: "rgb(233, 233, 233)" }} position="static">
      <Toolbar>
        <a class="navbar-brand">Bestiary</a>
        <Link class="nav-link active" to="/">
          Home <span class="sr-only">(current)</span>
        </Link>
        <Link class="nav-link" to="/character">
          Beasts
        </Link>
        <Link class="nav-link" to="/add-beast">
          Add to Bestiary
        </Link>
        <Link class="nav-link" to="/tic-tac-toe">
          Tic-Tac-Toe
        </Link>
        <Link class="nav-link" to="/form">
          Fom
        </Link>
        <Link class="nav-link" to="/color-game">
          Color Game
        </Link>
      </Toolbar>
    </AppBar>
  );
}
