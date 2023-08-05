/*
  TITLE: IshiFactory.js
  AUTHOR: m.tsuchiahshi
  DATE: 2022/10/22
  DEPENDENCY: 
  LICENCE: MIT
  DESCRIPTION: 

*/

export defalut const SearchStatus {
    let isVisited = false;
    isVisited() {
	return isVisited;
    },
    upVisited() {
	isVisited = true;
    },
    downVisited() {
	isVisited = false;
    },
}
