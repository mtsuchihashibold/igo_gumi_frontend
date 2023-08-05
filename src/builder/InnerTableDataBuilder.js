/*
  TITLE: InnerTableDataBuilder.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/18
  DEPENDENCY: InnerTableData.js
  LICENCE: MIT

  DESCRIPTION: 
*/

import InnerTableData from '../../src/builder/InnerTableData.js';

class InnerTableDataBuilder {
#width;
#height;
    constructor(width, height) {
	this.#width = width;
	this.#height = height;
    }
    /*
      Explain cell-position
         (1). TopLeft    | (2). TopRight
        -----------------+-------------------
         (3). BottomLeft | (4). BottomRight
     */

    buildTopLeft() {
	const inTd = InnerTableData.create(this.#width, this.#height);
	inTd.invisibleAll();
	inTd.visibleBottom();
	inTd.visibleRight();
	return inTd;
    }
    buildTopRight() {
	const inTd = InnerTableData.create(this.#width, this.#height);
	inTd.invisibleAll();
	inTd.visibleBottom();
	inTd.visibleLeft();
	return inTd;
    }
    buildBottomLeft() {
	const inTd = InnerTableData.create(this.#width, this.#height);
	inTd.invisibleAll();
	inTd.visibleTop();
	inTd.visibleRight();
	return inTd;
    }
    buildBottomRight() {
	const inTd = InnerTableData.create(this.#width, this.#height);
	inTd.invisibleAll();
	inTd.visibleTop();
	inTd.visibleLeft();
	return inTd;
    }
    buildBlank() {
	const inTd = InnerTableData.create(this.#width, this.#height);
	inTd.invisibleAll();
	return inTd;
    }

}

const InnerTableDataBuilderFactory = (function() {
    return {
	create: function(width, height) {
	    return new InnerTableDataBuilder(width, height);
	}
    }
})();

export default InnerTableDataBuilderFactory;

// const InnerTableDataBuilder = (function() {
// 
//     /*
//       Explain cell-position
//          (1). TopLeft    | (2). TopRight
//         -----------------+-------------------
//          (3). BottomLeft | (4). BottomRight
//      */
//     return {
// 	buildTopLeft: function(width, height) {
// 	    const inTd = InnerTableData.create(width, height);
// 	    inTd.invisibleAll();
// 	    inTd.visibleBottom();
// 	    inTd.visibleRight();
// 	    return inTd;
// 	},
// 	buildTopRight: function(width, height) {
// 	    const inTd = InnerTableData.create(width, height);
// 	    inTd.invisibleAll();
// 	    inTd.visibleBottom();
// 	    inTd.visibleLeft();
// 	    return inTd;
// 	},
// 	buildBottomLeft: function(width, height) {
// 	    const inTd = InnerTableData.create(width, height);
// 	    inTd.invisibleAll();
// 	    inTd.visibleTop();
// 	    inTd.visibleRight();
// 	    return inTd;
// 	},
// 	buildBottomRight: function(width, height) {
// 	    const inTd = InnerTableData.create(width, height);
// 	    inTd.invisibleAll();
// 	    inTd.visibleTop();
// 	    inTd.visibleLeft();
// 	    return inTd;
// 	},
// 	buildBlank: function(width, height) {
// 	    const inTd = InnerTableData.create(width, height);
// 	    inTd.invisibleAll();
// 	    return inTd;
// 	}
//     }
// })();
// 
// export default InnerTableDataBuilder;
