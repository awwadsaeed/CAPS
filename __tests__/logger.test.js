'use strict';
const event = require('../events');
require('../logger');

describe('logger tests', () => {
    beforeEach(() => {
        jest.spyOn(global.console, 'log');
    })

    test('pickup logger test', () => {
        event.emit('pickup', {});
        expect(console.log).toHaveBeenCalled();
    })
    test('delivered logger test', () => {
        event.emit('delivered', {});
        expect(console.log).toHaveBeenCalled();
    })
    test('in-transit logger test', () => {
        event.emit('in-transit', {});
        expect(console.log).toHaveBeenCalled();
    })
})