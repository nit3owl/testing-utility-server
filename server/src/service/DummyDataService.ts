'use strict';

class DummyDataService {
    constructor() {}

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max + 1 - min ) + min);
    }
}

export default DummyDataService;
