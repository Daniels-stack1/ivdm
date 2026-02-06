import { VERSES } from './constants';
import { Verse } from './types';

/**
 * Returns a consistent verse for the current day.
 * Uses the day of the year (0-365) to select an index from the verses array.
 * If the array is shorter than 365, it will loop back using the modulo operator.
 */
export const getDailyVerse = (): Verse => {
  const now = new Date();
  
  // Create a date for January 1st of the current year
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  
  // Calculate difference in milliseconds
  const diffInMs = now.getTime() - startOfYear.getTime();
  
  // Convert milliseconds to days
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diffInMs / msPerDay);

  // We use the modulo (%) operator to avoid index out of bounds if the array is not exactly 365 long.
  // This ensures that even if you have 10, 100 or 365 verses, it works perfectly.
  const index = dayOfYear % VERSES.length;
  
  return VERSES[index];
};