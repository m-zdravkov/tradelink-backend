let assert  = require('chai').assert,
    request = require('supertest'),
    app     = require('../app');

// TODO:Prepare

describe('Areas CRUD', () => {
    it('gets a page of areas', (done) => {
        request(app).get('/api/areas')
            .expect('Content-type',/json/)
            .expect(200, done);
    });

    //it('gets a non-existent area', (done) => {
    //    request(app).get('/api/areas/nothing')
    //        .expect(404, done);
    //});
});