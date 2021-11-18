import React, { Component } from 'react'

import Person from './components/Person'
export class About extends Component {
    constructor(props) 
    {
        super(props);
        this.showPeople = this.showPeople.bind(this);
    }
    state = 
    {
        //all names were randomly generated from mockaroo.com
        people: [
            {
                name:"Bryana Baudasso",
                title:"CEO",
                desc:"Founded the business in 2011, she has a passion for customer service and a radiant smile",
                icon: "./items/ceo.jpg"
            },
            {
                name:"Ursa Krier",
                title:"Operations Manager",
                desc:"With management skills that rival the USSR, the staff are all kept perfectly in line by Ursa",
                icon: "./items/ops.jpg"
            },
            {
                name:"████ ███████",
                title:"HR Correspondant",
                desc:"n̸͚̦̯̹̰͌̓́͛̅͝o̶̹̙͔̤̼̙͒͐n̸͖͕̽̉̐͠e̴̢̡̦͇̲͎̍̌́͌ ̷̧̦̱͓̏̈́̏̌̒s̴̛̼̘͖̣̜͚̅̍̔̈́͒h̸̝̜̟̘̘̾̒́ḁ̵̆̌̒l̶̤͇̙͕͒͗̽l̶̨͔̒ ̶̤̮̝̦̞̍̚l̵̨̛̜̤͖̫̥̅̈́͝e̴͓͍̥̭͇̿̆̓̀͒̕ͅầ̸̛̹̤̅v̵͉̝̇̓̔̎e̵̲̬̗̮̲͒͠ ̴̱̱̘̐̽̄͝͠o̴͍̼̼̐̓͑̐̀ǘ̴̧̼̞̅r̶̛͉͈̘̰̟͙͑ ̴̛̗̻̯̺̝̓͊̕e̸͇̒̀ͅm̸̢̱͖̹̣̌̍̅̒͂b̷̡͔͝ŗ̷̛̦̈͗̿̚͝ã̶̡̮͉͈̼̂̀̓͊̒c̶̪͇̮͕̙͙̃̈̈e̸̱͖̝͍͑̄͂͛̈́͘",
                icon:"./items/hr.jpg"
            },
            {
                name:"Roberto Munday",
                title:"CFO",
                desc:"With a sharp mind, Roberto keeps the books balanced and in check.",
                icon:"./items/cfo.jpg"
            }
        ]
    }

    showPeople()
    {
        let card = [];
        for(let a in this.state.people)
        {
            card.push(<Person name={this.state.people[a].name} title={this.state.people[a].title} blurb={this.state.people[a].desc} icon={this.state.people[a].icon} />); 
        }

        return card;
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="display-2" style={{textAlign:"center"}}>About Us</h1>
                <p className="container-flex col-sm" style={{textAlign:"center"}}>
                    {this.showPeople()}    
                </p>
            </React.Fragment>
            
        )
    }
}

export default About
