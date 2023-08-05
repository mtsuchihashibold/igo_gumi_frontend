/*
  TITLE: debug.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/08
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

class TimeStamp {
    constructor() {
    }
    toString(timeStr) {
	const now = timeStr ? new Date(timeStr) : new Date();

	const year    = now.getFullYear();
	const month   = ('00' + (now.getMonth() + 1)).slice(-2);
	const date    = ('00' + now.getDate()).slice(-2);
	const hours   = ('00' + now.getHours()).slice(-2);
	const minutes = ('00' + now.getMinutes()).slice(-2);
	const seconds = ('00' + now.getSeconds()).slice(-2);
	const milSec  = ('000' + now.getMilliseconds()).slice(-3);

	return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}.${milSec}`;
    }
}

export default class Logger {
#IS_DEBUG = false;
#printer = console.log;
    constructor(isDebug) {
	this.#IS_DEBUG = !!isDebug;
    }
#getTimeStamp() {
    return new TimeStamp();
}
#print(msg) {  
    this.#printer(msg);
}
    setPrinter(printerFn) {
	this.#printer = printerFn;
    }

    info(msg) {
	const ts = this.#getTimeStamp();
	const message = `${ts} INFO - ${msg}`;
	this.#print(message);
    }
    warn(msg) {
	const ts = this.#getTimeStamp();
	const message = `${ts} WARN - ${msg}`;
	this.#print(message);
    }
    error(msg) {
	const ts = this.#getTimeStamp();
	const message = `${ts} ERROR - ${msg}`;
	this.#print(message);
    }
    debug(msg) {
	if ( !this.#IS_DEBUG ) return;
	const ts = this.#getTimeStamp();
	const message = `${ts} DEBUG - ${msg}`;
	this.#print(message);
    }
}
