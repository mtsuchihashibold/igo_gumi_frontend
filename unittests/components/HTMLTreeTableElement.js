
import {uuid} from './src/utils.js';

// export default class HTMLTreeTableElement extends HTMLElement {
// export default class HTMLTreeTableElement {
const HTMLTreeTableElement = (function(){

    const _HtmlTreeTableElement = function() {
	const tbl = document.createElement('table');
	const thead = document.createElement('thead');
	const tbody = document.createElement('tbody');
	const mdb = {};
	const trCache = {};
	const parentChildren = {};

	this.add = function(tr) {
	    const key = uuid();
	    mdb[key] = tr;
	    trCache[key] = tr;
	    parentChildren[key] = null;

	    tr.setAttribute('vid', key);
	    tbody.appendChild(tr);
	}
	this.remove = function(tr) {
	    const key = tr.getAttribute('vid');
	    if ( !key || trCache[key] ) return;
	    tbody.removeChild(trCache[key]);

	    if ( Object.keys(parentChildren).filter(pkey => pkey == key ).length ) {
		parentChildren[key].forEach(child => {
		    tbody.removeChild(child);
		});
	    }

	    delete parentChildren[key];
	    delete trCache[key];
	    delete mdb[key];
	    
	}
	this.addPrentChildren({parentTr, childrenTrList}) {
	    if ( !parentTr ) throw new TypeError();
	    if ( !childrenTrList || !childrenTrList.length || childrenTrList.length == 0 )
		throw new TypeError();
	    const pkey = uuid();
	    mdb[pkey] = null;
	    trCache[pkey] = parentTr;

	    tr.setAttribute('vid', pkey);
	    tbody.appendChild(parentTr);

	    childrenTrList.forEach(childTr => {
		const ckey = uuid();
		mdb[ckey] = null;
		trCache[ckey] = parentTr;

		tr.setAttribute('vid', ckey);
		tbody.appendChild(childTr);
	    });
	    
	}
	this.expand = function() {
	}
	this.shrink = function() {
	}
    }
    
    function getHtml() {
	const tbl = document.createElement('table');
	
    }
})();


class HTMLTreeRowElement {
    addData() {
    }
}

class HTMLTreeDataElement {
}


const HTMLTreeRowElementBuilder = (function() {

    const _build = function() {
    }
    return {
	build: _build
    }
})();


