
import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import IshiFactory from '../src/IshiFactory.js';


export default class IshiFactoryTest extends Unittest {
    setUp() {
    }
    tearDown() {
    }
    testCreateInstance成功() {
	// check that do not raise Exception.
	IshiFactory.createBlack(1, 1);

	// check that do not raise Exception.
	IshiFactory.createWhite(1, 1);

	// check that do not raise Exception.
	IshiFactory.createGray(1, 1);
    }

    testIsSameType同色() {
	// 黒と黒
	const actual1 = IshiFactory.createBlack(0, 1);
	const actual2 = IshiFactory.createBlack(1, 0);
	assertTrue(actual1.isSameType(actual2));

	// 白と白
	const actual3 = IshiFactory.createWhite(0, 1);
	const actual4 = IshiFactory.createWhite(1, 0);
	assertTrue(actual3.isSameType(actual4));

	// 灰色と灰色
	const actual5 = IshiFactory.createGray(0, 1);
	const actual6 = IshiFactory.createGray(1, 0);
	assertTrue(actual5.isSameType(actual6));

	// 黒と灰色
	const actual7 = IshiFactory.createBlack(0, 1);
	const actual8 = IshiFactory.createGray(1, 0);
	assertTrue(actual7.isSameType(actual8));

	// 白と灰色
	const actual9 = IshiFactory.createWhite(0, 1);
	const actual10 = IshiFactory.createGray(1, 0);
	assertTrue(actual9.isSameType(actual10));
    }

    testIsSameType異色() {
	// 黒と白
	const actual1 = IshiFactory.createBlack(0, 1);
	const actual2 = IshiFactory.createWhite(1, 0);
	assertFalse(actual1.isSameType(actual2));

	// 黒と白
	const actual3 = IshiFactory.createWhite(0, 1);
	const actual4 = IshiFactory.createBlack(1, 0);
	assertFalse(actual3.isSameType(actual4));
    }

    testIsSameType異常() {

	const actualBlack = IshiFactory.createBlack(0, 1);
	assertFalse(actualBlack.isSameType(undefined));
	assertFalse(actualBlack.isSameType(null));
	assertFalse(actualBlack.isSameType(NaN));
	assertFalse(actualBlack.isSameType(1));
	assertFalse(actualBlack.isSameType({}));
	assertFalse(actualBlack.isSameType([]));
	assertFalse(actualBlack.isSameType(''));

	const actualWhite = IshiFactory.createWhite(0, 1);
	assertFalse(actualWhite.isSameType(undefined));
	assertFalse(actualWhite.isSameType(null));
	assertFalse(actualWhite.isSameType(NaN));
	assertFalse(actualWhite.isSameType(1));
	assertFalse(actualWhite.isSameType({}));
	assertFalse(actualWhite.isSameType([]));
	assertFalse(actualWhite.isSameType(''));
    }

    testEqualsTrue() {
	const actual1 = IshiFactory.createBlack(0, 0);
	const actual2 = IshiFactory.createBlack(0, 0);
	assertTrue(actual1.equals(actual2));

	const actual3 = IshiFactory.createWhite(18, 18);
	const actual4 = IshiFactory.createWhite(18, 18);
	assertTrue(actual3.equals(actual4));

	const actual5 = IshiFactory.createGray(18, 0);
	const actual6 = IshiFactory.createGray(18, 0);
	assertTrue(actual5.equals(actual6));
    }

    testEqualsFalse() {
	const actual1 = IshiFactory.createBlack(0, 0);
	const actual2 = IshiFactory.createBlack(0, 1);
	assertFalse(actual1.equals(actual2));

	const actual3 = IshiFactory.createBlack(0, 0);
	const actual4 = IshiFactory.createWhite(0, 0);
	assertFalse(actual3.equals(actual4));

	const actual5 = IshiFactory.createWhite(0, 0);
	const actual6 = IshiFactory.createWhite(0, 1);
	assertFalse(actual5.equals(actual6));

	const actual7 = IshiFactory.createWhite(0, 0);
	const actual8 = IshiFactory.createBlack(0, 0);
	assertFalse(actual7.equals(actual8));

	const actual9 = IshiFactory.createGray(0, 0);
	const actual10 = IshiFactory.createGray(0, 1);
	assertFalse(actual9.equals(actual10));
    }

    testBlackIshiGetColor() {
	const actual = IshiFactory.createBlack(0, 0);
	assertTrue(actual.color, 'black');
    }

    testWhiteIshiGetColor() {
	const actual = IshiFactory.createBlack(0, 0);
	assertTrue(actual.color, 'white');
    }

    testGrayIshiGetColor() {
	const actual = IshiFactory.createBlack(0, 0);
	assertTrue(actual.color, 'gray');
    }

    testIsOverlapTrue() {
	const ishiBlack1 = IshiFactory.createBlack(0, 0);
	const ishiWhite1 = IshiFactory.createWhite(0, 0);
	const ishiGray1  = IshiFactory.createGray(0, 0);
	assertTrue(ishiBlack1.isOverlap(ishiWhite1));
	assertTrue(ishiBlack1.isOverlap(ishiGray1));

	assertTrue(ishiWhite1.isOverlap(ishiBlack1));
	assertTrue(ishiWhite1.isOverlap(ishiGray1));

	assertTrue(ishiGray1.isOverlap(ishiBlack1));
	assertTrue(ishiGray1.isOverlap(ishiWhite1));
    }
    testIsOverlapFalseIshiObj() {
	const ishiBlack = IshiFactory.createBlack(0, 0);
	const ishiWhite = IshiFactory.createWhite(0, 1);
	const ishiGray  = IshiFactory.createGray(1, 0);
	assertFalse(ishiBlack.isOverlap(ishiWhite));
	assertFalse(ishiBlack.isOverlap(ishiGray));

	assertFalse(ishiWhite.isOverlap(ishiBlack));
	assertFalse(ishiWhite.isOverlap(ishiGray));

	assertFalse(ishiGray.isOverlap(ishiBlack));
	assertFalse(ishiGray.isOverlap(ishiWhite));

	assertFalse(ishiBlack.isOverlap(undefined));
	assertFalse(ishiWhite.isOverlap(undefined));
	assertFalse( ishiGray.isOverlap(undefined));

	assertFalse(ishiBlack.isOverlap(null));
	assertFalse(ishiWhite.isOverlap(null));
	assertFalse( ishiGray.isOverlap(null));

	assertFalse(ishiBlack.isOverlap(NaN));
	assertFalse(ishiWhite.isOverlap(NaN));
	assertFalse( ishiGray.isOverlap(NaN));
    }

    testIsOverlapFalseAnotherObj() {
	const ishiBlack = IshiFactory.createBlack(0, 0);
	const ishiWhite = IshiFactory.createWhite(0, 1);
	const ishiGray  = IshiFactory.createGray(1, 0);

	assertFalse(ishiBlack.isOverlap(1));
	assertFalse(ishiWhite.isOverlap(1));
	assertFalse( ishiGray.isOverlap(1));

 	assertFalse(ishiBlack.isOverlap(''));
 	assertFalse(ishiWhite.isOverlap(''));
 	assertFalse( ishiGray.isOverlap(''));

	assertFalse(ishiBlack.isOverlap([]));
	assertFalse(ishiWhite.isOverlap([]));
	assertFalse( ishiGray.isOverlap([]));

	assertFalse(ishiBlack.isOverlap({}));
	assertFalse(ishiWhite.isOverlap({}));
	assertFalse( ishiGray.isOverlap({}));
    }
    testBlackIshiToString() {
	const ishiBlack = IshiFactory.createBlack(0, 0);
	const expected = 'Class: BlackIshi, Postion: Class Position: row->0, col->0';

	assertTrue(ishiBlack.toString(), expected);
    }
    testWhiteIshiToString() {
	const ishiWhite = IshiFactory.createWhite(18, 18);
	const expected = 'Class: WhiteIshi, Postion: Class Position: row->18, col->18';

	assertTrue(ishiWhite.toString(), expected);
    }
    testGrayIshiToString() {
	const ishiGray = IshiFactory.createGray(5, 6);
	const expected = 'Class: GrayIshi, Postion: Class Position: row->5, col->6';

	assertTrue(ishiGray.toString(), expected);
    }
}
