import { styled, Grid, Typography, Container, Box } from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                <Box sx={{ position: "absolute", inset: 0 }}>
                  <AnimatedBackground />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StyledImg src={avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="h1"
                color="primary.contrastText"
                textAlign="center"
                sx={{ pb: 2 }}
              >
                Fabiano Barboza
              </Typography>

              <Typography
                variant="h2"
                color="primary.contrastText"
                textAlign="center"
              >
                I'm a scientist computer
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{ display: "flex", justifyContent: "center", pt:3 }}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact ME</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
