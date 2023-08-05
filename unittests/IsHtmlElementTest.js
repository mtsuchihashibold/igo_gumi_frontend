import FailError from './base/Fail.js';
import {Unittest, UnittestResult} from './base/Unittest.js';
import {AssertionError, assertEquals, assertStrictEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import {isHtmlElement} from '../src/utils.js';


export default class IsHtmlElement extends Unittest {
    setUp() {
	this.testee = isHtmlElement;
    }
    tearDown() {
	this.testee = null;
    }

    testHTML要素True() {
	const elm = document.createElement('html');
	assertTrue(isHtmlElement(elm));
    }
    testhead要素() {
	const elm = document.createElement('head');
	assertTrue(this.testee(elm));
    }
    testbody要素() {
	const elm = document.createElement('body');
	assertTrue(this.testee(elm));
    }
    testtitle要素() {
	const elm = document.createElement('title');
	assertTrue(this.testee(elm));
    }
    testmeta要素() {
	const elm = document.createElement('meta');
	assertTrue(this.testee(elm));
    }
    testdiv要素() {
	const elm = document.createElement('div');
	assertTrue(this.testee(elm));
    }
    testspan要素() {
	const elm = document.createElement('span');
	assertTrue(this.testee(elm));
    }
    testh1要素() {
	const elm = document.createElement('h1');
	assertTrue(this.testee(elm));
    }
    testaddress要素() {
	const elm = document.createElement('address');
	assertTrue(this.testee(elm));
    }
    testp要素() {
	const elm = document.createElement('p');
	assertTrue(this.testee(elm));
    }
    testbr要素() {
	const elm = document.createElement('br');
	assertTrue(this.testee(elm));
    }
    testem要素() {
	const elm = document.createElement('em');
	assertTrue(this.testee(elm));
    }
    teststrong要素() {
	const elm = document.createElement('strong');
	assertTrue(this.testee(elm));
    }
    testdel要素() {
	const elm = document.createElement('del');
	assertTrue(this.testee(elm));
    }
    testins要素() {
	const elm = document.createElement('ins');
	assertTrue(this.testee(elm));
    }
    testabbr要素() {
	const elm = document.createElement('abbr');
	assertTrue(this.testee(elm));
    }
    testacronym要素() {
	const elm = document.createElement('acronym');
	assertTrue(this.testee(elm));
    }
    testdfn要素() {
	const elm = document.createElement('dfn');
	assertTrue(this.testee(elm));
    }
    testblockquote要素() {
	const elm = document.createElement('blockquote');
	assertTrue(this.testee(elm));
    }
    testq要素() {
	const elm = document.createElement('q');
	assertTrue(this.testee(elm));
    }
    testcite要素() {
	const elm = document.createElement('cite');
	assertTrue(this.testee(elm));
    }
    testsup要素() {
	const elm = document.createElement('sup');
	assertTrue(this.testee(elm));
    }
    testsub要素() {
	const elm = document.createElement('sub');
	assertTrue(this.testee(elm));
    }
    testpre要素() {
	const elm = document.createElement('pre');
	assertTrue(this.testee(elm));
    }
    testcode要素() {
	const elm = document.createElement('code');
	assertTrue(this.testee(elm));
    }
    testvar要素() {
	const elm = document.createElement('var');
	assertTrue(this.testee(elm));
    }
    testkbd要素() {
	const elm = document.createElement('kbd');
	assertTrue(this.testee(elm));
    }
    testsamp要素() {
	const elm = document.createElement('samp');
	assertTrue(this.testee(elm));
    }
    testbdo要素() {
	const elm = document.createElement('bdo');
	assertTrue(this.testee(elm));
    }
    testfont要素() {
	const elm = document.createElement('font');
	assertTrue(this.testee(elm));
    }
    testbasefont要素() {
	const elm = document.createElement('basefont');
	assertTrue(this.testee(elm));
    }
    testbig要素() {
	const elm = document.createElement('big');
	assertTrue(this.testee(elm));
    }
    testsmall要素() {
	const elm = document.createElement('small');
	assertTrue(this.testee(elm));
    }
    testb要素() {
	const elm = document.createElement('b');
	assertTrue(this.testee(elm));
    }
    testi要素() {
	const elm = document.createElement('i');
	assertTrue(this.testee(elm));
    }
    tests要素() {
	const elm = document.createElement('s');
	assertTrue(this.testee(elm));
    }
    teststrike要素() {
	const elm = document.createElement('strike');
	assertTrue(this.testee(elm));
    }
    testu要素() {
	const elm = document.createElement('u');
	assertTrue(this.testee(elm));
    }
    testtt要素() {
	const elm = document.createElement('tt');
	assertTrue(this.testee(elm));
    }
    testcenter要素() {
	const elm = document.createElement('center');
	assertTrue(this.testee(elm));
    }
    testhr要素() {
	const elm = document.createElement('hr');
	assertTrue(this.testee(elm));
    }
    testa要素() {
	const elm = document.createElement('a');
	assertTrue(this.testee(elm));
    }
    testbase要素() {
	const elm = document.createElement('base');
	assertTrue(this.testee(elm));
    }
    testlink要素() {
	const elm = document.createElement('link');
	assertTrue(this.testee(elm));
    }
    testul要素() {
	const elm = document.createElement('ul');
	assertTrue(this.testee(elm));
    }
    testol要素() {
	const elm = document.createElement('ol');
	assertTrue(this.testee(elm));
    }
    testli要素() {
	const elm = document.createElement('li');
	assertTrue(this.testee(elm));
    }
    testdl要素() {
	const elm = document.createElement('dl');
	assertTrue(this.testee(elm));
    }
    testdt要素() {
	const elm = document.createElement('dt');
	assertTrue(this.testee(elm));
    }
    testdd要素() {
	const elm = document.createElement('dd');
	assertTrue(this.testee(elm));
    }
    testdir要素() {
	const elm = document.createElement('dir');
	assertTrue(this.testee(elm));
    }
    testmenu要素() {
	const elm = document.createElement('menu');
	assertTrue(this.testee(elm));
    }
    testimg要素() {
	const elm = document.createElement('img');
	assertTrue(this.testee(elm));
    }
    testmap要素() {
	const elm = document.createElement('map');
	assertTrue(this.testee(elm));
    }
    testarea要素() {
	const elm = document.createElement('area');
	assertTrue(this.testee(elm));
    }
    testobject要素() {
	const elm = document.createElement('object');
	assertTrue(this.testee(elm));
    }
    testapplet要素() {
	const elm = document.createElement('applet');
	assertTrue(this.testee(elm));
    }
    testparam要素() {
	const elm = document.createElement('param');
	assertTrue(this.testee(elm));
    }
    testtable要素() {
	const elm = document.createElement('table');
	assertTrue(this.testee(elm));
    }
    testcaption要素() {
	const elm = document.createElement('caption');
	assertTrue(this.testee(elm));
    }
    testthead要素() {
	const elm = document.createElement('thead');
	assertTrue(this.testee(elm));
    }
    testtfoot要素() {
	const elm = document.createElement('tfoot');
	assertTrue(this.testee(elm));
    }
    testtbody要素() {
	const elm = document.createElement('tbody');
	assertTrue(this.testee(elm));
    }
    testcolgroup要素() {
	const elm = document.createElement('colgroup');
	assertTrue(this.testee(elm));
    }
    testcol要素() {
	const elm = document.createElement('col');
	assertTrue(this.testee(elm));
    }
    testtr要素() {
	const elm = document.createElement('tr');
	assertTrue(this.testee(elm));
    }
    testtd要素() {
	const elm = document.createElement('td');
	assertTrue(this.testee(elm));
    }
    testth要素() {
	const elm = document.createElement('th');
	assertTrue(this.testee(elm));
    }
    testframeset要素() {
	const elm = document.createElement('frameset');
	assertTrue(this.testee(elm));
    }
    testframe要素() {
	const elm = document.createElement('frame');
	assertTrue(this.testee(elm));
    }
    testnoframes要素() {
	const elm = document.createElement('noframes');
	assertTrue(this.testee(elm));
    }
    testiframe要素() {
	const elm = document.createElement('iframe');
	assertTrue(this.testee(elm));
    }
    testform要素() {
	const elm = document.createElement('form');
	assertTrue(this.testee(elm));
    }
    testinput要素() {
	const elm = document.createElement('input');
	assertTrue(this.testee(elm));
    }
    testtextarea要素() {
	const elm = document.createElement('textarea');
	assertTrue(this.testee(elm));
    }
    testselect要素() {
	const elm = document.createElement('select');
	assertTrue(this.testee(elm));
    }
    testoption要素() {
	const elm = document.createElement('option');
	assertTrue(this.testee(elm));
    }
    testoptgroup要素() {
	const elm = document.createElement('optgroup');
	assertTrue(this.testee(elm));
    }
    testbutton要素() {
	const elm = document.createElement('button');
	assertTrue(this.testee(elm));
    }
    testlabel要素() {
	const elm = document.createElement('label');
	assertTrue(this.testee(elm));
    }
    testfieldset要素() {
	const elm = document.createElement('fieldset');
	assertTrue(this.testee(elm));
    }
    testlegend要素() {
	const elm = document.createElement('legend');
	assertTrue(this.testee(elm));
    }
    testisindex要素() {
	const elm = document.createElement('isindex');
	assertTrue(this.testee(elm));
    }
    teststyle要素() {
	const elm = document.createElement('style');
	assertTrue(this.testee(elm));
    }
    testscript要素() {
	const elm = document.createElement('script');
	assertTrue(this.testee(elm));
    }
    testnoscript要素() {
	const elm = document.createElement('noscript');
	assertTrue(this.testee(elm));
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
    test文字列False9() {
	const fn = function() { }
	assertFalse(this.testee("hoge"));
    }
    test文字列False10() {
	const fn = function() { }
	assertFalse(this.testee("HTML"));
    }
    test文字列False11() {
	const fn = function() { }
	assertFalse(this.testee("<HTML></HTML>"));
    }

}
