#!/usr/bin/env node

import { getUserName } from '..';

const brainGames = () => {
  getUserName();
  console.log('Welcome to the Brain Games!');
};

export default brainGames;
