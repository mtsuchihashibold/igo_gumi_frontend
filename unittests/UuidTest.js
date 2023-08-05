import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import {uuid} from '../src/utils.js';

export default class UuidTest extends Unittest {
    setUp() {
	this.testee = uuid;
    }
    tearDown() {
	this.testee = null;
    }
    test正常() {
	const actual = this.testee();
	const mo = actual.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
	assertTrue(!!mo);
	
    }
}
