'use strict';
const event = require('./events');
require('dotenv').config();
const faker = require('faker');
const uuid = require('uuid').v4;
    // method to be executed;
    let order = {
        orderId: uuid(),
        storeName: process.env.STORE,
        customerName: faker.name.findName(),
        address:faker.address.streetAddress(),
    }
    event.emit('pickup',order);


event.on('delivered',deliveredHandler);
function deliveredHandler(order){
    console.log(`VENDOR: Thank you for delivering ${order.orderId}`);
};


