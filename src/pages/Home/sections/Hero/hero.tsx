import {
  styled,
  Grid,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h1" color="primary" textAlign="center">
                Fabiano Barboza
              </Typography>

              <Typography variant="h2" color="primary" textAlign="center">
                I'm a scientist computer
              </Typography>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button>
                    <EmailIcon />
                    Contact ME
                  </Button>
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
