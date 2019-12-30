import React, {Component} from 'react';
import './App.css';
import PlDeck from './Componets/CardLand/PlDeck/PlDeck';
import OpDeck from './Componets/CardLand/OpDeck/OpDeck';
import ArenaBalance from './Componets/ArenaBalance/ArenaBalance';
import Profile from './Componets/Profile/Profile';
import Personal from './Componets/Personal/Personal';


class App extends Component  {
  constructor(){
    super();
    this.state = {
      cLink:[],
      path:'',
      mount: false,
      renderDeck: false,
    }
  }
  initOp =true;
  player = { 
    name: '',
    level:'',
    balance:'',
    arenaB:'',
    cards:[]
  }
  opponent=  {
    name: '',
    level:'',
    balance:'',
    arenaB:'',
    cards:[],
  }
  rendered = false;
  keyHolder = 0;
  componentWillMount(){
    fetch('http://localhost:3000/deck',{
      method: 'get',
      headers: {'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then( (deck) =>{
            this.setState({cLink: deck.cLink})
            this.setState({path:deck.relpath})
            this.setState({mount: true});
          })
  }
  usersCardUpdate = (deck,usertype) => {
      if(usertype === 'player'){
        this.player.cards=deck;
        console.log('player deck had been updated');
        console.log('the player deck is:',this.player.cards)
      }
      else {
        this.opponent.cards = deck;
        console.log('opponent deck had been updated');
        console.log('the opponent deck is:',this.opponent.cards)

      } 
   
  }
  renderDeck = (keyHolder) => {
    if(!this.rendered){
    this.setState({renderDeck: true},
      () => {console.log('on the Click, the state is:',this.state.renderDeck, 'and the opponent deck is:',this.opponent.cards)});
      this.rendered = true;
      this.keyHolder = keyHolder;
    }
    else {this.setState({renderDeck: false},
        ()=>console.log('call back? opponent', 'the opponent cards are:',this.opponent.cards))
        this.rendered = false;
        this.keyHolder = keyHolder;
      }
  }
  initOpf = () => {
    this.initOp =false;      
  }
  render(){
    return (
        this.state.mount ?
          <div className="App">
            <Personal />
            <div className="secfrag">
              <Profile />
              <div className="center">
              {!this.state.renderDeck &&
               <OpDeck 
                    cLink={this.state.cLink}
                    path={this.state.path}
                    updateDeck = {this.usersCardUpdate}
                    opponentCards ={this.opponent.cards} 
                    usertype = 'opponent'
                    renderDeck = {this.state.renderDeck}
                    initOpf = {this.initOpf}
                    initOp = {this.initOp}
                    keyHolder = {this.keyHolder}
                    /> }
               {this.state.renderDeck &&
               <OpDeck 
                    cLink={this.state.cLink}
                    path={this.state.path}
                    updateDeck = {this.usersCardUpdate}
                    opponentCards ={this.opponent.cards} 
                    usertype = 'opponent'
                    renderDeck = {this.state.renderDeck}
                    initOpf = {this.initOpf}
                    initOp = {this.initOp}
                    keyHolder = {this.keyHolder}
                    />}
                
              </div>
            </div>   
            <div className="secfrag">
              <div className="h-100  pa  br3 ml-0 ">
              </div>
              <div className="center w-30">
                <ArenaBalance />
              </div>
            </div>  
            <div className="secfrag">
              <Profile />
              <div className="center">
                <PlDeck 
                    cLink={this.state.cLink} 
                    path={this.state.path}
                    updateDeck = {this.usersCardUpdate}
                    playerCards = {this.player.cards} 
                    usertype = 'player'
                    renderDeck = {this.renderDeck}
                    />    
              </div>
            </div>      
          </div>
          :
          <div></div>
    );
  }
}

export default App;
