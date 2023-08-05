/*
  TITLE: assert.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/08
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

export class AssertionError extends Error {
    constructor(...params) {
	super(...params);

	if ( Error.captureStackTrace ) {
	    Error.captureStackTrace(this, AssertionError);
	}
	
	this.name = 'AssertionError';
    }

}

export function assertEquals(actual, expect) {
    if ( actual == expect ) return;
    throw new AssertionError(`${actual} do not equals ${expected}`);
}

export function assertStrictEquals(actual, expect) {
    if ( actual === expect ) return;
    throw new AssertionError(`${actual} do not equivalent ${expected}`);
}

export function assertNotEquals(actual, expect) {
    if ( actual != expect ) return;
    throw new AssertionError(`${actual} equals ${expected}`);
}

export function assertMatch(actual, pattern) {
    if ( !(typeof actual === 'string' || actual instanceof String) ) {
	throw new AssertionError(`${actual} is not String`);
    }
    if ( !(typeof pattern === 'string' || actual instanceof String) ) {
	throw new AssertionError(`${pattern} is not String`);
    }
    return !!actual.match(new RegExp(pattern));
}

export function assertTrue(actual) {
    if ( actual ) return;
    throw new AssertionError(`${actual} is not true`);
}

export function assertFalse(actual) {
    if ( !actual ) return;
    throw new AssertionError(`${actual} is not false`);
}

export function assertIsUndefined(actual) {
    if ( actual === undefined ) return;
    throw new AssertionError(`${actual} is not undefined`);
}

export function assertIsNotUndefined(actual) {
    if ( actual !== undefined ) return;
    throw new AssertionError(`${actual} is undefined`);
}

export function assertIsNull(actual) {
    if ( actual === null) return;
    throw new AssertionError(`${actual} is not Null`);
}

export function assertIsNotNull(actual) {
    if ( actual !== null) return;
    throw new AssertionError(`${actual} is Null`);
}

// Todo: support keyword-arguments
// Todo: rename assertException -> assertRaiseException
export function assertException(fn, args, expectcls, expectedmsg) {

    try {
	fn(...args);
	throw new AssertionError(`Exception not raise`);
    } catch(e) {
	if ( e instanceof expectcls ) {
	    // pass
	} else {
	    throw new AssertionError(`actual: ${e.constructor.name} is not expected: ${expectcls.name}`);
	}

	if ( expectedmsg ) {
	    if ( e.toString() == expectedmsg ) {
		// pass
	    } else {
		throw new AssertionError(
		    `Error message not expected: actual: ${e.toString()}, expected-msg: ${expectedmsg}`);
	    }
	}
    }
}

// Todo: support keyword-arguments
export function assertNotRaiseException(fn, args) {
    try {
	fn(...args);
    } catch(e) {
	throw new AssertionError(`Exception raise`);
    }
}

