import React from 'react';
import Category from './Category';
import Carousel from './Carousel';


class Main extends React.Component {
    render() {
        return (
            <div className="containerr">
                <div className="wrapper img"/>
                <Category />
                <Carousel classname="wrapper" />
            </div>
        );
    }
}
export default Main;