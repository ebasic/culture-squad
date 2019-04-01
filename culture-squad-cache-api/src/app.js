import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import logging from './logging-helper';

import indexRouter from './route';

const app = express();
dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);

process.on('uncaughtException', function (error) {
  logging.error(error);
});

export default app;
