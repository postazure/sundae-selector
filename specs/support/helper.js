export default class Helper {
    matchArray(expectation, actual) {
        if  (
            expectation.constructor !== Array ||
            actual.constructor !== Array ||
            expectation.length !== actual.length
        ) {
            return false;
        }
        for (let i=0; i < actual; i++) {
            if (expectation.indexOf(actual[i]) === -1) {return false;}
        }
        return true;
    }
}