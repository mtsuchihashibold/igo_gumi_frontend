import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException, assertIsNotNull, assertIsNull, assertNotRaiseException} from '../src/assert.js';
import {attachCss} from '../src/utils.js';

export default class AttachCssTest extends Unittest {
    
    setUp() {
	// pass
    }

    tearDown(){
	// pass
    }

    test正常系() {
	const divElm = document.createElement('div');
	const style = {
	    backgroundColor: 'red',
	    top: '1px'
	};
	assertNotRaiseException(attachCss, [divElm, style]);
    }

    test正常系BlankStyle() {
	const divElm = document.createElement('div');
	const style = {};
	assertNotRaiseException(attachCss, [divElm, style]);
    }

    test異常系null() {
	const style = {
	    backgroundColor: 'red',
	    top: '1px'
	}
	assertException(attachCss, [null, style],
			TypeError, 'TypeError: Invalid argument: elm is null');
	
    }

    test異常系nullBlankStyle() {
	const style = {};

	assertException(attachCss, [null, style],
			TypeError, 'TypeError: Invalid argument: elm is null');
	
    }

    test異常系NotHtmlElement() {
	const divElm = new Object();
	const style = {
	    backgroundColor: 'red',
	    top: '1px'
	}
	assertException(attachCss, [divElm, style],
			TypeError, 'TypeError: Invalid argument: elm is [object Object]');
    }

    test異常系NotHtmlElementBlankStyle() {
	const divElm = new Object();
	const style = {};
	assertException(attachCss, [divElm, style],
			TypeError, 'TypeError: Invalid argument: elm is [object Object]');
    }
    
}
