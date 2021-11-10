import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Characters } from "./Characters";
import { AddBeast } from "./AddBeast";
import { Game } from "./Game";
import { BasicForm } from "./BasicForm";

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
          <ColorGame />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function ColorGame() {
  return (
    <div></div>
  )
}

export default App;
