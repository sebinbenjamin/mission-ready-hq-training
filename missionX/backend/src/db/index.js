const mysql = require('mysql2/promise');
const { config } = require('../config/db.config');

let pool = null;

const getConnection = async () => {
  const poolConfig = {
    ...config,
    connectionLimit: 3,
    queueLimit: 5,
  };
  pool = await mysql.createPool(poolConfig);
  setListeners(pool);
};

const setListeners = (pool) => {
  // Event when a new connection is made within the pool
  pool.on('enqueue', () => {
    console.log('Waiting for available connection slot');
  });

  // Event when a callback has been queued to wait for an available connection.
  pool.on('acquire', (connection) => {
    console.log('Connection %d acquired', connection.threadId);
  });

  // Called after all release activity has been performed on the connection
  pool.on('release', function (connection) {
    console.log('Connection %d released', connection.threadId);
  });
};

module.exports = { getConnection, connection: pool };
