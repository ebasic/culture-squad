import * as winston from 'winston';
import * as fs from 'fs';
import moment from 'moment';

const logsDirectory = './logs';

if ( !fs.existsSync( logsDirectory ) ) {
  // Create the directory if it does not exist
  fs.mkdirSync( logsDirectory );
}

let logger = winston.createLogger({
  transports: [
    new (winston.transports.File)({
      name: 'error-file',
      dirname: logsDirectory,
      filename: moment().format('MM-DD-YYYY')+'-error-log.log',
      level: 'error',
      json: false,
      prettyPrint: true,
      handleExceptions: true,
      humanReadableUnhandledException: true
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      name: 'exceptions-file',
      dirname: logsDirectory,
      json: false,
      prettyPrint: true,
      filename: moment().format('MM-DD-YYYY')+'-exceptions-log.log' })
  ],
  exitOnError: false
});

logger.on('logging', function (transport, level, msg, meta) {
  console.log(level+' ||| '+msg+ ' ||| '+meta);
});

module.exports = logger;

