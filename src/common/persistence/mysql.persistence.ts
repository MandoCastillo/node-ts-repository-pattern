import { createPool } from 'mysql2/promise';

export default createPool({
  host: process.env.db_mysql_host,
  user: process.env.db_mysql_user,
  password: process.env.db_mysql_password,
  database: process.env.db_mysql_database,
  decimalNumbers: true
  // truehost: 'localhost',
  // user:'root',
  // // port: 3306 as string,
  // password: 'root',
  // database: 'kodoti_wallet',
  // decimalNumbers: true
});
