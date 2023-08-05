/*
  TITLE: InnerTable.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/18
  DEPENDENCY: InnerTableData.js, BuilderUtils.js
  LICENCE: MIT
  DESCRIPTION: 
*/

import InnerTableData from '../../src/builder/InnerTableData.js';
import BuilderUtils from '../../src/builder/BuilderUtils.js';

export default class InnerTable {
#css = {
    borderCollapse: 'collapse',
    display: 'inline-block',
    position: 'relative'
}
#elm;
#tr1;
#tr2;
    constructor(width, height) {
		const tbl = document.createElement('table');
		const tr1 = document.createElement('tr');
		const tr2 = document.createElement('tr');
		const add = function(elm) {
			if ( elm instanceof InnerTableData ) {
				this.appendChild(elm.getElement());
			} else if ( elm instanceof HTMLElement ) {
				this.appendCHild(elm);
			} else {
				throw new TypeError('invalid type: td11');
			}
		}
		tr1.add = add;
		tr2.add = add;

		BuilderUtils.attachCss(tbl, this.#css);
		tbl.appendChild(tr1);
		tbl.appendChild(tr2);
		this.#tr1 = tr1;
		this.#tr2 = tr2;
		this.#elm = tbl;
    }
    append(td11, td12, td21, td22) {
		this.#tr1.add(td11);
		this.#tr1.add(td12);
		this.#tr2.add(td21);
		this.#tr2.add(td22);
    }
    getElement() {
		return this.#elm;
    }
}

InnerTable.builder = function(width, height) {
    return function() {
		return new InnerTable(width, height);
    }
}


