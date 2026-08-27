import { styled, Grid, Container, Typography } from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpeg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }))

  const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={4}>
                <StyledImg src={avatar} />
            </Grid>
            <Grid item xs={8}>
                <Typography color="primary">Fabiano Barboza</Typography>
                <Typography color="primary">I'm a computer scientist</Typography>
            </Grid>
        </Grid>
        </Container>
        
      </StyledHero>
    </>
  );
};

export default Hero;
