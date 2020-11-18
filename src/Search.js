import React from 'react'



export default class Search extends React.Component {


    render() {
        return (
            <div>
                <input type='text' className="search" placeholder="Search.." onChange={this.props.filterOnChange}></input>
            </div>
        )
    }

}