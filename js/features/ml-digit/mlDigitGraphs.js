import React from 'react'
import classNames from 'classnames'
import { HorizontalBar, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'

// Probabilities -> chart.js data
export const probabilitiesToChartData = (labelProbabilities, invert) => {
    const data = (labelProbabilities ?? Array.from({ length: 10 }, () => 0)).map(i => invert ? -i : i);
    const highestIndex = labelProbabilities ? data.reduce((iMax, x, i, arr) => (invert ? x < arr[iMax] : x > arr[iMax]) ? i : iMax, 0) : -1;
    const labels = Array.from({ length: 10 }, (_, i) => (i === highestIndex ? "*" : "  ") + i);
    return ({
        labels: labels,
        datasets: [
            {
                label: 'Probability',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                data: data,
            }
        ]
    });
};

const ErrorOverlay = ({ show }) =>
    <div className={classNames('error-overlay', show ? "" : "no-error")} >
        <div><FontAwesomeIcon icon={faExclamationTriangle} /> Oops!</div>
        <br />
        Something went wrong.
        <br />
        To keep things free, this app is run using very small resource limits, so it may have fallen over.
        <br />
        Please come back later.
    </div>;

export const DesktopBarGraph = ({ error, height, width, data }) =>
    <div className="d-flex flex-wrap bar-container desktop-bar">
        <ErrorOverlay show={error} />
        <HorizontalBar
            responsive={false}
            height={height}
            width={width}
            options={{
                maintainAspectRatio: false,
                responsive: false,
                scales: {
                    xAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 1
                        }
                    }]
                }
            }}
            data={data}
        />
    </div>;

export const MobileBarGraph = ({ error, width, data }) =>
    <div className="d-flex flex-wrap bar-container bar" >
        <ErrorOverlay show={error} />
        <Bar
            responsive={false}
            height={180}
            width={width}
            options={{
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                responsive: false,
                scales: {
                    yAxes: [{
                        display: false,
                        position: 'top',
                        ticks: {
                            callback: value => (0 - value),
                            beginAtZero: true,
                            min: 0,
                            max: -1
                        }
                    }]
                }
            }}
            data={data}
        />
    </div >