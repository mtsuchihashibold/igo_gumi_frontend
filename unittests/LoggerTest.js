
import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertMatch, assertTrue, assertFalse, assertException} from '../src/assert.js';
import Logger from '../src/Logger.js';

export default class LoggerTest extends Unittest {
    setUp() {
	this.instance = new Logger(true);
	this.TIMESTAMP_PATTERN = "20\\d\\d/[0-1][0-9]/[0-3][0-9] [0-2][0-9]:[0-5][0-9]:[0-5][0-9].\\d{3} ";
    }
    tearDown() {
	this.instance = null;
    }
    testDebug() {
	let actual = '';
	this.instance.setPrinter((msg) => {
	    actual = msg;
	});
	this.instance.debug('hoge');
	const patn = this.TIMESTAMP_PATTERN + "DEBUG - hoge";
	assertMatch(actual, patn);
    }
    testInfo() {
	let actual = '';
	this.instance.setPrinter((msg) => {
	    actual = msg;
	});
	this.instance.info('hoge');
	const patn = this.TIMESTAMP_PATTERN + "INFO - hoge";
	assertMatch(actual, patn);
    }
    testWarn() {
	let actual = '';
	this.instance.setPrinter((msg) => {
	    actual = msg;
	});
	this.instance.warn('hoge');
	const patn = this.TIMESTAMP_PATTERN + "WARN - hoge";
	assertMatch(actual, patn);
    }
    testError() {
	let actual = '';
	this.instance.setPrinter((msg) => {
	    actual = msg;
	});
	this.instance.error('hoge');
	const patn = this.TIMESTAMP_PATTERN + "ERROR - hoge";
	assertMatch(actual, patn);
    }
}
