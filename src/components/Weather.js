import React from 'react';
import ReactDOM from 'react-dom';
import Skycons from 'react-skycons'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false,
            city: "Białka Tatrzańska",
            latitude: "49.390908",
            longitude: "20.099887"
        };

        this.api = `https://api.darksky.net/forecast/52aa9afd798f0e08b6cbba26e7b90764/${this.state.latitude},${this.state.longitude}?units=si&lang=pl`;
    }

    componentDidMount() {
        fetch(this.api).then(r => {

            // Obsługa ewentualnych błędów sieci
            if (r.ok)
                return r.json()
            else
                throw new Error("Błąd sieci")

        }).then(data => {

            this.setState({
                data
            })

        }).catch(err => console.log(err))
    }

    render() {
        const {data} = this.state;

        if (!data)
            return null

        return (
            <ul>
                <div className="weather">{data.currently.summary}</div>
                <div>
                    <Skycons
                        color='black'
                        icon={data.currently.icon.replace(/-/g, "_").toUpperCase()}
                        autoplay={true}
                    />
                </div>
                <div className="temperature">{parseInt(data.currently.temperature)} &#8451;</div>

            </ul>
        );
    }
}

export default Weather;