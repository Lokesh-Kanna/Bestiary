import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export function AddBeast({ beasts }) {
  const [newbeast, setNewbeast] = useState("");
  const [neworigin, setNeworigin] = useState("");
  const [newdescription, setNewnewdescription] = useState("");
  const [newimg, setNewimg] = useState("");
  const addbeast = {
    name: newbeast,
    origin: neworigin,
    description: newdescription,
    img: newimg,
  };
  const addedbeast = [...beasts, addbeast];
  return (
    <div id="addform">
      <TextField
        className="outlined-basic"
        label="Beast Name"
        variant="outlined"
        onChange={(event) => setNewbeast(event.target.value)} />
      <TextField
        className="outlined-basic"
        label="Place of Origin"
        variant="outlined"
        onChange={(event) => setNeworigin(event.target.value)} />
      <TextField
        className="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={(event) => setNewnewdescription(event.target.value)} />
      <TextField
        className="outlined-basic"
        label="Image URL"
        variant="outlined"
        onChange={(event) => setNewimg(event.target.value)} />
      <Button
        variant="contained"
        onClick={() => console.log(addedbeast)
          // <Characters beasts={addedbeast}/>
        }
      >
        Add Beast
      </Button>
    </div>
  );
}
