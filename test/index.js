
const should = require('should/as-function'),
    {normalizePhone} = require('../dst/index');

describe('normalizePhone', () => {
    describe('Falsy values',  () => {
        it('should return empty string if 0 given', () => {
            should(normalizePhone(0)).be.equal('');
        });

        it('should return empty string if false given', () => {
            should(normalizePhone(false)).be.equal('');
        });

        it('should return empty string if empty string given', () => {
            should(normalizePhone('')).be.equal('');
        });
    });

    describe('replace symbols', () => {
        it('should replace all non-digit symbols with an empty string', () => {
            should(normalizePhone('+7 (999) 888-77-66')).be.equal('79998887766');
        });

        it('should replace first 8 to 7', () => {
            should(normalizePhone('89998887766')).be.equal('79998887766');
        });
    });
});
