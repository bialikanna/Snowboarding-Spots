import React from 'react';

class SearchBar extends React.Component {

    handleInput = (e) => {
        if(typeof this.props.input === 'function'){
            this.props.input(e.target.value);
        }
    }


    render(){
        return (
            <form>
                <p>
                    <input
                        className="text"
                        onChange={this.handleInput}
                        placeholder="Search..."/>
                </p>
            </form>
        )
    }
}

export default SearchBar;
