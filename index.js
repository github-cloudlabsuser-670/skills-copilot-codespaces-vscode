import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const sentence = "Hello, world!";
const reversedSentence = sentence.split('').reverse().join('');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);

data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
        console.log(person.age);
    });
});

const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 40 },
    ],
];

data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
    });
});