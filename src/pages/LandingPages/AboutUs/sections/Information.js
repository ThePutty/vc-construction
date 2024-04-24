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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCardAbout from "examples/Cards/BlogCards/CenteredBlogCardAbout";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Firma"
                    description="Firma působí ve stavebnictví od roku 2013. Jejím zakladatelem a majitelem je Václav Čáp."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Zákazníkův ideál"
                    description="Naším krédem je především naplňovat představy našich zákazníků k jejich plné spokojenosti."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Důvěryhodná jistota"
                    description="Jsme certifikovanou českou spolehlivou firmou."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Komplexní stavební řešení"
                    description="Díky veškeré vlastní technice provádíme kvalitně všechny stavební práce až po stavební práce."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCardAbout
              image="https://img.freepik.com/free-photo/crop-architect-opening-blueprint_23-2147710985.jpg?w=1480&t=st=1713887088~exp=1713887688~hmac=f88a38fb06891c2800b76068b29df93ba9037e49531427020146d46fa7b68f9f"
              title="Stavební firma - Václav Čáp"
              description="Specialista na výkopové práce. Jako stavební firma působíme na celém českém trhu, převážně však v Jihomoravském kraji. Jsme prioritně zaměřeni na výkopové práce a rekonstrukce."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
