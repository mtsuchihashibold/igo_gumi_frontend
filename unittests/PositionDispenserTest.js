
import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import PositionDispenser from '../src/PositionDispenser.js';

export default class PositionDispenserTest extends Unittest {
    setUp() {
	this.testee = PositionDispenser;
    }
    tearDown() {
	this.testee = null;
    }
    testCreatePosition正常系() {
	const actual0 = this.testee.createPosition(0, 0);
	assertEquals(actual0.getRow(), 0);
	assertEquals(actual0.getCol(), 0);

	const actual1 = this.testee.createPosition(1, 0);
	assertEquals(actual1.getRow(), 1);
	assertEquals(actual1.getCol(), 0);

	const actual2 = this.testee.createPosition(0, 1);
	assertEquals(actual2.getRow(), 0);
	assertEquals(actual2.getCol(), 1);

	const actual3 = this.testee.createPosition(1, 1);
	assertEquals(actual3.getRow(), 1);
	assertEquals(actual3.getCol(), 1);

	const actual4 = this.testee.createPosition(18, 18);
	assertEquals(actual4.getRow(), 18);
	assertEquals(actual4.getCol(), 18);

	const actual5 = this.testee.createPosition(18, 17);
	assertEquals(actual5.getRow(), 18);
	assertEquals(actual5.getCol(), 17);

	const actual6 = this.testee.createPosition(17, 18);
	assertEquals(actual6.getRow(), 17);
	assertEquals(actual6.getCol(), 18);

	const actual7 = this.testee.createPosition(17, 17);
	assertEquals(actual7.getRow(), 17);
	assertEquals(actual7.getCol(), 17);

    }
    testCreatePosition異常系() {
	assertException(this.testee.createPosition,
			[-1, -1], AssertionError, '');
	assertException(this.testee.createPosition,
			[0, -1], AssertionError, '');
	assertException(this.testee.createPosition,
			[-1, 0], AssertionError, '');

	assertException(this.testee.createPosition,
			[19, 19], AssertionError, '');
	assertException(this.testee.createPosition,
			[18, 19], AssertionError, '');
	assertException(this.testee.createPosition,
			[19, 18], AssertionError, '');

	assertException(this.testee.createPosition,
			['a', 'a'], AssertionError, '');
	assertException(this.testee.createPosition,
			[0, 'a'], AssertionError, '');
	assertException(this.testee.createPosition,
			['a', 0], AssertionError, '');
    }
    testGetMaxRow() {
	assertEquals(this.testee.getMaxRow(), 19);
    }
    testGetMaxCol() {
	assertEquals(this.testee.getMaxCol(), 19);
    }
    testGetIndex正常系() {
	assertEquals(this.testee.getIndex(0, 0), 0);
	assertEquals(this.testee.getIndex(0, 1), 1);
	assertEquals(this.testee.getIndex(1, 0), 19);
	assertEquals(this.testee.getIndex(1, 1), 20);

	assertEquals(this.testee.getIndex(17, 17), 340);
	assertEquals(this.testee.getIndex(17, 18), 341);
	assertEquals(this.testee.getIndex(18, 17), 359);
	assertEquals(this.testee.getIndex(18, 18), 360);
    }
    testGetIndex異常系() {
	assertException(this.testee.getIndex,
			[-1, -1], AssertionError, '');
	assertException(this.testee.getIndex,
			[0, -1], AssertionError, '');
	assertException(this.testee.getIndex,
			[-1, 0], AssertionError, '');

	assertException(this.testee.getIndex,
			[19, 19], AssertionError, '');
	assertException(this.testee.getIndex,
			[18, 19], AssertionError, '');
	assertException(this.testee.getIndex,
			[19, 18], AssertionError, '');
    }

    testGetPositionByIndex正常系() {
	const pos0 = this.testee.createPosition(0, 0);
	assertStrictEquals(this.testee.getPositionByIndex(0),
			   pos0);

	const pos1 = this.testee.createPosition(0, 1);
	assertStrictEquals(this.testee.getPositionByIndex(1),
			   pos1);

	const pos2 = this.testee.createPosition(1, 0);
	assertStrictEquals(this.testee.getPositionByIndex(19),
			   pos2);

	const pos3 = this.testee.createPosition(1, 1);
	assertStrictEquals(this.testee.getPositionByIndex(20),
			   pos3);


	const pos4 = this.testee.createPosition(17, 17);
	assertStrictEquals(this.testee.getPositionByIndex(340),
			   pos4);

	const pos5 = this.testee.createPosition(17, 18);
	assertStrictEquals(this.testee.getPositionByIndex(341),
			   pos5);

	const pos6 = this.testee.createPosition(18, 17);
	assertStrictEquals(this.testee.getPositionByIndex(359),
			   pos6);

	const pos7 = this.testee.createPosition(18, 18);
	assertStrictEquals(this.testee.getPositionByIndex(360),
			   pos7);
    }

    testEqualsTrue() {
	const pos0 = this.testee.createPosition(0, 0);
	const pos1 = this.testee.createPosition(0, 0);
	assertTrue(pos0.equals(pos1));

	const pos2 = this.testee.createPosition(18, 18);
	const pos3 = this.testee.createPosition(18, 18);
	assertTrue(pos2.equals(pos3));

	const pos4 = this.testee.createPosition(8, 9);
	const pos5 = this.testee.createPosition(8, 9);
	assertTrue(pos4.equals(pos5));
    }
    testEqualsFalse() {
	const pos0 = this.testee.createPosition(0, 0);
	const pos1 = this.testee.createPosition(1, 0);
	assertFalse(pos0.equals(pos1));

	const pos2 = this.testee.createPosition(18, 17);
	const pos3 = this.testee.createPosition(18, 18);
	assertFalse(pos2.equals(pos3));

	const pos4 = this.testee.createPosition(8, 9);
	const pos5 = this.testee.createPosition(9, 8);
	assertFalse(pos4.equals(pos5));
//	throw new AssertionError();
    }
}
