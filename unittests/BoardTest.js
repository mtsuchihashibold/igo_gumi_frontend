
import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException, assertIsNotNull, assertIsNull, assertNotRaiseException} from '../src/assert.js';
import Board from '../src/Board.js';
import IshiFactory from '../src/IshiFactory.js';

export default class BoardTest extends Unittest {
    setUp() {
	this.testee = Board;
    }
    tearDown() {
	this.testee = null;
    }

    testGetInstance正常系() {
	const actual = this.testee.getInstance();
	assertIsNotNull(actual);
	assertTrue( typeof actual.setIshi == 'function' );
	assertTrue( typeof actual.getIshi == 'function' );
	assertTrue( typeof actual.forEach == 'function' );
    }

    testSetIshi正常系() {
	const actual = this.testee.getInstance();
	const ishi = IshiFactory.createBlack(0, 0);
	assertNotRaiseException(actual.setIshi, [ishi]);
    }

    testGetIshi正常系() {
	const actual = this.testee.getInstance();
	const ishi = IshiFactory.createBlack(0, 0);
	actual.setIshi(ishi);
	assertNotRaiseException(actual.getIshi, [ishi.position.getRow(),
						 ishi.position.getCol()]);
    }

    testClearIshi正常系() {
	const actual = this.testee.getInstance();
	const ishi = IshiFactory.createBlack(0, 0);
	actual.setIshi(ishi);
	assertNotRaiseException(actual.clearIshi, [ishi.position.getRow(),
						   ishi.position.getCol()]);
    }

    testForEach正常系() {
	const actual = this.testee.getInstance();
	const black00 = IshiFactory.createBlack(0, 0);
	const black01 = IshiFactory.createBlack(0, 1);
	const black10 = IshiFactory.createBlack(1, 0);
	actual.setIshi(black00);
	actual.setIshi(black01);
	actual.setIshi(black10);
	const mock = function(_ishi) {
	    if ( _ishi === null ) return;
	    if ( black00.equals(_ishi) ) return;
	    if ( black01.equals(_ishi) ) return;
	    if ( black10.equals(_ishi) ) return;
	    throw new AssertionError('not same ishi');
	}

	assertNotRaiseException(actual.forEach, [mock]);
    }
}
