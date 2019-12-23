#!/usr/bin/env node

import gamesEngine from '../games-engine/engine';

import {
  excerciseMessage, excerciseText, rightAnswer,
} from '../games/brain-progression';

gamesEngine(excerciseMessage, excerciseText, rightAnswer);
