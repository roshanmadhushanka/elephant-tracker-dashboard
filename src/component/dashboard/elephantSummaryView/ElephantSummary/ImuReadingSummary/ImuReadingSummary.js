import React, {Component} from 'react';
import {IMU_READING_ROUTE} from '../../../../../common/routes';
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
            interval: 5000,
            data: [],
            roll: 0,
            pitch: 0,
            obda: 0,
            averageAccelerationX: 0.0000,
            averageAccelerationY: 0.0000,
            averageAccelerationZ: 0.0000,
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
            const {values, roll, pitch, obda, averageAccelerationX, averageAccelerationY, averageAccelerationZ} = res.data;
            const response = this.parseData(values);
            this.setState({
                loading: false,
                data: response,
                roll: roll,
                pitch: pitch,
                obda: obda,
                averageAccelerationX: averageAccelerationX,
                averageAccelerationY: averageAccelerationY,
                averageAccelerationZ: averageAccelerationZ,
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
        const {data, roll, pitch, obda, averageAccelerationX, averageAccelerationY, averageAccelerationZ} = this.state;
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
                                <Line type="monotone" dataKey="gyroscopeY" stroke="#82ca9d"/>
                                <Line type="monotone" dataKey="gyroscopeZ" stroke="#e91e63"/>
                            </LineChart>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card col m5">
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th className="header">Parameter</th>
                                    <th className="header">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Roll</td>
                                    <td>{roll}</td>
                                </tr>
                                <tr>
                                    <td>Pitch</td>
                                    <td>{pitch}</td>
                                </tr>
                                <tr>
                                    <td>OBDA</td>
                                    <td>{obda}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col m1">
                    </div>
                    <div className="card col m5">
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th className="header">Avg. Acceleration Axis</th>
                                    <th className="header">Value (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Acceleration X</td>
                                    <td>{averageAccelerationX}</td>
                                </tr>
                                <tr>
                                    <td>Acceleration Y</td>
                                    <td>{averageAccelerationY}</td>
                                </tr>
                                <tr>
                                    <td>Acceleration Z</td>
                                    <td>{averageAccelerationZ}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImuReadingSummary;