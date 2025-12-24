import { Progress } from './progress';
import { usePoints } from '../context/pointsContext';
import AnimatedCoinBadge from './common/AnimationStar';

export const PointsProgress = () => {
 const { totalPoints, loading } = usePoints();
   
 

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex  justify-between  items-center">
        <div className="font-extrabold text-[36px] text-[#9013fe] m-[10px_0]">
          {totalPoints}
        </div>
        <div className="ml-auto">
          <AnimatedCoinBadge/>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">
            Progress to{' '}
            <span className="font-medium">$5 Gift Cards</span>
          </span>
          <span className="font-medium">
            {totalPoints}/5000
          </span>
        </div>
        <Progress value={totalPoints} />
        <p className="text-xs text-gray-500 mt-2">
          {totalPoints === 0 
            ? "Just getting started - keep earning points!"
            : totalPoints < 1000
            ? "Great start! Keep going to unlock rewards!"
            : totalPoints < 3000
            ? "You're making progress! Almost halfway there!"
            : totalPoints < 5000
            ? "So close! Just a bit more to unlock your reward!"
            : "Congratulations! You've reached your goal! 🎉"
          }
        </p>
      </div>
    </div>
  );
};