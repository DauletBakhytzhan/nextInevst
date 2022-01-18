import styles from "./Cards.module.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";

const Cards = (props) => {//image, title, address, description, allPrice, price, securityType, investmentMultiple, maturity, minInvestment
  return (
    <div> 
    <div className={styles.wrapper}>
      <Box sx={{}}>
      <Card sx={{ maxWidth: 275 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="..."
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Josefin Sans", }}>
          {props.title}
        </Typography>
        <Typography variant="body2"  color="text.secondary" sx={{ fontFamily: "Josefin Sans", }}>
          {props.address}
        </Typography>
        <Typography variant="body1" mt={3} sx={{fontSize: 12, fontFamily: "Josefin Sans", }}>
          {props.description}
        </Typography>
        <Typography variant="body1" mt={3} sx={{fontSize: 12, fontFamily: "Josefin Sans", }}>
         {props.price} raised of {props.allPrice}
        </Typography>
      </CardContent>
      </Card> 
      </Box>
    </div>

    dkasldlasldkas
    </div>
  );
};

export default Cards;
