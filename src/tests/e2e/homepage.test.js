import Nightmare from 'nightmare'

describe('Load a page', function () {

    let nightmare = null;
    beforeEach(() => {
        nightmare = new Nightmare({ show: true });
    })

    describe('/ (Home Page)', () => {
        it ('should load without error', done => {
            nightmare.goto('localhost:3000/')
            .end()
            .then(result => done())
            .catch(done)
        });
    });
});