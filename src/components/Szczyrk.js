import React from 'react';
import Mapa from '../images/marker.png';
import Snowflakes from '../images/snowflakes.png';
import Foto from '../images/camera.png';
import Movie from '../images/movie.png';
import Weather from '../components/Weather';
import CarouselResorts from '../components/CarouselResorts';
import Mapaszczyrk from '../images/szczyrk/mapa.png';
import Scroll from 'react-scroll-to-element';
import Youtube from './Youtube';
import {
    Link
} from 'react-router-dom'

class Szczyrk extends React.Component {
    constructor(props){
        super(props);

        this.data = this.props.data;
        this.state = {
            name: '',
            data: this.props.data
        }
    }
    render() {
        return (
            <div className="containerr">
                <h1 className="description">{this.props.data.name}</h1>
                <div className="szczyrk_2 frame"></div>

                <hr />

                <div className="icons">

                    <Scroll type="class" element="mapa">
                        <img  src={Mapa} />
                    </Scroll>

                    <Scroll type="class" element="pogoda">
                        <img  src={Snowflakes} />
                    </Scroll>

                    <Scroll type="class" element="galeria">
                        <img src={Foto} />
                    </Scroll>

                    <Scroll type="class" element="filmy">
                    <img  src={Movie} />
                    </Scroll>


                </div>
                <hr />

                <p className="description">{this.props.data.description}</p>
                <hr />

                {/*//mapa*/}
                <div className="icons mapa">
                        <img  src={Mapa} />
                </div>

                <div className="map">
                    <a href="https://www.google.pl/maps/place/Szczyrk+Mountain+Resort/@49.6960313,18.9893212,17z/data=!3m1!4b1!4m5!3m4!1s0x4714218dc635327d:0xa1099711ad915230!8m2!3d49.6960279!4d18.9915099">
                        <img src={Mapaszczyrk} />
                    </a>
                </div>

                {/*//pogoda*/}
                <hr />
                <div className="icons pogoda">
                    <img  src={Snowflakes} />
                </div>
                <Weather />

                {/*//foto*/}
                <hr />
                <div className="icons galeria">
                    <Link to="">
                        <img src={Foto} />
                    </Link>
                </div>
                <CarouselResorts />

                {/*//movie*/}
                <hr />
                <div className="icons filmy">
                    <Link to="">
                        <img src={Movie} />
                    </Link>
                </div>
                <Youtube />


                <hr />
            </div>
        );
    }
}
export default Szczyrk;