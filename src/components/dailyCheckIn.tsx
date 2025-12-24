import { Zap } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Slate } from './slate';
import { useCheckIn } from '../hooks/useCheckIn';
import { getTodayIndex, isDayCheckedIn } from '../utils/checkInHelpers';

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export const DailyCheckIn = () => {
  const { user, isInitialized } = useAuth();
  const { currentStreak, hasCheckedInToday, loading, checkIns, claimPoints } = useCheckIn();
  const todayIndex = getTodayIndex();

  if (!isInitialized) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Please sign in to claim daily points</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="font-extrabold text-[36px] text-[#9013FE] mb-2">
        {currentStreak} {currentStreak === 1 ? 'day' : 'days'}
      </div>
      
      <div className="flex mt-4 space-x-2 justify-center">
        {DAYS.map((day, index) => (
          <Slate
            key={index}
            item={day}
            active={index === todayIndex}
            checked={isDayCheckedIn(checkIns, index)}
            hasClaimedToday={hasCheckedInToday}
          />
        ))}
      </div>
      
      <p className="text-[0.875rem] text-gray-600 text-center mt-3">
        Check in daily to earn +5 points
      </p>
      
      <button
        onClick={claimPoints}
        disabled={hasCheckedInToday || loading}
        className={`mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
          hasCheckedInToday || loading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#9013FE] text-white hover:shadow-[0_4px_12px_rgba(144,19,254,0.2)] hover:-translate-y-0.5'
        }`}
      >
        <Zap className="h-5 w-5" />
        {loading
          ? 'Claiming...'
          : hasCheckedInToday
          ? 'Claimed Today'
          : 'Claim Today\'s Points'}
      </button>
    </div>
  );
};
