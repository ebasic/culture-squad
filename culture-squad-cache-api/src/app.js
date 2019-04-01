import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './route';

const app = express();
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://c0aa8a200b8b4fed9998ee61dff06ac0@sentry.io/1428332' });
dotenv.config();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);

export default app;
