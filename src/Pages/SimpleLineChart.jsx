/* eslint-disable no-unused-vars */
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { CartesianGrid, Tooltip, Legend, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts'

function SimpleLineCharts() {
    const data = [
        {
            name: 'Dynametics',
            Previous_Month: 4000,
            This_Month: 5400,
            Active: 4800,
        },
        {
            name: 'Moo',
            Previous_Month: 5400,
            This_Month: 6398,
            Active: 6210,
        },
        {
            name: 'Navidium',
            Previous_Month: 6300,
            This_Month: 9800,
            Active: 7390,
        },
        {
            name: 'Shophify One',
            Previous_Month: 6480,
            This_Month: 4908,
            Active: 5700,
        },
        {
            name: 'Shophify Two',
            Previous_Month: 6890,
            This_Month: 7800,
            Active: 5881,
        },
    ]

    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <Heading my={4} fontSize={24}>MRR Overview</Heading>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart width={700} height={300} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Previous_Month" stroke="#8884d8" />
                    <Line type="monotone" dataKey="This_Month" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Active" stroke="#FF8042" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default SimpleLineCharts


