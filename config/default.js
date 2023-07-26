require('dotenv').config();
// TODO: This code is used in prod mode.
module.exports = {
  port: process.env.PORT,
  tokenSecret: process.env.TOKEN_SECRET,
  nodeEnv: process.env.NODE_ENV,
  captchaSecretKey: process.env.CAPTCHA_SECRET_KEY,

  dbConfig: {
    connectionString: process.env.CONNECTION_STRING,
    databaseName: process.env.DATABASE_NAME,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
  logLevel: process.env.LOGLEVEL || 'debug',
  db: {
    host: process.env.DB_HOST,
    databaseName: process.env.DB_NAME,
    databaseUser: process.env.DB_USER_NAME,
    databasePassword: process.env.DB_USER_PASSWORD,
  },
  loggingMedium: process.env.LOGGING_MEDIUM || 'console',
};
