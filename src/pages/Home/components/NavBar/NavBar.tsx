import { AppBar, MenuList, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly"
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuList>About</MenuList>
          <MenuList>Skills</MenuList>
          <MenuList>Projects</MenuList>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
