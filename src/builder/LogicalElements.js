/*
  TITLE: LogicalElements.js
  AUTHOR: m.tsuchiahshi
  DATE: 2023/01/14
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION:
    This file defines Logical HTML Elements, which is Non Phicical Element(Non HTML Element).
    Logical Elements has lazy initialize function.
*/


class LogicalElement extends Array {
	append(elm) {
		if ( !(elm isinstance LogicalElement) ) {
			throw new Error("Invalid argument: elm");
		}
		this.push(elm);
	}
}
