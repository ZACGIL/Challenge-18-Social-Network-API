const names = [
    'aran',
    'Aaren',
    'aarez',
    'aarman',
    'aaron',
    'aaron-james',
    'aarron',
    'aaryan',
    'aaryn',
    'aayan',
    'aazaan',
    'abaan',
    'abbas',
    'abdallah',
    'abdalroof',
    'abdihakim',
    'abdirahman',
    'abdisalam',
    'abdul',
    'abdul-aziz',
    'abdulbasir',
    'abdulkadir',
    'abdulkarem',
    'smith',
    'jones',
    'coollastname',
    'enter_name_here',
    'ze',
    'zechariah',
    'zeek',
    'zeeshan',
    'zeid',
    'zein',
    'zen',
    'zendel',
    'zenith',
    'zennon',
    'zeph',
    'zerah',
    'zhen',
    'zhi',
    'zhong',
    'zhuo',
    'zi',
    'zidane',
    'zijie',
    'zinedine',
    'zion',
    'zishan',
    'ziya',
    'ziyaan',
    'zohaib',
    'zohair',
    'zoubaeir',
    'zubair',
    'zubayr',
    'zuriel',
    'xander',
    'jared',
    'grace',
    'alex',
    'mark',
    'tamar',
    'farish',
    'sarah',
    'nathaniel',
    'parker',
    'peter'
];

const emails = [
    'yahoo',
    'gmail',
    'hotmail',
    'outlook',
    'aol',
    'mail2world'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomEmail = () =>
    `@${getRandomArrItem(emails)}.com`

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail };