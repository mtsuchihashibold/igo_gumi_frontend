/*
  TITLE: IshiFactory.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/16
  DEPENDENCY: assert.js, PositionDispenser.js
  LICENCE: MIT
  DESCRIPTION: 

*/

import {AssertionError, assertFalse} from '../src/assert.js';
import PositionDispenser from '../src/PositionDispenser.js';
import List from '../src/List.js';

class Ishi extends List {
#pos;
    constructor(row, col) {
	super();
	this.#pos = PositionDispenser.createPosition(row, col);
    }
    get position() {
	return this.#pos;
    }
    isOverlap(other) {
	if ( !other || !(other instanceof Ishi) ) return false;
	return this.#pos.equals(other.position);
    }
    toString() {
	return `Class: ${this.constructor.name}, Postion: ${this.position.toString()}`;
    }
}

class BlackIshi extends Ishi {
    constructor(row, col) {
	super(row, col);
    }
    isSameType(other) {
	if ( !other || !(other instanceof Ishi) ) return false;
	return (other instanceof BlackIshi) || (other instanceof GrayIshi);
    }
    equals(other) {
	return this.isSameType(other) && this.position.equals(other.position);
    }
    get color() {
	return 'black';
    }
}
class WhiteIshi extends Ishi {
    constructor(row, col) {
	super(row, col);
    }
    isSameType(other) {
	if ( !other || !(other instanceof Ishi) ) return false;
	return (other instanceof WhiteIshi) || (other instanceof GrayIshi);
    }
    equals(other) {
	return this.isSameType(other) && this.position.equals(other.position);
    }
    get color() {
	return 'white';
    }
}
// this type match both type, black and white.
class GrayIshi extends Ishi {
    constructor(row, col) {
	super(row, col);
    }
    isSameType(other) {
	if ( !other )  return false;
	return (other instanceof Ishi);
    }
    equals(other) {
	return this.isSameType(other) && this.position.equals(other.position);
    }
    get color() {
	return 'transparent';
    }
}

const IshiFactory = (function(){
    return {
	createBlack: function(row, col) {
	    return new BlackIshi(row, col);
	},
	createWhite: function(row, col) {
	    return new WhiteIshi(row, col);
	},
	createGray: function(row, col) {
	    return new GrayIshi(row, col);
	}
    }
})();

export default IshiFactory;
