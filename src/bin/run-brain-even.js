#!/usr/bin/env node

import gamesEngine from '../games-engine/engine';

import {
  excerciseMessage, excerciseText, rightAnswer,
} from '../games/brain-even';

gamesEngine(excerciseMessage, excerciseText, rightAnswer);
