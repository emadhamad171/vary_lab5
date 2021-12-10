import React from 'react'
export const userArray = [
    {
        owner: "user",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "user",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "user",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "user",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "user",
        type: 'ordinary',
        value: 4
    },
]
export const botArray = [
    {
        owner: "bot",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "bot",
        type: 'ordinary',
        value: 4
    },
    {
        owner: "bot",
        type: 'ordinary',
        value: 1
    },
    {
        owner: "bot",
        type: 'ordinary',
        value: 1
    },
    {
        owner: "bot",
        type: 'ordinary',
        value: 4
    },

]
export const arrCollectHoles = [
    {
        owner: "bot",
        type: 'collect',
        value: 0
    },
    {
        owner: "user",
        type: 'collect',
        value: 0
    }
]
const BoardHoleProviderContext = React.createContext([])

export default BoardHoleProviderContext
