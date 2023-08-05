/*
  TITLE: Unittest.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/10
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

import FailError from './Fail.js';
import Logger from '../../src/debug.js';
import {uuid} from '../../src/utils.js';

const OK = 0b0001;
const NG = 0b0010;

class Entry {
#entries = [];
    constructor() {
	// pass
    }
    size() {
	return this.#entries.length;
    }
    add(entry) {
	if ( ! (entry instanceof Entry ) ) throw new TypeError('invalid argument');
	this.#entries.push(entry);
    }
    remove(entry) {
	if ( ! (entry instanceof Entry ) ) throw new TypeError('invalid argument');
	this.#entries = this.#entries.filter(elm => elm !== entry);
    }
    clear() {
	this.#entries = [];
    }
    forEach(fn) {
	this.#entries.forEach(entry => {
	    fn(entry);
	});
    }
}

class UnittestSpec extends Entry {
#name;
    constructor(name) {
	super();
	this.#name = name;
    }
    getName() {
	return this.#name;
    }
    toString() {
	let res = '';
	this.forEach((entry) => {
	    res += `${this.getName()}`;
	    if ( entry instanceof UnittestResult ) {
		res += `- ${entry.toString()}`;
	    }
	    res += "\n";
	});
	return res;
    }
}
class UnittestCase extends Entry {
#name;
    constructor(name) {
	super();
	this.#name = name;
    }
    getName() {
	return this.#name;
    }
    isOk() {
	let isOk = true;
	this.forEach((result) => {
	    isOK = isOk && result.isOk();
	});
	return isOk;
	
    }
    isNg() {
	return !this.isOk();
    }
    toString() {
	// return `${this.getName()}`;

	let res = '';
	this.forEach((entry) => {
	    res += `${this.getName()}`;
	    if ( entry instanceof UnittestResult ) {
		res += `- ${entry.toString()}`;
	    }
	    res += "\n";
	});
	return res;
    }

}
export class UnittestResult extends Entry {
#result;
#message;
    constructor(result, message) {
	super();
	this.#result = result;
	this.#message = mesasge;
    }
    add(entry) {
	throw new Error();
    }
    remove(entry) {
	throw new Error();
    }
    isOk() {
	return ( this.#result & OK ) == OK;
    }
    isNg() {
	return ( this.#result & NG ) == NG;
    }
    getResult() {
	if ( this.isOk() ) {
	    return 'OK';
	} else {
	    return 'NG';
	}
    }
    getMessage() {
	return this.#message;
    }
    toString() {
	if ( this.isOk() ) {
	    return `${this.getResult()}`;
	} else {
	    return `${this.getResult()} - ${this.getMessage()}`;
	}
    }
}

export class Unittest {
    #messageList = [];
    #resultList = [];
    #methodList = [];
    #unittestSpec = new UnittestSpec(
        this.constructor.prototype.constructor.name
    );
    #methodMap = {};
    
    serUp() {
	// Do Override
    }
    tearDown() {
	// Do Override
    }
    getMessageList() {
	return this.#messageList;
    }
    getResultList() {
	return this.#resultList;
    }
    isAllOk() {
	let isOk = true;
	this.#resultList.forEach(res => {
	    isOk = isOk && res.isOk();
	});
	return isOk;
    }
    getTestList() {
	if ( this.#methodList.length == 0 ) {
	    const cls = this.constructor.prototype;
	    this.#methodList = Object
		.getOwnPropertyNames(cls)
		.filter(pname => pname && pname.match(/^test/));
	}
	return this.#methodList;
    }
    main(isConsole) {
	if ( this.#unittestSpec.size() ) {
	    // initialize unittestCase and result
	    this.getTestList().forEach(testCase => {
		const unitcase = new UnittestCase(testCase);
		this.#unittestSpec.add(unitcase);
                this.#methodMap[testCase] = unitcase;
	    });
	}
	this.setUp();

	try{
	    if ( this.getTestList().legth != 0) {
		this.#methodList.forEach(methodname => {
		    try{
			this[methodname]();
			const result = new UnittestResult(OK, '');
			this.#methodMap[methodName].add(result);

			if ( isConsole ) {
			    (new Logger()).info(result);
			} else {
			    this.#resultList.push(result);
			}
		    } catch(e) {
			const result = new UnittestResult(NG, e);
			this.#methodMap[methodName].add(result);

			if ( isConsole ) {
			    (new Logger()).info(result);
			} else {
			    this.#resultList.push(result);
			}
		    }
		});
	    } else {
		throw new FailError('Defined no test');
	    }
	} catch(e) {
	    (new Logger()).error(e);
	    this.#messageList.push(e)
	} finally {
	    this.tearDown();
	}
    }
}

