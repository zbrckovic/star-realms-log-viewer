const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse/sync');

const cardsCsvPath = path.resolve(__dirname, '../../resources/cards.csv')
const content = fs.readFileSync(cardsCsvPath, 'utf8')

const records = csvParse.parse(content, {
    columns: true,
    skip_empty_lines: true
});

const convertNameToUppercase = (text) => {
    return text.replaceAll(' ', '_').toUpperCase()
}

const cardNames = records.map(record => `${convertNameToUppercase(record.Name)}: \'${record.Name}\';`).join('\n')

const cardNamesFile = path.resolve(__dirname, '../../resources/card-names.txt')

fs.writeFile(cardNamesFile, cardNames, err => {
    if (err) {
        return console.log(err);
    }
});

console.log(cardNames);
