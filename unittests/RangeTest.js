import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import {range} from '../src/utils.js';

export default class RangeTest extends Unittest {
    
    setUp() {
	// pass
    }
    tearDown(){
	// pass
    }
    testRangeOk() {

	const actual0 = range(0, 3);
	assertEquals(actual0.length, 3);
	assertEquals(actual0[0], 0);
	assertEquals(actual0[1], 1);
	assertEquals(actual0[2], 2);


	const actual1 = range(0, 3, 2);
	assertEquals(actual1.length, 2);
	assertEquals(actual1[0], 0);
	assertEquals(actual1[1], 2);

	// const actual2 = range(0, 3, -2);
	// assertEquals(actual2.length, 3);
	// assertEquals(actual2[0], 0);
	// assertEquals(actual2[1], -2);
	// assertEquals(actual2[2], -4);

	// const actual3 = range(3, -1, -2);
	// assertEquals(actual3.length, 3);
	// assertEquals(actual3[0], 3);
	// assertEquals(actual3[1], 1);
	// assertEquals(actual3[2], -1);

	const actual4 = range(3, 6);
	assertEquals(actual4.length, 3);
	assertEquals(actual4[0], 3);
	assertEquals(actual4[1], 4);
	assertEquals(actual4[2], 5);
	
	const actual5 = range(3, 6, 2);
	assertEquals(actual5.length, 2);
	assertEquals(actual5[0], 3);
	assertEquals(actual5[1], 5);

    }

}

