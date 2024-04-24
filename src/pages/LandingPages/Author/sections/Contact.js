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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";

function Contact() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const isButtonDisabled = !input1 || !input2 || !input3 || !input4 || buttonDisabled;

  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID2,
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
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Stavební firma <br />
                      Václav Čáp
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+720) 772 100 200
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        email@seznam.cz
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Švábenice
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        IČO:
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        DIC:
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Datova schranka:
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox
                  component="form"
                  p={2}
                  method="post"
                  autoComplete="off"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Kontaktní formulář
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Rádi zodpovíme otázky ohledně Vašeho projektu.
                    </MKTypography>
                    {isSubmitted && (
                      <MKTypography variant="body1" color="text" mb={2}>
                        <MKAlert color="success">Poptávkový formulář byl odeslán!</MKAlert>
                      </MKTypography>
                    )}
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Jméno a příjmení *"
                          placeholder="jméno a příjmení"
                          name="user_name"
                          onChange={(e) => setInput1(e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={isSubmitted ? "" : input1}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          type="email"
                          variant="standard"
                          label="E-mail *"
                          placeholder="email"
                          name="user_email"
                          onChange={(e) => setInput2(e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={isSubmitted ? "" : input2}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Telefon *"
                          placeholder="telefon"
                          name="user_phone"
                          onChange={(e) => setInput3(e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={isSubmitted ? "" : input3}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Vaše zpráva *"
                          placeholder="vaše zpráva..."
                          name="message"
                          onChange={(e) => setInput4(e.target.value)}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          value={isSubmitted ? "" : input4}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton
                        type="submit"
                        variant="gradient"
                        color="info"
                        value="Send"
                        disabled={isButtonDisabled}
                      >
                        Odeslat formulář
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
