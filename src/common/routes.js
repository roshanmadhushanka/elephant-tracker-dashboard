const MAIN_ROUTE = "http://localhost:5000/qlab-b942c/us-central1/api/v1";
// const MAIN_ROUTE = "https://us-central1-qlab-b942c.cloudfunctions.net/api/v1";
const TOPIC_ROUTE = `${MAIN_ROUTE}/topics`;
const ELEPHANT_ROUTE = `${MAIN_ROUTE}/elephants`;
const IMU_READING_ROUTE = `${MAIN_ROUTE}/imuReadings`;

export {
    MAIN_ROUTE,
    TOPIC_ROUTE,
    ELEPHANT_ROUTE,
    IMU_READING_ROUTE,
}