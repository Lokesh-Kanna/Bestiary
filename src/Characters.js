import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { LikeCounter } from "./LikeCounter";

export function Characters({ beasts }) {
  return (
    <div>
      <div id="card-box">
        {beasts.map((bst, index) => {
          return (
            <CharDisplay
              index={index}
              name={bst.name}
              origin={bst.origin}
              description={bst.description}
              img={bst.img}
              id={bst.id} />
          );
        })}
      </div>
    </div>
  );
}
function CharDisplay({ name, origin, description, img, id }) {
  const [visibility, setVisibility] = useState(false);
  const [del, setDel] = useState(false);
  const style = { display: visibility ? "block" : "none" };
  const carddisp = { display: del ? "none" : "block" };
  return (
    <div id="card">
      <Card style={carddisp} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            sx={{ width: 350, height: 400 }} />
          <CardContent>
            <div id="nameorigin">
              <div id="expand">
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    visibility ? setVisibility(false) : setVisibility(true);
                  }}
                >
                  {visibility ? (
                    <ArrowDropUpIcon color="primary" />
                  ) : (
                    <ArrowDropDownIcon color="primary" />
                  )}
                </IconButton>
              </div>
              <Typography variant="body2" color="text.secondary">
                <b>Origin:</b> <br></br> {origin}
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              <p style={style}>{description}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <LikeCounter />
          <IconButton aria-label="delete" onClick={() => setDel(true)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
