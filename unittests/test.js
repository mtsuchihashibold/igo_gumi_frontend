

class Test {
    testHoge() {
	console.log("HOEHOGEHGOE");
    }
    main() {
	console.log("main");
	const instance = new Test();
	Object.keys(instance).forEach(k => {
	    console.log(k);
	    console.log("fuga");
	    this[k]();
	});
    }
}

export default Test;
