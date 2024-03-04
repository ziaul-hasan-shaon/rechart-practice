/* eslint-disable no-unused-vars */
import { Box, CircularProgress, CircularProgressLabel, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Progess1() {
    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <Heading>Satisfaction Rate</Heading>
            <Text>From all Projects</Text>
            <CircularProgress value={59} size='100px' thickness='20px' color='green.400'>
                <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
        </Box>
    )
}

export default Progess1
