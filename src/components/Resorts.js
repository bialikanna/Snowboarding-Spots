import React from 'react';
import SearchBar from "./SearchBar";
import {
    HashRouter,
    Link
} from 'react-router-dom'


class Resorts extends React.Component {
    constructor(props){
        super(props);

        this.data = this.props.data;
        this.state = {
            name: '',
            data: this.props.data
        }
    }

    handleNameSearch = (value) => {

        const result = this.data.filter((resort) => {
            return resort.name.toLowerCase().includes(value.toLowerCase())
        })
        this.setState({
            name: value,
            data: result
        })
    }

    render() {
        return (
            <HashRouter>
            <div className="containerr">
                <SearchBar input={this.handleNameSearch}/>
                {this.state.data.map(resort=>{
                    return (
                        <div key={resort.name}>
                            <Link to="/resorts/szczyrk">
                                <div className={`${resort.img} wrapper`}></div>
                                <h1>{resort.name}</h1>
                                <p>{resort.description}</p>
                            </Link>
                        </div>

                    )
                })}

                </div>
            </HashRouter>

        );
    }
}

export default Resorts;