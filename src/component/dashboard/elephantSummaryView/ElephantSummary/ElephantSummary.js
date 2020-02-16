import React, {Component} from 'react';
import ImuReadingSummary from "./ImuReadingSummary/ImuReadingSummary";
import './ElephantSummary.css';

class ElephantSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            imageUrl: props.imageUrl,
        }
    }

    render() {
        const { id, name, description, imageUrl } = this.state;

        return (
            <div className="body section card z-depth-1">
                <div className="row">
                    <div className="summary col m3">
                        <div>
                            <div className="summary row">
                                <h1 className="teal-text text-darken-4">{name}</h1>
                            </div>
                            <div className="summary row">
                                <img src={imageUrl} alt={description} className="card-image"/>
                                <h4>Description</h4>
                                <p className="teal-text card-content">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summary col m9 left-align">
                        <ImuReadingSummary subjectId={id}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default ElephantSummary;