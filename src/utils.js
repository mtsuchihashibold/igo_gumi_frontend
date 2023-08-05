/*
  TITLE: utils.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/08
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

const patn = new RegExp('html|head|body|title|meta|div|span|h1|address|p|br|em|strong|del|ins|abbr|acronym|dfn|blockquote|q|cite|sup|sub|pre|code|var|kbd|samp|bdo|font|basefont|big|small|b|i|s|strike|u|tt|center|hr|a|base|link|ul|ol|li|dl|dt|dd|dir|menu|img|map|area|object|applet|param|table|caption|thead|tfoot|tbody|colgroup|col|tr|td|th|frameset|frame|noframes|iframe|form|input|textarea|select|option|optgroup|button|label|fieldset|legend|isindex|style|script|noscript|', 'i');

export function range(start, end, step) {
    if ( !step ) step = 1;
    const ret = [];
    for ( let i = start; i < end ; i+=step ) {
	ret.push(i);
    }
    return ret;
}

export function generateCounter(seed) {
    let x0 = Number(seed) ? Number(seed) : 1;
    const A = 48271;
    const M = Math.pow(2, 31) - 1;

    return function() {
	const ret = (A * x0 ) % M;
	x0 = ret;
	return ret;
    }
}

export function uuid() {
    let _uuid = '';
    for ( let i = 0 ; i < 32 ; i++ ) {
	const random = Math.random() * 16 | 0;
	if ( i == 8 || i == 12 || i == 16 || i == 20 ) {
	    _uuid += '-';
	}
	_uuid += ( i == 12 ? 4 : ( i == 16 ? ( random & 3 | 8 ) : random ) ).toString(16);
    }
    return _uuid;
}


export function isHtmlElement(testee) {
    return !!(testee && testee.tagName && testee.tagName.match(patn));
}

export function isString(testee) {
    return (typeof testee === 'string' || testee instanceof String);
}

export function attachCss(elm, styleObj) {
    if ( !elm || !( elm instanceof HTMLElement ) )
	throw new TypeError(`Invalid argument: elm is ${elm}`);
    Object.keys(styleObj).forEach(key => {
	const value = styleObj[key];
	elm.style[key] = value;
    });
}



export default {range, generateCounter, isHtmlElement, isString, uuid, attachCss};
