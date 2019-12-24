#!/usr/bin/env node

import gamesEngine from '../games-engine/engine';

import {
  excerciseMessage, getQuestionAndRightAnswer,
} from '../games/brain-prime';

gamesEngine(excerciseMessage, getQuestionAndRightAnswer);
