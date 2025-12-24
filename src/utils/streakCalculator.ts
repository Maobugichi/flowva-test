import type { CheckIn } from '../types/checkIn';

export const calculateStreak = (checkIns: CheckIn[]): number => {
  if (checkIns.length === 0) {
    return 0;
  }

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

 
  const checkedInToday = checkIns.some(c => {
    const checkInDate = new Date(c.check_in_date);
    checkInDate.setHours(0, 0, 0, 0);
    return checkInDate.getTime() === today.getTime();
  });

 
  const checkedInYesterday = checkIns.some(c => {
    const checkInDate = new Date(c.check_in_date);
    checkInDate.setHours(0, 0, 0, 0);
    return checkInDate.getTime() === yesterday.getTime();
  });

  const startDay = checkedInToday ? 0 : (checkedInYesterday ? 1 : -1);

  
  if (startDay === -1) {
    return 0;
  }

  
  for (let i = startDay; i < checkIns.length + startDay; i++) {
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() - i);
    expectedDate.setHours(0, 0, 0, 0);

    const matchingCheckIn = checkIns.find(c => {
      const checkInDate = new Date(c.check_in_date);
      checkInDate.setHours(0, 0, 0, 0);
      return checkInDate.getTime() === expectedDate.getTime();
    });

    if (matchingCheckIn) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};