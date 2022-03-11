import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        {
            text: "Javascript",
            handler: props.actionProvider.handleJavascriptList,
            id: 1,
        },
        { text: "Data visualization", handler: () => { window.open('https://www.tutorialspoint.com/business_writing_skills/data_visualization.htm', '_blank').focus(); }, id: 2 },
        { text: "APIs", handler: () => { window.open('https://www.tutorialspoint.com/application-programming-interface-api', '_blank') }, id: 3 },
        { text: "Security", handler: props.actionProvider.handleSecurityTutorialsLinks, id: 4 },
        { text: "Interview prep", handler: props.actionProvider.handleInterviewPrep, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;