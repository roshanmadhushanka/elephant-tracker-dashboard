import React, {Component} from 'react';
import InfoCard from "./infocard/InfoCard";

class Dashboard extends Component {
    render() {
        return(
            <div>
                <div className="col s12 m6">
                    <div className="row">
                        <InfoCard title="Elephant Count" topic="ELEPHANT_COUNT"/>
                    </div>
                    <div className="row">
                        <InfoCard title="Reading Count" topic="READING_COUNT"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;