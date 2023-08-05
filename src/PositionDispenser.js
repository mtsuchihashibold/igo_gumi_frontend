/*
  TITLE: PositionDispenser.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/10
  DEPENDENCY: assert.js
  LICENCE: MIT
  DESCRIPTION: 

*/
import {AssertionError, assertEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';


const PositionDispenser = (function() {

    const MAX_ROW = 9;
    const MAX_COL = 9;

    const getIndex = function(row, col) {
		let msg = '';
		let invalidArguments = false;
		if ( row < 0 || row >= MAX_ROW ) {
			invalidArguments = true;
			msg += `row is greater or equal 0 and less ${MAX_ROW} `;
		}
		if ( col < 0 || col >= MAX_COL ) {
			invalidArguments = true;
			msg += `col is greater or equal 0 and less ${MAX_COL} `;
		}
		if ( invalidArguments )
			throw new AssertionError(msg);

		return row * MAX_ROW + col;
    }
    
    const Position = function(row, col) {
		assertFalse(Number.isNaN(Number(row)));
		assertFalse(Number.isNaN(Number(col)));
		let msg = '';
		let invalidArguments = false;
		if ( row < 0 || row >= MAX_ROW ) {
			invalidArguments = true;
			msg += `row is greater or equal 0 and less ${MAX_ROW} `;
		}
		if ( col < 0 || col >= MAX_COL ) {
			invalidArguments = true;
			msg += `col is greater or equal 0 and less ${MAX_COL} `;
		}
		if ( invalidArguments )
			throw new AssertionError(msg);
		

		const r = row;
		const c = col;
		this.getRow = function() {
			return r;
		}
		this.getCol = function() {
			return c;
		}
		this.equals = function(p) {
			if ( !p ) return false;
			if ( !p.getRow ) return false;
			if ( !p.getCol ) return false;
			return (r == p.getRow() && c == p.getCol());
		}
		this.getHash = function() {
			return getIndex(r, c);
		}
		this.toString = function() {
			return `Class Position: row->${r}, col->${c}`;
		}
    }
    Position.prototype.getMaxRow = function() {
		return MAX_ROW;
    }
    Position.prototype.getMaxCol = function() {
		return MAX_COL;
    }

    let cache = new Array(MAX_ROW * MAX_COL);

    const createPosition = function(r, c) {
		const idx = getIndex(r, c);
		if ( cache[idx] ) return cache[idx];
		return cache[idx] = new Position(r, c);
    }
    
    return {
		createPosition : createPosition,
		getMaxRow : function() {
			return MAX_ROW;
		},
		getMaxCol : function() {
			return MAX_COL;
		},
		getIndex : getIndex,
		getPositionByIndex: function(index) {
			const row = Math.floor( index / MAX_ROW );
			const col = index % MAX_COL;
			return createPosition(row, col);		  
		}
    }
})();

export default PositionDispenser;
