'use strict';

const Waterline = require('waterline');

let Loan = Waterline.Collection.extend({
  identity: 'loans',
  connection: 'myLocalPostgres',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    amount: 'integer',
    balance: 'integer',
    rate_plan_id: 'integer',
    description: 'text',
    active: 'boolean',
    funded: 'boolean',

    donations: {
      collection: 'donations',
      via: 'loan'
    },
    payments: {
      collection: 'payments',
      via: 'loan'
    },
    borrower: {
      model: 'borrowers'
    },
    group: {
      model: 'groups'
    }
  }
});

module.exports = Loan;
