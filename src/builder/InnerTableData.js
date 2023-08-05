/*
  TITLE: InnerTableData.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/09/18
  DEPENDENCY: BuilderUtils.js
  LICENCE: MIT
  DESCRIPTION: 
*/

import BuilderUtils from '../../src/builder/BuilderUtils.js';

const KEISEN_CSS = '1px solid black';

class InnerTableData {
#css = {}
    constructor(width, height) {
	this.#css['width'] = ( width >> 1 ) + 'px';
	this.#css['height'] = ( height >> 1 ) + 'px';
    }
    invisibleTop() {
	delete this.#css['borderTop'];
    }
    visibleTop() {
	this.invisibleTop();
	this.#css['borderTop'] = KEISEN_CSS;
    }
    invisibleLeft() {
	delete this.#css['borderLeft'];
    }
    visibleLeft() {
	this.invisibleLeft();
	this.#css['borderLeft'] = KEISEN_CSS;
    }
    invisibleBottom() {
	delete this.#css['borderBottom'];
    }
    visibleBottom() {
	this.invisibleBottom();
	this.#css['borderBottom'] = KEISEN_CSS;
    }
    invisibleRight() {
	delete this.#css['borderRight'];
    }
    visibleRight() {
	this.invisibleLeft();
	this.#css['borderRight'] = KEISEN_CSS;
    }
    invisibleAll() {
	this.invisibleTop();
	this.invisibleLeft();
	this.invisibleBottom();
	this.invisibleRight();
    }
    visibleAll() {
	this.visibleTop();
	this.visibleLeft();
	this.visibleBottom();
	this.visibleRight();
    }
    getElement() {
	const td = document.createElement('td');
	BuilderUtils.attachCss(td, this.#css);
	return td;
    }
}

InnerTableData.create = function(width, height) {
    return new InnerTableData(width, height);
}

export default InnerTableData;
