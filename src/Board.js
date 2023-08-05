/*
  TITLE: PositionDispenser.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/10/10
  DEPENDENCY: PositionDispenser.js
  LICENCE: MIT
  DESCRIPTION: 

*/
import {AssertionError, assertEquals, assertNotEquals, assertTrue, assertFalse, assertException} from '../src/assert.js';
import Logger from '../src/Logger.js';
import PositionDispenser from '../src/PositionDispenser.js';

const log = new Logger(true);

const Board = (function(){
    let instance = null;
    
    // const Stage = function(capacity) {
	// 	const _stg = new Array(capacity);
	// 
	// 	log.debug('START - Stage initialize');
	// 	for( let i = 0 ; i < capacity ; i++ ) {
	// 		_stg[i] = null;
	// 	}
	// 	log.debug(_stg);
	// 	log.debug('END   - Stage initialize');
	// 	
	// 	this.setIshi = function(ishi) {
	// 		// const ishiPos = ishi.getPosition();
	// 		const ishiPos = ishi.position;
	// 		const idx = PositionDispenser.getIndex(ishiPos.getRow(), ishiPos.getCol());
	// 
	// 		assertTrue( idx >= 0 && idx < capacity);
	// 
	// 		_stg[idx] = ishi;
	// 	}
	// 
	// 	this.getIshi = function(row, col) {
	// 		const idx = PositionDispenser.getIndex(row, col);
	// 
	// 		assertTrue( idx >= 0 && idx < capacity);
	// 
	// 		return _stg[idx];
	// 	}
	// 
	// 	this.clearIshi = function(row, col) {
	// 		const idx = PositionDispenser.getIndex(row, col);
	// 
	// 		assertTrue( idx >= 0 && idx < capacity);
	// 
	// 		_stg[idx] = null;
	// 	}
	// 
	// 	this.forEach = function(renderer) {
	// 		_stg.forEach(ishi => {
	// 			renderer(ishi);
	// 		});
	// 	}
    // }

	const Stage = function(capacity) {
		let _physical = null;
		const _stg = new Array(capacity);

		log.debug('START - Stage initialize');
		for( let i = 0 ; i < capacity ; i++ ) {
			_stg[i] = null;
		}
		log.debug(_stg);
		log.debug('END   - Stage initialize');

		const notifyPhysical = function(r, c, cmd, color) {
			if ( !_physical ) return;
			_physical.render(r, c, cmd, color);
		}
		
		this.setIshi = function(ishi) {
			// const ishiPos = ishi.getPosition();
			const ishiPos = ishi.position;
			const idx = PositionDispenser.getIndex(ishiPos.getRow(), ishiPos.getCol());

			assertTrue( idx >= 0 && idx < capacity);

			_stg[idx] = ishi;
			notifyPhysical(ishiPos.getRow(), ishiPos.getCol(), 'put', ishi.color);
		}

		this.getIshi = function(row, col) {
			const idx = PositionDispenser.getIndex(row, col);

			assertTrue( idx >= 0 && idx < capacity);

			return _stg[idx];
		}

		this.clearIshi = function(row, col) {
			const idx = PositionDispenser.getIndex(row, col);

			assertTrue( idx >= 0 && idx < capacity);

			_stg[idx] = null;
			notifyPhysical(row, col, 'clear', '');
		}
		this.hasIshi = function(row, col) {
			const idx = PositionDispenser.getIndex(row, col);

			assertTrue( idx >= 0 && idx < capacity);

			console.log(!(_stg[idx] === null));

			return !(_stg[idx] === null);
		}

		this.forEach = function(renderer) {
			_stg.forEach(ishi => {
				renderer(ishi);
			});
		}

		this.setPhysical = function(physical) {
			_physical = physical;
		}

    }
	
    return {
		getInstance : function() {
			if ( !instance ){
				const MAX_ROW = PositionDispenser.getMaxRow();
				const MAX_COL = PositionDispenser.getMaxCol();
				instance = new Stage(MAX_ROW * MAX_COL);
			}
			return instance;
		}
    }
})();

export default Board;
