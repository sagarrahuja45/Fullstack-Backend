import AWS from 'aws-sdk';
import config from 'config';
import winston from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';

class Logger {
  constructor() {
    const transports = [
      new winston.transports.Console({
        level: config.get('logLevel'),
      }),
    ];
    if (config.get('loggingMedium') === 'cloudwatch') {
      transports.push(
        new WinstonCloudWatch({
          cloudWatchLogs: new AWS.CloudWatchLogs(),
          logGroupName: config.get('logGroupName'),
          logStreamName: 'user-manager',
          awsConfig: {
            region: config.get('awsRegion'),
          },
        }),
      );
    }
    this.winstonLogger = winston.createLogger({
      transports,
    });
  }

  info(message) {
    this.message(message, 'info');
  }

  error(message) {
    this.message(message, 'error');
  }

  warn(message) {
    this.message(message, 'warn');
  }

  message(message, level = 'info') {
    const allowedLogLevels = [
      'error',
      'warn',
      'info',
      'http',
      'verbose',
      'debug',
      'silly',
    ];
    if (
      typeof level !== 'string' ||
      !allowedLogLevels.includes(level)
    ) {
      // eslint-disable-next-line no-param-reassign
      level = 'info';
    }
    this.winstonLogger.log(level, message);
  }
}
const logger = new Logger();
export default logger;
