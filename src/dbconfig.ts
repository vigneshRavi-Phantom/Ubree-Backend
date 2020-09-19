import {Sequelize} from 'sequelize';
import bluebird from 'bluebird'
import redis from "redis";
bluebird.promisifyAll(redis)
//Initializing Connection
export const sequelize =new Sequelize('sqlite::memory:')
export const client = redis.createClient();
client.on("error", (err: Error) => {
  console.log(err);
});
// Defining Models


