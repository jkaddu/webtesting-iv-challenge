describe('server', () => {
	it('sets the env to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	// using supertest as request for api request, bringing it in up top as
	// const request = require('supertest');
	describe('GET /', () => {
		it('should return 200 Ok', () => {
			return request(server).get('/').expect(200);
		});
	});
});
