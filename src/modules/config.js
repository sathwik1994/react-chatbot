import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../modules/LearningOptions/LearningOptions";
import LinkList from "../modules/LinkList/LinkList";
const config = {
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
            widget: "learningOptions",
        }),
    ],

    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Introduction to JS",
                        url:
                            "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
                        id: 1,
                    },
                    {
                        text: "Mozilla JS Guide",
                        url:
                            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                        id: 2,
                    },
                    {
                        text: "Frontend Masters",
                        url: "https://frontendmasters.com",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "interviewPrepLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "JS Interview Prep",
                        url:
                            "https://www.tutorialspoint.com/javascript/index.htm",
                        id: 1,
                    },
                    {
                        text: "HTML Interview Prep",
                        url:
                            "https://www.tutorialspoint.com/html/index.htm",
                        id: 2,
                    },
                    {
                        text: "CSS Interview Prep",
                        url: "https://www.tutorialspoint.com/css/index.htm",
                        id: 3,
                    },
                ],
            },
        },
        {
            widgetName: "securityLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Network Security",
                        url: "https://www.tutorialspoint.com/network_security/index.htm",
                        id: 1,
                    },
                    {
                        text: "Cyber Security",
                        url:"https://www.tutorialspoint.com/fundamentals_of_science_and_technology/cyber_crime_and_cyber_security.htm",
                        id: 2,
                    },
                    {
                        text: "Cloud Computing Security",
                        url: "https://www.tutorialspoint.com/cloud_computing/cloud_computing_security.htm",
                        id: 3,
                    },
                    {
                        text: "IoT Security",
                        url: "https://www.tutorialspoint.com/internet_of_things/internet_of_things_security.htm",
                        id: 4
                    }
                ]
            },
        },
    ],
}

export default config;