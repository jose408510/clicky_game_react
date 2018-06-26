import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  checkClicked = id => {
    console.log(id);
    if (this.state.friends[id].clicked === true) {
      console.log("Already clicked");
    } else {
      console.log("Not clicked yet");
    }
    const newArray = this.shuffleCards(this.state.friends);
    this.setState({
      friends: newArray
    })
  }

  shuffleCards = array => {
    for(let i = 0; i < array.length; i++){
      const sort = Math.floor(Math.random() * (i+1));
      [array[i], array[sort]] = [array[sort], array[i]] 
    }
    return array;
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
     <Wrapper>
        <Title>Exotic Car Guessing Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            clicked={this.checkClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
