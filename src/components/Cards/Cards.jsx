import styles from "./Cards.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

const Cards = (props) => {
  //image, title, address, description, allPrice, price, securityType, investmentMultiple, maturity, minInvestment

  const [pPrice, setpPrice] = useState("100%");
  const [check, setCheck] = useState(false)
  
  useEffect(() => {
    function pocentPrice(){
      let price = props.price.replace(",", '').replace('$', '')
      let allPrice = props.allPrice.replace(",", '').replace('$', '').replace(',', '')
      let pp = parseInt(price, 10) *100/parseInt(allPrice, 10) 
      return pp + "%"
    }
    setpPrice(pocentPrice())
  }, [props.price, props.allPrice]);
  function handleUp(){
    setCheck(true)
  }
  return (
    <div>
      
      <Box sx={{}}>
        <Card className={styles.wrapper}>
          <div onMouseUp={handleUp}>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="..."
          />
          <CardContent>
            <Typography
              gutterBottom
              mb={0}
              variant="h5"
              component="div"
              sx={{ fontFamily: "Josefin Sans" }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              mt={0}
              color="text.secondary"
              sx={{ fontFamily: "Josefin Sans" }}
            >
              {props.address}
            </Typography>
            <Typography
              variant="body1"
              mt={3}
              sx={{ fontSize: 12, fontFamily: "Josefin Sans" }}
            >
              {props.description}
            </Typography>
            <div className="w3-border">
              <div className="w3-green" style={{height:"4px",width: pPrice, backgroundColor: "#128C76" }}>
              </div>
            </div>
            <Typography
              variant="body1"
              mt={3}
              sx={{ fontSize: 12, fontFamily: "Josefin Sans" }}
            >
              {props.price} raised of {props.allPrice}
            </Typography>
          </CardContent>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Cards;
