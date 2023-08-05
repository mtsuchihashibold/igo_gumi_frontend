/*
  TITLE: IshiFactory.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/10/21
  DEPENDENCY: 
  LICENCE: MIT
  DESCRIPTION: 

*/

export default class List {
#top = null;
#bottom = null;
#left = null;
#right = null;
    constructor() {
    }

    get left() {
	return this.#left;
    }
    set left(obj) {
	if ( ! (obj instanceof List ) )
	    throw new TypeError('Invalid argument');
	this.#left = obj;
    }
    get right() {
	return this.#right;
    }
    set right(obj) {
	if ( ! (obj instanceof List ) )
	    throw new TypeError('Invalid argument');
	this.#right = obj;
    }
    get top() {
	return this.#top;
    }
    set top(obj) {
	if ( ! (obj instanceof List ) )
	    throw new TypeError('Invalid argument');
	this.#top = obj;
    }
    get bottom() {
	return this.#bottom;
    }
    set bottom(obj) {
	if ( ! (obj instanceof List ) )
	    throw new TypeError('Invalid argument');
	this.#bottom = obj;
    }
}
