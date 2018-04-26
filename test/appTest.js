let assert = require('chai').assert;
let app = require('../app');

describe('App', () => {
    /**
     * Just a mock test, not really a requirement.
     */
    it('should run on 8080', () => {
        assert.equal(app.port, 8080);
    });
});