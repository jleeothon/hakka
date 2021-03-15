#!/usr/bin/env node

'use strict';

const {readFileSync} = require('fs');

const Ajv = require('ajv').default;
const yaml = require('js-yaml');

const schema = require('../word-list-schema');

const ajv = new Ajv({allErrors: true, allowUnionTypes: true, verbose: true});

const validate = ajv.compile(schema);

const data = yaml.safeLoad(readFileSync(0, 'utf-8'));

const valid = validate(data);
if (!valid) {
	validate.errors.forEach((error) => console.error(error.data, error.message));
	process.exit(1);
}

console.error('✓ Word list OK');
