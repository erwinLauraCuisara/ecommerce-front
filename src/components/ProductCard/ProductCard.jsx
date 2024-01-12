import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./product-card.css"


const ProductCard = ({ name, description, cost, imageUrl, onClickAdd }) => {
    return (
      <div className="product-cart-container">
        <Card sx={{ maxWidth: 280 }}>
          <CardMedia
            sx={{ height: 100 }}
            image={imageUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name ?? "Sin nombre"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description ?? "Sin descripcion"}
            </Typography>
            <Typography variant="h5" color="text.primary">
            {`${cost ?? 0} BS.`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={onClickAdd}>
              Agregar al carrito
              <ShoppingCartIcon />
            </Button>
          </CardActions>
        </Card>
        </div>
      );
}

export default ProductCard;