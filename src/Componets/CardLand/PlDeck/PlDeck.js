import React from 'react';
import Card from '../Card/Card';
var _ = require('underscore');
var index = 0;
var playerDeck =  [];
var playerhDeck = [];
var init = true;
//= ({cLink,path,usertype,updateDeck}) =>
class  PlDeck extends React.Component {
    constructor(props){
        super(props);
        if(init){
            console.log('player constructor etered');
            init = false;
        const dCards = this.props.cLink.map((id,index) => {
            return(
                    <Card 
                        key={index}
                        keyHolder = {index}
                        path = {this.props.path}
                        srcId={`./Cards/${id}`}
                        usertype={this.props.usertype}
                        onClickUpdate = {this.onClickupdate}
                        />
            )
        })
            playerhDeck =  _.sample(dCards,[7]);
            

    }
            this.props.updateDeck(playerhDeck,this.props.usertype);
            let Cover = [];
            for (let i =0;i<7;i++){
                Cover[i] = <Card
                                key ={i+100}
                                keyHolder = {i+100}
                                srcId = {'./abstractCards/blue_back.png'}
                                usertype={this.props.usertype}
                                onClickUpdate = {this.onClickupdate}    
                                />
            }  
            playerDeck = Cover;
            
        
    }
    onClickupdate = (keyHolder) => {
        console.log(keyHolder);
        if(index < 7 ){
        if(keyHolder-100 > -1 ){
        playerDeck[keyHolder-100] = playerhDeck[keyHolder-100];
        index++;
        this.props.renderDeck(keyHolder);
        }
        //this.forceUpdate();
        }
    }
    render(){
    return(
            <div>
                {playerDeck}
            </div>
 
    );
    }
} 

export default PlDeck;