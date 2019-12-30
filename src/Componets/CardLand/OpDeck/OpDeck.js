import React from 'react';
import Card from '../Card/Card'
var _ = require('underscore');
var opponentDeck =  [];
var hiddenoppdeck =[];
//= ({cLink,path,usertype,updateDeck}) =>
class  OpDeck extends React.Component {
    constructor(props){
        super(props);
        if(!this.props.renderDeck && this.props.initOp){
            this.props.initOpf();
            console.log('opponent constructor entered')
        const dCards = this.props.cLink.map((id,i) => {
            return(
                    <Card 
                        key={i}
                        keyHolder = {i}
                        path = {this.props.path}
                        srcId={`./Cards/${id}`}
                        onClickUpdate = {() => {}}
                        />
            )
        })
            hiddenoppdeck =  _.sample(dCards,[7]);
            this.props.updateDeck(hiddenoppdeck,this.props.usertype);
            let Cover = [];
            for (let i =0;i<7;i++){
                Cover[i] = <Card
                                key ={i+100}
                                keyHolder = {i+100}
                                srcId = {'./abstractCards/blue_back.png'}
                                usertype={this.props.usertype}
                                onClickUpdate = {() => {}}
                                />
            }  
            opponentDeck = Cover;
        }
        else{
            opponentDeck[this.props.keyHolder-100] = hiddenoppdeck[this.props.keyHolder-100];
            this.props.updateDeck(opponentDeck,this.props.usertype);
            //this.props.deckInit();
            //this.forceUpdate();
            }

    }
    render(){
    return(
             <div>
                 {opponentDeck}
            </div>
 
    );
    }
} 

export default OpDeck;