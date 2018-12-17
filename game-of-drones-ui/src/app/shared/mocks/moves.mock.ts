import { Move } from '../models/move';
// TBD: Moves values should come from the API
export const Moves: Move[] = [
  { name: 'rock', beats: 'scissors' },
  { name: 'scissors', beats: 'paper' },
  { name: 'paper', beats: 'rock' }
];
