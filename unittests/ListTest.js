
import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException, assertNotRaiseException } from '../src/assert.js';
import List from '../src/List.js';

export default class ListTest extends Unittest {
    setUp() {
	this.testee = List;
    }
    tearDown() {
	this.testee = null;
    }
    testListLeftSetListObj正常系() {
	const actual = new this.testee();
	const left = new this.testee();
        assertNotRaiseException(function() {
	    actual.left = left;
	}, []);
    }
    testListRightSetListObj正常系() {
	const actual = new this.testee();
	const right = new this.testee();
        assertNotRaiseException(function() {
	    actual.right = right;
	}, []);
    }
    testListTopSetListObj正常系() {
	const actual = new this.testee();
	const top = new this.testee();
        assertNotRaiseException(function() {
	    actual.top = top;
	}, []);
    }
    testListBottomSetListObj正常系() {
	const actual = new this.testee();
	const bottom = new this.testee();
        assertNotRaiseException(function() {
	    actual.bottom = bottom;
	}, []);
    }
// export function assertException(fn, args, expectcls, expectedmsg) {
    testListLeftSetObj異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.left = {};
	}, [], TypeError, 'Invalid argument');
    }
    testListLeftSetNull異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.left = null;
	}, [], TypeError, 'Invalid argument');
    }
    testListLeftSetUndefined異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.left = undefined;
	}, [], TypeError, 'Invalid argument');
    }

    testListRightSetObj異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.right = {};
	}, [], TypeError, 'Invalid argument');
    }
    testListRightSetNull異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.right = null;
	}, [], TypeError, 'Invalid argument');
    }
    testListRightSetUndefined異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.right = undefined;
	}, [], TypeError, 'Invalid argument');
    }

    testListTopSetObj異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.top = {};
	}, [], TypeError, 'Invalid argument');
    }
    testListTopSetNull異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.top = null;
	}, [], TypeError, 'Invalid argument');
    }
    testListTopSetUndefined異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.top = undefined;
	}, [], TypeError, 'Invalid argument');
    }

    testListBottomSetObj異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.bottom = {};
	}, [], TypeError, 'Invalid argument');
    }
    testListBottomSetNull異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.bottom = null;
	}, [], TypeError, 'Invalid argument');
    }
    testListBottomSetUndefined異常系() {
	const actual = new this.testee();
        assertException(function() {
	    actual.bottom = undefined;
	}, [], TypeError, 'Invalid argument');
    }

}
