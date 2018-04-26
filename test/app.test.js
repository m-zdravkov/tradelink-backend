let assert  = require('chai').assert,
    request = require('supertest'),
    app     = require('../app');

describe('App', () => {
    /**
     * Just a mock test, not really a requirement.
     * Checks to see if it runs on the port for testing.
     */
    
    it('should run on 8081', () => {
        assert.equal(app.port, 8081);
    });
});