import React from 'react'
import * as d3 from 'd3'
import _ from 'lodash'
import Search from './Search'
import Header from './Header'
import './styles.css'


export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
        users: [],
        filtered: []
        
    };
    this.filterOnChange = this.filterOnChange.bind(this);
  }

    componentDidMount() {
        d3.json('/data').then((response) => {
          //console.log(response);
            this.setState({ 
              users: response,
              filtered: response

            })
        });
    }

    filterOnChange = (event) => {

        console.log(event.target.value);

        
        
        
        var filterView = _.filter(this.state.users, function(o){
          return o[0].toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
          filtered: filterView,
          
        })
       


    }




    render() {
        const { filtered } = this.state;

        //console.log(this.state.users[0])

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