/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Jobs page sections
import Profile from "pages/LandingPages/Jobs/sections/Profile";
import Footer from "pages/LandingPages/Jobs/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

function Jobs() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/landing-pages/contact-us",
          label: "Kontaktovat nás",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={8}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{ mx: "auto", textAlign: "center" }}
            >
              <MKTypography
                variant="h1"
                color="white"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Volná místa
              </MKTypography>
              <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
                Pracujte pro naši stavební firmu
              </MKTypography>
            </Grid>
          </Container>
        </MKBox>

        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
        </Card>
        <Footer />
      </MKBox>
    </>
  );
}

export default Jobs;
