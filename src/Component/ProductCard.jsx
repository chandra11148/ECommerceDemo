
import {

  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    // console.log(product);
  return (
    <Card className="card">
      <CardMedia className="cardMedia"
        component="img"
        alt="green iguana"
        image={product.image}
        
      />
      <CardContent>
        <Typography gutterBottom variant="p">
          {product.name}
        </Typography>
        <Typography sx={{ fontWeight: 'bold',marginTop:1 }} gutterBottom variant="h5" component="div">
          ${product.cost}
        </Typography>
        <Rating
          name="read-only"
          value={product.rating}
          readOnly
        />
      </CardContent>
      
    </Card>
  );
};

export default ProductCard;
