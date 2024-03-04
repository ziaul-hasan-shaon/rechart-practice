/* eslint-disable no-unused-vars */
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Textcomponent() {
    return (
        <Box m={5} p={4} borderRadius='lg' boxShadow='lg'>
            <VStack>
                <Text>Welcome back,</Text>
                <Heading>Mark Johnson</Heading>
                <Text>
                    Glad to see you again!
                </Text>
                <Text>
                    Ask me anything.
                </Text>
            </VStack>
        </Box>
    )
}

export default Textcomponent
