import React, {Component} from 'react';
import axios from 'axios';
import {ELEPHANT_ROUTE} from '../../../common/routes';
import ElephantSummary from "./ElephantSummary/ElephantSummary";

class ElephantSummaryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        axios.get(ELEPHANT_ROUTE).then((res) => {
            this.setState({
                data: res.data.elephants
            })
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                {
                    data.map((elephant) => {
                        return <ElephantSummary key={elephant.elephantId}
                                                id={elephant.elephantId}
                                                name={elephant.name}
                                                description={elephant.description}
                                                imageUrl={elephant.image.url}/>
                    })
                }
            </div>
        );
    }
}

export default ElephantSummaryView;