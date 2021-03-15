"use strict";

const StringUtils = require('./dist/StringUtils.js');
const RandomUtils = require('./dist/RandomUtils');
const UuidUtils = require('./dist/UuidUtils.js');

Object.defineProperty(exports, "StringUtils", {
	enumerable: true,
	get: function() {
		return StringUtils;
	}
});

Object.defineProperty(exports, "RandomUtils", {
	enumerable: true,
	get: function() {
		return RandomUtils;
	}
});

Object.defineProperty(exports, "UuidUtils", {
	enumerable: true,
	get: function() {
		return UuidUtils;
	}
});