import { combineReducers } from '@reduxjs/toolkit';
import { combineEpics, Epic } from 'redux-observable';
import { loadMessageEpic } from './modules/messages';
import app from './modules/app';
import counter from './modules/counter-toolkit';
import messages, { name as messagesName } from './modules/messages';

export const rootEpic = combineEpics(loadMessageEpic) as Epic;

const rootReducer = combineReducers({ app, counter, [messagesName]: messages });

export default rootReducer;
