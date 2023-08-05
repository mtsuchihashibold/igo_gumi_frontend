/*
  TITLE: Fail.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/10
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

class FailError extends Error {
    constructor(...params) {
	super(...params);

	if ( Error.captureStackTrace ) {
	    Error.captureStackTrace(this, FailError);
	}
	
	this.name = 'FailError';
    }

}

export default FailError;
