const YAML = require('yaml');
const {readFileSync} = require('fs');

const mapSort = require('mapsort');
const filterObj = require('filter-obj');

const entries = YAML.parse(readFileSync(0, 'utf-8'));

const prettyEntries = entries.map(entry => {
    const {hanzi, reading, meaning, tags, ...rest} = entry;
    if (tags && tags instanceof Array) {
        tags.sort((a, b) => a > b);
    }
    if (rest && rest instanceof Array) {
        rest.sort((a, b) => a > b);
    }

    return filterObj({hanzi, reading, meaning, tags, ...rest}, (k, v) => v);
});

const sortedPrettyEntries = mapSort(
	prettyEntries,
	(entry) => entry.reading,
	(reading1, reading2) => reading1.localeCompare(reading2)
);

console.log(YAML.stringify(sortedPrettyEntries));
