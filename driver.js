'use strict';
const event = require('./events');

event.on('pickup', pickupHandler);

function pickupHandler(order) {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${order.orderId}`);
        event.emit('in-transit', order);
        setTimeout(() => {
            console.log(`DRIVER: dilevered order ${order.orderId}`);
            event.emit('delivered', order);
        }, 3000);
    }, 1000);
}
