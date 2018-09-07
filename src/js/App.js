import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Resorts from '../components/Resorts';
import Freeride from '../components/Freeride';
import Snowparks from '../components/Snowparks';
import Street from '../components/Street';
import Bialka from '../components/Bialka';
import Szczyrk from '../components/Szczyrk';




import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/main.scss'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'

let resorts = [
    {img: "szczyrk", name: "Szczyrk Mountain Resort", description: "Jeden z największych ośrodków narciarskich w Polsce. Zlokalizowany w Beskidzie Śląskim na zboczach szczytów Małe Skrzyczne 1211 m n.p.m. i Wierch Pośredni 1000 m n.p.m. Jest doskonałą propozycją dla turystów z aglomeracji Śląskiej i Małopolskiej, jak i południowych sąsiadów z Czech i Słowacji."},
    {img: "bialka", name: "Kotelnica Białczańska", description: "Ośrodek Narciarski Kotelnica Białaczańska, jest największą stacją narciarską położoną na Podhalu. Kotelnica posiada świetną lokalizację, w samym sercu Białki Tatrzańskiej. Jest doskonałym wyborem zarówno dla tych którzy dopiero uczą się jeździć na nartach czy snowboardzie, jak i dla zaawansowanych pasjonatów tych sportów"},
    {img: "zieleniec", name: "Zieleniec Ski Resort", description: "Największy kurort narciarski w Kotlinie Kłodzkiej, a przy tym jedyna w Polsce miejscowość o typowo alpejskim mikroklimacie. Za sprawą północnej ekspozycji stoków i pokrywającego je przez ponad 150 dni w roku śniegowi sezon trwa tu naprawdę długo."},
    {img: "czarna", name: "Sienna-Czarna Góra Resort", description: "Czarna Góra Resort to nowoczesny, całoroczny ośrodek górski, malowniczo położony w Masywie Śnieżnika. Najczęściej wybierany przez amatorów narciarstwa zjazdowego ośrodek w Polsce zachodniej."},
];

class App extends React.Component {
    render() {
        return (
            <HashRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/resorts" render={ props => <Resorts {...props} data={resorts}/>} />
                    <Route path="/snowparks" component={Snowparks}/>
                    <Route path="/street" component={Street}/>
                    <Route path="/freeride" component={Freeride}/>
                    <Route path="/resorts/bialka-tatrzanska" component={Bialka}/>
                    <Route path="/resorts/szczyrk" render={ props => <Szczyrk {...props} data={resorts[0]}/>}/>
                </Switch>
                <Footer />
            </div>
            </HashRouter>
        );
    }
}
export default App
