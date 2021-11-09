import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Badge from "@mui/material/Badge";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from "yup";

fetch("https://6188a459d0821900178d740b.mockapi.io/Beast")
  .then((data) => data.json())
  .then((bst) => {
    var beast = bst;
    return beast;
  });

function App() {
  const beasts = [
    {
      id: "100",
      name: "Vampire",
      origin: "Eastern Europe",
      description: `Vampire or Vampyre is an undead creatures of the night. They exist by sucking the life force of the living
                    generally in the form of blood. Most cultures have records of these blood sucking creatures in 
                    various forms and sizes. There are two ways that a person can become a vampire. One is through magic and the 
                    other way is by getting bitten by a vampire. Since there are many versions
                    of vampires throught time, it is diffucult to know the original characteristics of a vampire. The most commonly
                    believed charchteristics are, two long & sharp canine teeth, casting no shadow, and no reflection in the mirror.
                    There is also a common belief that vampires can shapeshift into a bat and/or a wolf and that they can command
                    other creatures of the night.`,
      img: "https://mfiles.alphacoders.com/695/695016.jpg",
    },
    {
      id: "101",
      name: "Werewolf",
      origin: "Ancient Greece",
      description: `A warewolf is a human who has the ability to shapeshift into a wolf. It is believed that on full moon nights 
                    humans bitten by a werewolf or under a specific curse by a witch turn into werewolves themselves. The earliest 
                    known werewolf mythology comes from greek mythology. Studies says that the human and animal behaviors tend to get 
                    violant during full moon. This might be the cause of the idea of "beast within" which could have lead to the werewolf
                    mythology.`,
      img: "https://difference.guru/wp-content/uploads/2021/06/Difference-Between-Lycan-and-Werewolf.jpg",
    },
    {
      id: "102",
      name: "Zombie",
      origin: "Haiti",
      description: `Zombies are undead creatures. Unlike vampires, they are not bound to the night. A person becomes a zombie when they 
                    get infected by a virus that is capable of reanimating and controlling the brain after the death of the individual affected
                    by the virus. Zombies are characterized by their robotic behaviour with rotting flesh with no other motive than to feed
                    mainly on brains.`,
      img: "https://i.imgur.com/zZTgykM.jpg",
    },
    {
      id: "103",
      name: "Yeti",
      origin: "India",
      description: `Yeti is an ape like creature known to be found in the Himalayan mountain. There are many sitings in the depths of the forest
                    of creatures like this all over the world and are called by many different names locally. Yeti are usually known to be calm 
                    avoid any kind of contact with humans. Although there are may sightings of yeti even today, there is no concrete evidence on
                    the existance of them.`,
      img: "https://images.squarespace-cdn.com/content/v1/5d2935d76499400001905606/1565992866040-JZMO6NRK346W9GFK7NTS/Yeti?format=1000w",
    },
    {
      id: "104",
      name: "Goblin",
      origin: "Germany/Britain",
      description: `Having the same magical abilities as that of the beloved faries, they are the exact opposite of faries. Goblins are short with sharp
                    pointy ears and hooked nose. They are mischevious malicious and greedy creature especially when it comes to gold and jwelery. Like any 
                    other mythical creatures, there is no one kind of goblin. They differ from culture to culture but regardless, they are all considered 
                    as grotesque creatures.`,
      img: "https://64.media.tumblr.com/2693273781b4074fad756ac19dd60a4d/tumblr_o4smbtu49s1v9qvuco1_1280.jpg",
    },
  ];
  return (
    <div className="App">
      <Switch>
        <Route path="/add-beast">
          <NavBar />
          <AddBeast beasts={beasts} />
        </Route>
        <Route path="/character">
          <NavBar />
          <Characters beasts={beasts} />
        </Route>
        <Route path="/tic-tac-toe">
          <NavBar />
          <Game />
        </Route>
        <Route path="/form">
          <NavBar />
          <BasicForm />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function NavBar() {
  return (
    <AppBar style={{ backgroundColor: "rgb(233, 233, 233)" }} position="static">
      <Toolbar>
        <a class="navbar-brand">Bestiary</a>
        <Link class="nav-link active" to="/">
          Home <span class="sr-only">(current)</span>
        </Link>
        <Link class="nav-link" to="/character">
          Beasts
        </Link>
        <Link class="nav-link" to="/add-beast">
          Add to Bestiary
        </Link>
        <Link class="nav-link" to="/tic-tac-toe">
          Tic-Tac-Toe
        </Link>
        <Link class="nav-link" to="/form">
          Fom
        </Link>
      </Toolbar>
    </AppBar>
  );
}

function Home() {
  return (
    <div>
      <h3 id="home-welcome">Hello User,</h3>
      <img id="welcome-gif" src="welcome.gif" />
      <p id="homepara">
        <i>"Welcome to my website! Enter freely and of your own will!"</i>
        <br></br> <span id="bram">-Bram Stoker, Dracula</span>
      </p>
    </div>
  );
}

function Characters({ beasts }) {
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
              id={bst.id}
            />
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
            sx={{ width: 350, height: 400 }}
          />
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

function LikeCounter() {
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

function AddBeast({ beasts }) {
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
        onChange={(event) => setNewbeast(event.target.value)}
      />
      <TextField
        className="outlined-basic"
        label="Place of Origin"
        variant="outlined"
        onChange={(event) => setNeworigin(event.target.value)}
      />
      <TextField
        className="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={(event) => setNewnewdescription(event.target.value)}
      />
      <TextField
        className="outlined-basic"
        label="Image URL"
        variant="outlined"
        onChange={(event) => setNewimg(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={
          () => console.log(addedbeast)
          // <Characters beasts={addedbeast}/>
        }
      >
        Add Beast
      </Button>
    </div>
  );
}

function Game() {
  return <GameEngine />;
}

function GameEngine() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [Xturn, setXturn] = useState(true);
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
      }
    }
  };
  const handleClick = (index) => {
    console.log(index);
    if (board[index] == null) {
      const boardCopy = [...board];
      boardCopy[index] = Xturn ? "X" : "O";
      setBoard(boardCopy);
      setXturn(!Xturn);
    }
  };
  return (
    <div className="box-div">
      {board.map((val, index) => (
        <Tictac val={val} onPlayerClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

function Tictac({ val, onPlayerClick }) {
  // const [value, setValue] = useState(null);
  const style = {
    fontSize: 20,
    color: val == "X" ? "red" : "green",
  };
  return (
    <div className="table">
      <Button variant="text" style={style} onClick={onPlayerClick}>
        {val}
      </Button>
    </div>
  );
}


function BasicForm() {
  const validateForm = (values) => {
    console.log("Validate form", values);
    const errors = {};

    if(values.email.length < 5) {
      errors.email = "Please provide at least 5 characters";
      return errors;
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please provide a valid email";
      return errors;
    }

    if(values.password.length < 8) {
      errors.password = "Please provide atleast 8 characters";
      return errors;
    }
    else if (values.password.length > 12) {
      errors.password = "Please provide less than 12 characters";
      return errors;
    }
  }
  // return (
  //   <div>
  //     <Formik
  //       initialValues={{ email: "", password: "" }}
  //       validate={validateForm}
  //       onSubmit={(value) => console.log("On Submit:", value)}
  //     >
  //       {(formik) => (
  //         <form onSubmit={ formik.handleSubmit}>
  //           <input
  //             type="email"
  //             placeholder="enter your email"
  //             id="email"
  //             name="email"
  //             value={formik.values.email}
  //             onChange={formik.handleChange}
  //             onBlur={formik.handleBlur}
  //           /><br></br>
  //           {formik.errors.email && formik.touched.email && formik.errors.email}
  //           <br></br>
  //           <input
  //             type="password"
  //             placeholder="enter your password"
  //             id="password"
  //             name="password"
  //             value={formik.values.password}
  //             onChange={formik.handleChange}
  //             onBlur={formik.handleBlur}
  //           /><br></br>
  //           {formik.errors.password && formik.touched.password && formik.errors.password}
  //           <br></br>
  //           <button type="submit">Submit</button>
  //         </form>
  //       )}
  //     </Formik>
  //   </div>
  // );

    const formValidationSchema = yup.object({
      email: yup.string()
            .min(5, "Give a bigger email")
            .required("why not fill this email?")
            .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email"),
      password: yup.string()
            .min(8, "Give a stronger password")
            .max(12, "Woah there! take it easy with the password.")
            .required("Password is a must to protect your privacy")
    })

    const  formik = useFormik({ 
        initialValues: { email: "", password: "" },
        // validate: {validateForm},
        validationSchema: formValidationSchema,
        onSubmit: (value) => {
          console.log("On Submit:", value)
        }
    })
  return (
    <div>
          <form onSubmit={ formik.handleSubmit}>
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            /><br></br>
            {formik.errors.email && formik.touched.email && formik.errors.email}
            <br></br>
            <input
              type="password"
              placeholder="enter your password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            /><br></br>
            {formik.errors.password && formik.touched.password && formik.errors.password}
            <br></br>
            <button type="submit">Submit</button>
          </form>
    </div>
  )
}

export default App;
