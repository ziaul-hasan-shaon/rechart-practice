/* eslint-disable no-unused-vars */
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function CompositeCharts() {
    const data = [
        {
            name: 'Dynametics',
            Previous_Month: 4000,
            This_Month: 5400,
            Active: 2800,
        },
        {
            name: 'Moo',
            Previous_Month: 3000,
            This_Month: 4398,
            Active: 2210,
        },
        {
            name: 'Navidium',
            Previous_Month: 5000,
            This_Month: 9800,
            Active: 3390,
        },
        {
            name: 'Shophify One',
            Previous_Month: 3580,
            This_Month: 4908,
            Active: 4000,
        },
        {
            name: 'Shophify Two',
            Previous_Month: 2890,
            This_Month: 4800,
            Active: 2881,
        },
    ]
    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <Heading my={4} fontSize={24}>Apps Vs Users Overview</Heading>
            <ResponsiveContainer width='100%' height={300}>
                <ComposedChart width={700} height={300} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <CartesianGrid stroke="#f5f5f5" /> */}
                    <Area type="monotone" dataKey="Active" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="This_Month" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="Previous_Month" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default CompositeCharts
