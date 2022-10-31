import { useState, forwardRef } from "react";
import { category } from "../../Utils/Utils";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Categories.css";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const URl = "http://localhost:3002";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CategoryCard({
  url,
  description,
  type,
  setCategoryChoosen,
  setOpenAll,
  item,
  price,
}) {
  const [expanded, setExpanded] = useState(false);
  const [openNotifcation, setOpenNotifcation] = useState(false);
  const [notification, setNotifcation] = useState("");
  const [error, setError] = useState("");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 'width': 300 }} className="card__categorey" onClick={() => {
      if (item != null)
        setCategoryChoosen({ url, description, type, item })
      setOpenAll(true);
    }}>
      <Snackbar open={openNotifcation} autoHideDuration={6000}>
        <Alert severity={error} sx={{ width: "100%" }}>
          {notification}
        </Alert>
      </Snackbar>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            new
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={type}
        subheader="Made in israel"
      />
      <CardMedia component="img" height="194" image={url} alt={type} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {price}$ {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
         <IconButton
          onClick={() => {

            fetch(URl + "/user/add-to-cart", {
              method: "POST", // or 'PUT',
              cache: "no-cache",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: localStorage.getItem("user"),
                url: url,
                description: description,
                type: type,
                price: price,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                setOpenNotifcation(true);
                if (data.ok) {
                  setError("success");
                } else {
                  setError("error");
                }
                const timer = setTimeout(() => {
                  setOpenNotifcation(false);
                  clearTimeout(timer);
                }, 2000);
                setNotifcation(data.message);
              })
              .catch((error) => {
                console.error("Error:", error);
              });

          }}
          aria-label="add to favorites"
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
