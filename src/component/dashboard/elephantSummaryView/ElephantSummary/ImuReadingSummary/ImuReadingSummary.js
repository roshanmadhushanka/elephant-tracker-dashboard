import React, {Component} from 'react';
import {IMU_READING_ROUTE} from '../../../../common/routes';
import axios from "axios";
import './ImuReadingSummary.css';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ImuReadingSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectId: props.subjectId,
            interval: 500000,
            data: [],
            roll: 0,
            pitch: 0,
            obda: 0,
        };
    }

    parseData(data) {
        let parsedData = [];

        data.forEach((record) => {
            parsedData.push({
                timestamp: new Date(record.timestamp).toLocaleTimeString("en-US"),
                accelerationX: record.accelerationX,
                accelerationY: record.accelerationY,
                accelerationZ: record.accelerationZ,
                gyroscopeX: record.gyroscopeX,
                gyroscopeY: record.gyroscopeY,
                gyroscopeZ: record.gyroscopeZ,
            });
        });

        return  parsedData
    }

    renderImuData() {
        const url = `${IMU_READING_ROUTE}/${this.state.subjectId}`;
        axios.get(url).then(res => {
            const {values, roll, pitch, obda} = res.data;
            const response = this.parseData(values);
            this.setState({
                loading: false,
                data: response,
                roll: roll,
                pitch: pitch,
                obda: obda,
            });
        });
    }

    componentDidMount() {
        const { interval } = this.state;
        this.renderImuData();
        setInterval(() => this.renderImuData(), interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {data, roll, pitch, obda} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="card col m5">
                        <div className="card-title center-align chart-title"><span>Accelerometer Readings</span></div>
                        <div className="chart">
                            <LineChart
                                width={500}
                                height={250}
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="timestamp" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="accelerationX" stroke="#8884d8"/>
                                <Line type="monotone" dataKey="accelerationY" stroke="#82ca9d"/>
                                <Line type="monotone" dataKey="accelerationZ" stroke="#e91e63"/>
                            </LineChart>
                        </div>
                    </div>
                    <div className="col m1"></div>
                    <div className="card col m5">
                        <div className="card-title center-align chart-title"><span>Gyroscope Readings</span></div>
                        <div className="chart">
                            <LineChart
                                width={500}
                                height={250}
                                data={data}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="timestamp" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="gyroscopeX" stroke="#8884d8"/>
                                <Line type="monotone" dataKey="accelerationY" stroke="#82ca9d"/>
                                <Line type="monotone" dataKey="accelerationZ" stroke="#e91e63"/>
                            </LineChart>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card col m5">
                        Roll {roll} Pitch {pitch} OBDA {obda}
                    </div>

                </div>
            </div>
        );
    }
}

export default ImuReadingSummary;