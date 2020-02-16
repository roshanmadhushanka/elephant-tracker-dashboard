import React, {Component} from 'react';

class DynamicInfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        const {interval} = this.props;
        this.interval = setInterval(() => this.tick(), interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {title, topic} = this.props;
        return(
            <div className="container section card z-depth-1">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <h1>{topic}</h1>
                </div>
            </div>
        );
    }
}

export default DynamicInfoCard;