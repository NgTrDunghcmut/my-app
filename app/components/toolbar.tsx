"use client";
import { Toolbar, AppBar, Button, Typography, IconButton } from "@mui/material";
import Menu from "@mui/material/Icon";
import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// import App from "../components/comp2";
let theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: grey[200],
    },
  },
});
theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const Toolbars = () => {
  return (
    <div className="toolbar">
      <AppBar sx={{ backgroundColor: "theme", color: "theme" }}>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Button variant="text" color="inherit" sx={{ border: 1 }}>
            <b>Device list</b>
          </Button>
        </Typography>

        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Button sx={{ color: "inherit", border: 2 }}>
              <i>Hello</i>
            </Button>
            <Button color="inherit">
              <i>Hello2</i>
            </Button>
            <Button color="inherit">
              <i>Hello</i>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Toolbars;
