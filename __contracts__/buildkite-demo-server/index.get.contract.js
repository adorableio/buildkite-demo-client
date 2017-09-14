const { types } = require('api-contracts');

module.exports = {
  title: "Index",
  required: ['name', 'token', 'description', 'updated_at'],

  properties: {
    name: { type: 'string' },
    token: { type: types.token },
    description: { type: 'string' },
    updated_at: { type: 'string' }
  }
};
