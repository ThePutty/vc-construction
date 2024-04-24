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

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Image
import bgImage from "assets/images/illustrations/nbt1.jpg";
import Footer from "../Jobs/sections/Footer";

function ContactUs() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const isButtonDisabled = !input1 || !input2 || !input3 || !input4 || !input5 || buttonDisabled;

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitted(true);
          setButtonDisabled(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/pages/landing-pages/contact-us",
            label: "Kontaktovat nás",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 12rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Poptávkový formulář
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Nezávazná poptávka stavebních prací ZDARMA
              </MKTypography>
              {isSubmitted && (
                <MKTypography variant="body2" color="text" mb={3}>
                  <MKAlert color="success">Poptávkový formulář byl odeslán!</MKAlert>
                </MKTypography>
              )}
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                ref={form}
                onSubmit={sendEmail}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Jméno a příjmení *"
                      name="user_name"
                      onChange={(e) => setInput1(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={isSubmitted ? "" : input1}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email *"
                      name="user_email"
                      onChange={(e) => setInput2(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={isSubmitted ? "" : input2}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Telefon *"
                      name="user_phone"
                      onChange={(e) => setInput3(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={isSubmitted ? "" : input3}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Adresa realizace *"
                      name="user_address"
                      onChange={(e) => setInput4(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      value={isSubmitted ? "" : input4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Poptávka *"
                      placeholder="detailní popis požadovaných prací a požadavků"
                      name="message"
                      onChange={(e) => setInput5(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                      value={isSubmitted ? "" : input5}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="info"
                    value="Send"
                    disabled={isButtonDisabled}
                  >
                    Odeslat poptávku
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ContactUs;
