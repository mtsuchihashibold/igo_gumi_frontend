/*
  TITLE: BuilderUitls.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/18
  DEPENDENCY: NONE
  LICENCE: MIT
  DESCRIPTION: 
*/

const BuilderUtils = (function() {
    return {
	attachCss: function(elm, styleObj) {
	    if ( !elm || !( elm instanceof HTMLElement ) )
		throw new TypeError(`Invalid argument: elm is ${elm}`);
	    Object.keys(styleObj).forEach(key => {
		const value = styleObj[key];
		elm.style[key] = value;
	    });
	}
    }
})();

export default BuilderUtils;
