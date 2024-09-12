import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        className="d-flex flex-column justify-content-center align-items-center p-5 gap-2"
        sx={{ height: "65vh" }}
      >
        <Typography
          variant="h3"
          className="fw-bold fs-1"
          sx={{
            height: "fit-content",
            color: "#101010",
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Welcome to my E-Commerce Website
        </Typography>
        <Typography
          variant="p"
          className="fw-bold"
          sx={{
            height: "fit-content",
            color: "#555555",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          Hello Visitor! Are you looking for a place to buy your favorite
          products? You are in the right place!
        </Typography>
        <Button onClick = {()=>navigate("/products")}
          variant="contained"
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "15px",
          }}
        >
          See the Products
          <ArrowRightIcon sx={{
            fontSize : "30px",
          }}/>
        </Button>
      </Box>
    </>
  );
}

export default Home;
