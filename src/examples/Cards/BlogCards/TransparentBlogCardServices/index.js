/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function TransparentBlogCardServices({ image, title, description }) {
  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
        }}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {imageTemplate}

      <MKBox pt={2} pb={3}>
        <MKTypography variant="h5" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" component="p" color="text" mb={3}>
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCardServices
TransparentBlogCardServices.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TransparentBlogCardServices;
