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
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// ConstructionServices page sections
import Posts from "pages/LandingPages/ConstructionServices/sections/Posts";
import Footer from "pages/LandingPages/ConstructionServices/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

function ConstructionServices() {
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
                Služby
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
          <Posts />

          <MKBox
            variant="gradient"
            bgColor="dark"
            position="relative"
            borderRadius="xl"
            sx={{ overflow: "hidden" }}
          >
            <MKBox
              component="img"
              src={bgImage}
              alt="pattern-lines"
              position="absolute"
              top={0}
              left={0}
              width="100%"
              zIndex={1}
              opacity={0.2}
            />
            <Container sx={{ position: "relative", zIndex: 2, py: 8 }}>
              <Grid
                container
                item
                xs={12}
                md={7}
                justifyContent="center"
                mx="auto"
                textAlign="center"
              >
                <MKTypography variant="h3" color="white">
                  Zaujala vás nabídka stavebních prací?
                  <br />
                </MKTypography>
                <MKTypography variant="body2" color="white" mb={6}>
                  Stačí nám napsat a my se vám ozveme co nejdříve. Jsme tu, abychom vám pomohli
                  realizovat vaše stavební plány a přání.
                </MKTypography>
                <MKButton
                  variant="gradient"
                  color="info"
                  size="large"
                  component="a"
                  href="/pages/landing-pages/contact-us"
                  sx={{ mb: 2 }}
                >
                  Kontaktujte nás
                </MKButton>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        <Footer />
      </MKBox>
    </>
  );
}

export default ConstructionServices;
