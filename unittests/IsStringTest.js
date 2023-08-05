import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import {isString} from '../src/utils.js';


export default class IsStringTest extends Unittest {
    setUp() {
	this.testee = isString;
    }
    tearDown() {
	this.testee = null;
    }
    test文字列True1() {
	assertTrue(this.testee("hoge"));
    }
    test文字列True2() {
	assertTrue(this.testee('hoge'));
    }
    test文字列True3() {
	assertTrue(this.testee(new String("hoge")));
    }
    test文字列True4() {
	assertTrue(this.testee((new String("hoge")).toString()));
    }
    test文字列False1() {
	assertFalse(this.testee(1));
    }
    test文字列False2() {
	assertFalse(this.testee(undefined));
    }
    test文字列False3() {
	assertFalse(this.testee(NaN));
    }
    test文字列False4() {
	assertFalse(this.testee(null));
    }
    test文字列False5() {
	assertFalse(this.testee(true));
    }
    test文字列False6() {
	assertFalse(this.testee(new Object()));
    }
    test文字列False7() {
	assertFalse(this.testee({}));
    }
    test文字列False8() {
	const fn = function() { }
	assertFalse(this.testee(fn));
    }
}
