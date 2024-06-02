#!/usr/bin/env node
import inquirer from 'inquirer';
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Welcome to T.N.A Quiz Application\n");
    await sleep();
    title.stop();
}
await welcome();
const questions = [
    {
        type: 'list',
        name: 'question1',
        message: 'What is the capital of Pakistan?',
        choices: [
            'Islamabad',
            'Karachi',
            'Lahore',
            'Quetta'
        ]
    },
    {
        type: 'list',
        name: 'question2',
        message: 'What is the currency of Pakistan?',
        choices: [
            'PKR',
            'Euro',
            'US Dollar',
            'British Pound'
        ]
    },
    {
        type: 'list',
        name: 'question3',
        message: 'What is the highest mountain peak in the world?',
        choices: [
            'Mount Everest',
            'K2',
            'Kangchenjunga',
            'Lhotse'
        ]
    },
    {
        type: 'list',
        name: 'question4',
        message: 'What is the name of the longest river located in Pakistan?',
        choices: [
            'Indus',
            'Tigris',
            'Euphrates',
            'Ganges'
        ]
    },
    {
        type: 'list',
        name: 'question5',
        message: 'Who wrote the National Anthem of Pakistan?',
        choices: [
            'Allama Muhammad Iqbal',
            'Faiz Ahmed Faiz',
            'Quaid-e-Azam Mohammed Ali Jinnah',
            'Hafeez Jalandhari'
        ]
    },
    {
        type: 'list',
        name: 'question6',
        message: 'When did Pakistan gain independence from the British?',
        choices: [
            '14 August 1947',
            '15 August 1947',
            '16 August 1947',
            '17 August 1947'
        ]
    },
    {
        type: 'list',
        name: 'question7',
        message: 'What is the name of the first nuclear power plant in Pakistan?',
        choices: [
            'Chashma Nuclear Power Complex',
            'Neelum-Jhelum Hydroelectric Plant',
            'Karachi Nuclear Power Plant (KANUPP)',
            'Tarbela Dam'
        ]
    },
    {
        type: 'list',
        name: 'question8',
        message: 'Which of the following is the national animal of Pakistan?',
        choices: [
            'Tiger',
            'Elephant',
            'Markhor',
            'Bengal Fox'
        ]
    },
    {
        type: 'list',
        name: 'question9',
        message: 'When did Pakistan become a nuclear power?',
        choices: [
            '1989',
            '1998',
            '2001',
            '2005'
        ]
    },
    {
        type: 'list',
        name: 'question10',
        message: 'Who developed the Nuclear Atom Bomb for Pakistan?',
        choices: [
            'Abdus Salam',
            'Abdul Qadeer Khan',
            'Pervez Hoodbhoy',
            'Ishfaq Ahmed'
        ]
    }
];
const answers = {
    question1: 'Islamabad',
    question2: 'PKR',
    question3: 'Mount Everest',
    question4: 'Indus',
    question5: 'Hafeez Jalandhari',
    question6: '14 August 1947',
    question7: 'Karachi Nuclear Power Plant (KANUPP)',
    question8: 'Markhor',
    question9: '1998',
    question10: 'Abdul Qadeer Khan',
};
let score = 0;
inquirer.prompt(questions).then(user_answers => {
    Object.keys(user_answers).forEach(question => {
        if (user_answers[question] === answers[question]) {
            score++;
        }
    });
    console.log(`You got ${score} out of ${questions.length} questions correct!`);
});
