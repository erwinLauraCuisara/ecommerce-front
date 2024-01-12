import { React } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { useMediaQuery } from '@react-hook/media-query';

const ShoppingCartItem = ({ name, description, cost, imageUrl, onClickDelete }) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery('(min-width: 500px)');

    return(
    <Card sx={{ display: 'flex', flexDirection: matchesSm ? 'row': 'column'}}>
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={imageUrl}
            alt="shop"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {description} 
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {cost} BS.
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
          <IconButton
              aria-label="eliminar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onClickDelete}
              color="inherit"
            >
              <ClearIcon /> 
            </IconButton>
          </CardContent>
        </Box>
    </Card>
    );
}

export default ShoppingCartItem;