import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { usePoints } from '../context/pointsContext';
import { checkInService } from '../services/checkInService';
import { calculateStreak } from '../utils/streakCalculator';
import { hasCheckedInToday as checkIfCheckedInToday } from '../utils/checkInHelpers';
import type { CheckIn } from '../types/checkIn';

export const useCheckIn = () => {
  const { user } = useAuth();
  const { refreshPoints } = usePoints();

  const [currentStreak, setCurrentStreak] = useState(0);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [ points , setPoints ] = useState<number>(0)

  useEffect(() => {
    if (user?.id) {
      loadUserData(user.id);
    }
  }, [user?.id]);

  const loadUserData = async (userId: string) => {
    const checkInsData = await checkInService.loadUserCheckIns(userId);
    setCheckIns(checkInsData);
    setHasCheckedInToday(checkIfCheckedInToday(checkInsData));
    setCurrentStreak(calculateStreak(checkInsData));
  };

  const claimPoints = async () => {
    if (hasCheckedInToday || loading || !user?.id) return;

    setLoading(true);

    try {
      const pointsAdded = await checkInService.claimDailyPoints(user.id);
      
      await loadUserData(user.id);
      await refreshPoints();
      
      setShowModal(true);
      setPoints(pointsAdded)
    } catch (error: any) {
      console.error('Error claiming points:', error);
      
      if (error.message === 'ALREADY_CLAIMED') {
        alert('You already checked in today!');
      } else {
        alert('Failed to claim points. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    currentStreak,
    hasCheckedInToday,
    loading,
    checkIns,
    claimPoints,
    showModal,
    setShowModal,
    points
  };
};