import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Badge from '@mui/material/Badge';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDown';
import { useHistory } from "react-router-dom";


function App() {
  const beasts = [
    {
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
      img: "https://mfiles.alphacoders.com/695/695016.jpg"
    },
    {
      name: "Werewolf",
      origin: "Ancient Greece",
      description: `A warewolf is a human who has the ability to shapeshift into a wolf. It is believed that on full moon nights 
                    humans bitten by a werewolf or under a specific curse by a witch turn into werewolves themselves. The earliest 
                    known werewolf mythology comes from greek mythology. Studies says that the human and animal behaviors tend to get 
                    violant during full moon. This might be the cause of the idea of "beast within" which could have lead to the werewolf
                    mythology.`,
      img: "https://difference.guru/wp-content/uploads/2021/06/Difference-Between-Lycan-and-Werewolf.jpg"
    },
    {
      name: "Zombie",
      origin: "Haiti",
      description: `Zombies are undead creatures. Unlike vampires, they are not bound to the night. A person becomes a zombie when they 
                    get infected by a virus that is capable of reanimating and controlling the brain after the death of the individual affected
                    by the virus. Zombies are characterized by their robotic behaviour with rotting flesh with no other motive than to feed
                    mainly on brains.`,
      img: "https://i.imgur.com/zZTgykM.jpg"
    },
    {
      name: "Yeti",
      origin: "India",
      description: `Yeti is an ape like creature known to be found in the Himalayan mountain. There are many sitings in the depths of the forest
                    of creatures like this all over the world and are called by many different names locally. Yeti are usually known to be calm 
                    avoid any kind of contact with humans. Although there are may sightings of yeti even today, there is no concrete evidence on
                    the existance of them.`,
      img: "https://images.squarespace-cdn.com/content/v1/5d2935d76499400001905606/1565992866040-JZMO6NRK346W9GFK7NTS/Yeti?format=1000w"
    },
    {
      name: "Goblin",
      origin: "Germany/Britain",
      description: `Having the same magical abilities as that of the beloved faries, they are the exact opposite of faries. Goblins are short with sharp
                    pointy ears and hooked nose. They are mischevious malicious and greedy creature especially when it comes to gold and jwelery. Like any 
                    other mythical creatures, there is no one kind of goblin. They differ from culture to culture but regardless, they are all considered 
                    as grotesque creatures.`,
      img: "https://img.artpal.com/495861/177-21-7-28-20-31-7m.jpg"
    }
  ]
  return (
      <div className="App">
        <Switch>
          <Route path="/character">
            <NavBar />
            <Characters beasts={beasts}/>
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
  return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">Bestiary</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
            <Link class="nav-link" to="/character">Beasts</Link>
            <Link class="nav-link" to="/add-beast">Add to Bestiary</Link>
          </div>
        </div>
        </nav>
      </div>
  )
}


function Home() {
  return (
    <div>
      <h3 id="home-welcome">Hello User,</h3>
      <img id="welcome-gif" src="welcome.gif"  />
      <p id="homepara"><i>"Welcome to my website! Enter freely and of your own will!"</i><br></br> <span id="bram">-Bram Stoker, Dracula</span></p>
    </div>
  )
}


function Characters({beasts}) {
  return(
    <div>
      <div id="card-box">
        {beasts.map((bst, index) => {
          return (
            <CharDisplay
                index = {index}
                name = {bst.name}
                origin = {bst.origin}
                description = {bst.description}
                img = {bst.img}
                id = {bst.id}/>
          )
        })}
      </div>
    </div>
  )
}


function CharDisplay({name, origin, description, img, id}) {
  const [visibility, setVisibility] = useState(false);
  const style = { display: visibility ? 'block' : 'none' };
  return (
    <Card sx={{ maxWidth: 345 }}>
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
                  onClick={() => {visibility ? setVisibility(false) : setVisibility(true)}}>
                  {visibility ? <ArrowDropUpIcon color="primary"/>
                        : <ArrowDropDownIcon color="primary"/>}
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
      </CardActions>
    </Card>
  );
}


function LikeCounter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <Badge badgeContent={like} sx={{ mr: 2 }} color="success">
        <IconButton 
          aria-label="delete" 
          size="small"
          color="primary" 
          onClick={() => setLike(like + 1)}>
          <ThumbUpAltIcon />
        </IconButton>
      </Badge>
      
      <Badge badgeContent={dislike} sx={{ mr: 0.5 }} color="error">
        <IconButton 
          aria-label="delete" 
          size="small"
          color="primary"
          onClick={() => setDislike(dislike + 1)}> 
          <ThumbDownAltIcon />
        </IconButton>
      </Badge>
    </div>
  )
}


export default App;
