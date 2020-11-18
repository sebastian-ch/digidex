import React from 'react'
import _ from 'lodash'
import Search from './Search'
import Header from './Header'
import './styles.css'
import data from './data/data-new.json'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
        users: [],
        filtered: []
        
    };
    this.filterOnChange = this.filterOnChange.bind(this);
    
  }

 

    componentDidMount() {
            this.setState({ 
              users: data,
              filtered: data

            })
       
    }

    filterOnChange = (event) => {

        //console.log(event.target.value);

        
        
        
        var filterView = _.filter(this.state.users, function(o){
          return o[0].toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
          filtered: filterView,
          
        })
       


    }




    render() {
        const { filtered } = this.state;

        //console.log(this.state.users)

      return (
        <div>
          <Header />
          <Search filterOnChange={this.filterOnChange} />
          <div className="users" > {
            filtered.map((d) => (
              <div className="user" >
                <p> {d[0]}</p> 
                <br></br>
                <img className='pic' src={d[1]}></img>
              </div>
            ))
          }
          </div>
        </div>
      );
    }



}