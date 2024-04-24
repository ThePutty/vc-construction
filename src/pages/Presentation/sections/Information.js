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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpg";
import bgBack from "assets/images/rotating-card-bg-back.jpg";

function Information() {
  return (
    <MKBox component="section" py={3} my={3}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 3, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Výběr našich služeb
          </MKTypography>
          <MKTypography variant="body1" color="text">
            od výstavby přes zateplení po rekonstrukce
          </MKTypography>
          <MKButton
            variant="gradient"
            color="info"
            href="/pages/landing-pages/construction-services"
          >
            Čti více
          </MKButton>
        </Grid>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Kalkulace
                    <br />
                    stavebník prací
                  </>
                }
                description="Plánujete rekonstrukci domu či bytu? Potřebujete nové rozvody, nebo zateplit fasádu?"
              />
              <RotatingCardBack
                image={bgBack}
                title="Kalkulace stavebních prací"
                description="Provádíme veškeré stavební práce. Odešlete nám nezávaznou poptávku stavebních prací."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Kontatovat nás",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Zemní práce"
                  description="Zemní a výkopové práce. Výkopy základů, jímek, bazénů, apod. Demoliční, bourací práce malých rozsahů."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Revitalizace bytových domů"
                  description="Kompletní revitalizace nejen panelových domů zahrnuje veškeré práce - od výměny oken, zavěšení lodžie, po malířské práce."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Zateplení"
                  description="Zateplení fasád, stropů sklepů a podlahy půdy."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Rekonstrukce"
                  description="Už se vám nelíbí vzhled vašeho příbytku? Provádíme rekonstrukce všech bytových i nebytových prostor."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
