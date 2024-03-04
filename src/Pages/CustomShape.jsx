/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function CustomShape() {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const data = [
        {
            name: 'Jan',
            Previous_Month: 4000,
            This_Month: 2400,
            Active: 2400,
        },
        {
            name: 'Feb',
            Previous_Month: 3000,
            This_Month: 1398,
            Active: 2210,
        },
        {
            name: 'Mar',
            Previous_Month: 2000,
            This_Month: 9800,
            Active: 2290,
        },
        {
            name: 'Apr',
            Previous_Month: 2780,
            This_Month: 3908,
            Active: 2000,
        },
        {
            name: 'May',
            Previous_Month: 1890,
            This_Month: 4800,
            Active: 2181,
        },
        {
            name: 'Jun',
            Previous_Month: 2390,
            This_Month: 3800,
            Active: 2500,
        },
        {
            name: 'Jul',
            Previous_Month: 3490,
            This_Month: 4300,
            Active: 2100,
        },
        {
            name: 'Aug',
            Previous_Month: 4300,
            This_Month: 5300,
            Active: 2000,
        },
        {
            name: 'Sep',
            Previous_Month: 5300,
            This_Month: 7300,
            Active: 3100,
        },
        {
            name: 'Oct',
            Previous_Month: 7300,
            This_Month: 6600,
            Active: 1800,
        },
        {
            name: 'Nov',
            Previous_Month: 6600,
            This_Month: 7000,
            Active: 2500,
        },
        {
            name: 'Dec',
            Previous_Month: 7000,
            This_Month: 8100,
            Active: 3500,
        },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <Heading my={4} fontSize={24}>Users Overview</Heading>
            <ResponsiveContainer width='100%' height={300}>
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="Previous_Month" fill="#00C49F" shape={<TriangleBar />} >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[1]} />
                        ))}
                    </Bar>
                    <Bar dataKey="This_Month" fill="#FF8042" shape={<TriangleBar />} >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[3]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default CustomShape


// label={{ position: 'top' }}