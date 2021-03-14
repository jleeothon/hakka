const YAML = require('yaml');
const {readFileSync} = require('fs');

const mapsort = require('mapsort');

const entries = YAML.parse(readFileSync(0, 'utf-8'));


const prettyEntries = entries.map(entry => {
    const {hanzi, reading, meaning, tags, ...rest} = entry;
    if (tags && tags instanceof Array) {
        tags.sort((a, b) => a > b);
    }
    if (rest && rest instanceof Array) {
        rest.sort((a, b) => a > b);
    }
    return {hanzi, reading, meaning, tags, ...rest};
});

const sortedPrettyEntries = mapsort(
	prettyEntries,
	(entry) => entry.reading,
	(reading1, reading2) => reading1.localeCompare(reading2)
);

console.log(YAML.stringify(sortedPrettyEntries));
