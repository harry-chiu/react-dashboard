import React from 'react';
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts';

const data = [
    {
        name: 'Oct 02',
        followers: 1579,
    },
    {
        name: 'Oct 05',
        followers: 3125,
    },
    {
        name: 'Oct 09',
        followers: 2532,
    },
    {
        name: 'Oct 13',
        followers: 4301,
    },
    {
        name: 'Oct 17',
        followers: 2130,
    },
    {
        name: 'Oct 24',
        followers: 4536,
    },
    {
        name: 'Oct 31',
        followers: 5987,
    },
];

// X軸設定
const xAxisConfig = {
    axisLine: false,
    tickLine: false,
    padding: {
        left: 24,
    },
};

// Y軸設定
const yAxisConfig = {
    axisLine: false,
    tickLine: false,
};

const LineChartWrapper = () => {
    return (
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" {...xAxisConfig} />
            <YAxis {...yAxisConfig} />
            <Tooltip />
            <Line type="monotone" dataKey="followers" stroke="#8884d8" />
        </LineChart>
    );
};

export default LineChartWrapper;