interface ProgressProps {
  value: number;
  max?: number;
}

export const Progress = ({ value, max = 5000 }: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="h-2 bg-[#e5e7eb] rounded-[9999px] overflow-hidden">
      <div
        className="
          h-full 
          bg-linear-to-br from-[#9013fe] to-[#FF9FF5] 
          rounded-full 
          transition-[width] duration-500 ease-in-out
        "
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
