import React, {Component} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

import {TOPIC_ROUTE} from '../../../common/routes';
import './InfoCard.css';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: props.topic,
            loading: true,
        }
    }

    componentDidMount() {
        const url = `${TOPIC_ROUTE}/${this.state.topic}`;
        axios.get(url).then(res => {
            this.setState({
                loading: false,
                value: res.data.value,
            });
        });
    }

    render() {
        const {title} = this.props;
        const {value, loading} = this.state;
        return(
            <div className="body container section card z-depth-1">
                <div className="card-content">
                    <span className="card-title"><p className="title-text">{title}</p></span>
                    {loading
                        ? <div><ReactLoading className="spinner" type={'bars'} color={'#e91e63'} height={'10%'} width={'20%'} /></div>
                        : <div className="card-content"><h1 className="pink-text center-align">{value}</h1></div>}

                </div>

            </div>
        )
    }
}

export default InfoCard;