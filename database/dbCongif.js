const knex = require("knex");

const knexConfig = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development";

module.export = knex(knexConfig[dbEnv]);