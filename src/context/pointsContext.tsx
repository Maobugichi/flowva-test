import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

interface PointsContextType {
  totalPoints: number;
  loading: boolean;
  refreshPoints: () => Promise<void>;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const PointsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [totalPoints, setTotalPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadUserPoints = async (uid: string) => {
    try {
      const { data: pointsData } = await supabase
        .from('user_points')
        .select('total_points')
        .eq('user_id', uid)
        .single();

      if (pointsData) {
        setTotalPoints(pointsData.total_points);
      } else {
        setTotalPoints(0);
      }
    } catch (error) {
      console.error('Error loading points:', error);
      setTotalPoints(0);
    } finally {
      setLoading(false);
    }
  };

  const refreshPoints = async () => {
    if (user?.id) {
      await loadUserPoints(user.id);
    }
  };

  useEffect(() => {
    if (user?.id) {
      loadUserPoints(user.id);
    }
  }, [user?.id]);

  return (
    <PointsContext.Provider value={{ totalPoints, loading, refreshPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints must be used within PointsProvider');
  }
  return context;
};