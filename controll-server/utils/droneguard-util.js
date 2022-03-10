const figlet = require('figlet');

/**
* @param {Number} ms miliseconds to sleep 
* @returns {Promise<Object>} resolve the timeout
*/
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/**
* @returns {Object} commandDelays
*/
const commandDelays = () => {
    return {
        command: 500,
        takeoff: 5000,
        land: 5000,
        up: 7000,
        down: 7000,
        left: 5000,
        go: 7000,
        right: 5000,
        forward: 5000,
        back: 5000,
        cw: 5000,
        ccw: 5000,
        flip: 3000,
        speed: 3000,
        'battery?': 500, //0-100
        'speed?': 500, // cm/s
        'time?': 500, // seconds
        'height?': 500 // cm
    }
};

/**
* @param {String} state (raw)
* @returns {Object} state info
*/
const parseState = (state) => {
    return state
        .split(';')
        .map(x => x.split(':'))
        .reduce((data, [key, value]) => {
            data[key] = value;
            return data;
        }, {});
};

/**
* @param {String} error
*/
const handleError = (error) => {
    if (error) {
        console.log('ERROR');
        console.error(error);
    }
};

/**
* @param {String} str to display
*/
const visualPromt = (str = '< DroneGuard / >') => {
    figlet(str, function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
};

exports.sleep = sleep;
exports.commandDelays = commandDelays;
exports.parseState = parseState;
exports.handleError = handleError;
exports.visualPromt = visualPromt;
