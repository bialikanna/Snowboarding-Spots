import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Category extends React.Component {

    render() {
        return (
            <div className="containerr">
                {/*<Button className="buttons" to="/resorts" tag={Link}></Button>*/}
                <div className="wrapper ">
                <Button className="btn_category" color="blue" to="/resorts" tag={Link}>Resorts</Button>
                <Button className="btn_category" color="blue" to="/freeride" tag={Link}>Freeride</Button>
                </div>
                <div className="wrapper wrapper_2">
                <Button className="btn_category" color="blue" to="/snowparks" tag={Link}>Snowparks</Button>
                <Button className="btn_category" color="blue" to="/street" tag={Link}>Street</Button>
                </div>
            </div>
        );
    }
}
export default Category;