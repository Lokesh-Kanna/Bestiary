import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDown";


export function LikeCounter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    console.log("like is changed: ", like);
  });
  return (
    <div>
      <Badge badgeContent={like} sx={{ mr: 2 }} color="success">
        <IconButton
          aria-label="delete"
          size="small"
          color="primary"
          onClick={() => setLike(like + 1)}
        >
          <ThumbUpAltIcon />
        </IconButton>
      </Badge>

      <Badge badgeContent={dislike} sx={{ mr: 0.5 }} color="error">
        <IconButton
          aria-label="delete"
          size="small"
          color="primary"
          onClick={() => setDislike(dislike + 1)}
        >
          <ThumbDownAltIcon />
        </IconButton>
      </Badge>
    </div>
  );
}
