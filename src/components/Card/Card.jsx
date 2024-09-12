import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function ProductCards({ id, image, productTitle, description }) {
  const navigate = useNavigate();
  const getSingleProduct = (id) => {
    navigate(`/singleproduct/${id}`)
  };
  return (
    <div key={id}>
      <Card sx={{ maxWidth: 345, width: "500px" }}>
        <CardMedia
          sx={{ height: 250, width: "100%" }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description.length > 30
              ? description.slice(0, 30) + "..."
              : description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => getSingleProduct(id)}
            size="medium"
            className="fw-bold d-flex align-items-center justify-content-center"
          >
            Read More
            <ArrowCircleRightIcon
              sx={{
                marginLeft: "2px",
              }}
            />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCards;
