import React, {Component} from 'react';
import Header from './Header';
import ScoreList from "./ScoreList";
import Quiz from "./Quiz";

class App extends Component {
    render() {
        return (
            <main role="main" className="container-sm">
                <Header/>
                <ScoreList/>
                <Quiz/>
            </main>
        );
    }
}

export default App;
