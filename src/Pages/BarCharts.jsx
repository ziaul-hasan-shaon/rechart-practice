/* eslint-disable no-unused-vars */
import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function BarCharts() {
    const data = [
        {
            "name": "Jan",
            "Mobile Apps": 4000,
            "Website": 2400
        },
        {
            "name": "Feb",
            "Mobile Apps": 3000,
            "Website": 1398
        },
        {
            "name": "Mar",
            "Mobile Apps": 2000,
            "Website": 9800
        },
        {
            "name": "Apr",
            "Mobile Apps": 2780,
            "Website": 3908
        },
        {
            "name": "May",
            "Mobile Apps": 1890,
            "Website": 4800
        },
        {
            "name": "Jun",
            "Mobile Apps": 2390,
            "Website": 3800
        },
        {
            "name": "Jul",
            "Mobile Apps": 3390,
            "Website": 4800
        },
        {
            "name": "Aug",
            "Mobile Apps": 6690,
            "Website": 4900
        },
        {
            "name": "Sep",
            "Mobile Apps": 5390,
            "Website": 7800
        },
        {
            "name": "Oct",
            "Mobile Apps": 4390,
            "Website": 6800
        },
        {
            "name": "Nov",
            "Mobile Apps": 5590,
            "Website": 6800
        },
        {
            "name": "Dec",
            "Mobile Apps": 6690,
            "Website": 9300
        }
    ]
    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <Heading my={4} fontSize={24}>Apps install Overview</Heading>
            <ResponsiveContainer width='100%' height={300}>
                <BarChart width={700} height={300} data={data}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mobile Apps" fill="#8884d8" />
                    <Bar dataKey="Website" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}

export default BarCharts
