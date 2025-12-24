import { type CheckIn, weekdayMap } from '../types/checkIn';

export const getTodayIndex = (): number => {
  return weekdayMap[
    new Date().toLocaleDateString("en-US", { weekday: "long" })
  ];
};

export const isDayCheckedIn = (checkIns: CheckIn[], dayIndex: number): boolean => {
  return checkIns.some((c) => {
    const checkInDate = new Date(c.check_in_date);
    const checkInDayName = checkInDate.toLocaleDateString("en-US", { weekday: "long" });
    const checkInIndex = weekdayMap[checkInDayName];
    return checkInIndex === dayIndex;
  });
};

export const hasCheckedInToday = (checkIns: CheckIn[]): boolean => {
  const today = new Date().toISOString().split('T')[0];
  return checkIns.some((c) => c.check_in_date === today);
};