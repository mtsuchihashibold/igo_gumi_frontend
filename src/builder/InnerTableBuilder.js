/*
  TITLE: InnerTableBuilder.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/18
  DEPENDENCY: InnerTableData.js, InnerTable.js
  LICENCE: MIT
  DESCRIPTION: 
*/

import InnerTableDataBuilderFactory from '../../src/builder/InnerTableDataBuilder.js';
import InnerTable from '../../src/builder/InnerTable.js';


class InnerTableBuilder {
#width;
#height;
#tdBuilder;
#createTbl;
    constructor(width, height) {
	this.#width = width;
	this.#height = height;
	this.#tdBuilder = InnerTableDataBuilderFactory.create(width, height);
	this.#createTbl = InnerTable.builder(width, height);
	console.log(this.#createTbl);
    }

#buildTblElement(tdTopLeft, tdTopRight, tdBottomLeft, tdBttomRight) {
    const tbl = this.#createTbl();
    tbl.append(tdTopLeft, tdTopRight, tdBottomLeft, tdBttomRight);
    return tbl.getElement();
}
    buildLeftTopCorner() {
	const tdTopLeft      = this.#tdBuilder.buildBlank();
	const tdTopRight     = this.#tdBuilder.buildBlank();
	const tdBottomLeft   = this.#tdBuilder.buildBlank();
	const tdBottomRight  = this.#tdBuilder.buildBottomRight();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildLeftSide() {
	const tdTopLeft      = this.#tdBuilder.buildBlank();
	const tdTopRight     = this.#tdBuilder.buildTopRight();
	const tdBottomLeft   = this.#tdBuilder.buildBlank();
	const tdBottomRight  = this.#tdBuilder.buildBottomRight();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildLeftBottomCorner() {
	const tdTopLeft      = this.#tdBuilder.buildBlank();
	const tdTopRight     = this.#tdBuilder.buildTopRight();
	const tdBottomLeft   = this.#tdBuilder.buildBlank();
	const tdBottomRight  = this.#tdBuilder.buildBlank();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildRightTopCorner() {
	const tdTopLeft      = this.#tdBuilder.buildBlank();
	tdTopLeft.visibleBottom();
	const tdTopRight     = this.#tdBuilder.buildBlank();
	const tdBottomLeft   = this.#tdBuilder.buildBottomLeft();
	const tdBottomRight  = this.#tdBuilder.buildBlank();
	tdBottomRight.visibleLeft();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildRightSide() {
	const tdTopLeft      = this.#tdBuilder.buildTopLeft();
	const tdTopRight     = this.#tdBuilder.buildBlank();
	const tdBottomLeft   = this.#tdBuilder.buildBottomLeft();
	const tdBottomRight  = this.#tdBuilder.buildBlank();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildRightBottomCorner() {
	const tdTopLeft      = this.#tdBuilder.buildTopLeft();
	const tdTopRight     = this.#tdBuilder.buildBlank();
	tdTopRight.visibleLeft();
	const tdBottomLeft   = this.#tdBuilder.buildBlank();
	tdBottomLeft.visibleTop();
	const tdBottomRight  = this.#tdBuilder.buildBlank();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildTopSide() {
	const tdTopLeft      = this.#tdBuilder.buildBlank();
	const tdTopRight     = this.#tdBuilder.buildBlank();
	const tdBottomLeft   = this.#tdBuilder.buildBottomLeft();
	const tdBottomRight  = this.#tdBuilder.buildBottomRight();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildBottomSide() {
	const tdTopLeft      = this.#tdBuilder.buildTopLeft();
	const tdTopRight     = this.#tdBuilder.buildTopRight();
	const tdBottomLeft   = this.#tdBuilder.buildBlank();
	const tdBottomRight  = this.#tdBuilder.buildBlank();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
    buildMiddle() {
	const tdTopLeft      = this.#tdBuilder.buildTopLeft();
	const tdTopRight     = this.#tdBuilder.buildTopRight();
	const tdBottomLeft   = this.#tdBuilder.buildBottomLeft();
	const tdBottomRight  = this.#tdBuilder.buildBottomRight();

	return this.#buildTblElement(
	    tdTopLeft,
	    tdTopRight,
	    tdBottomLeft,
	    tdBottomRight
	);
    }
}

const InnerTableBuilderFactory = (function() {
    return {
	create: function(width, height) {
	    return new InnerTableBuilder(width, height);
	}
    }
})();

export default InnerTableBuilderFactory;
