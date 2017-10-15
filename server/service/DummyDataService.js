'use strict';

class DummyDataService {
    constructor() {}

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max + 1 - min ) + min);
    }
}

module.exports = DummyDataService;
