'use strict';
const event = require('./events');
require('dotenv').config();
const faker = require('faker');
const uuid = require('uuid').v4;
const interval = setInterval(function () {
    // method to be executed;
    let order = {
        orderId: uuid(),
        storeName: process.env.STORE,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    event.emit('pickup',order);

}, 5000);
// clearInterval(interval);

event.on('delivered',deliveredHandler);
function deliveredHandler(order){
    console.log(`VENDOR: Thank you for delivering ${order.orderId}`);
};


