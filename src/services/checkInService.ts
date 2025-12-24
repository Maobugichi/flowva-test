import { supabase } from '../lib/supabase';
import type { CheckIn } from '../types/checkIn';

export const checkInService = {
  async loadUserCheckIns(userId: string): Promise<CheckIn[]> {
    const { data } = await supabase
      .from('check_ins')
      .select('*')
      .eq('user_id', userId)
      .order('check_in_date', { ascending: false });

    return data || [];
  },

  async claimDailyPoints(userId: string, pointsToAdd: number = 5) {
    const today = new Date().toISOString().split('T')[0];

   
    const { error: checkInError } = await supabase
      .from('check_ins')
      .insert({
        user_id: userId,
        check_in_date: today,
        points_earned: pointsToAdd,
      });

    if (checkInError) {
      if (checkInError.code === '23505') {
        throw new Error('ALREADY_CLAIMED');
      }
      throw checkInError;
    }

  
    const { data: existingPoints } = await supabase
      .from('user_points')
      .select('total_points')
      .eq('user_id', userId)
      .single();

    if (existingPoints) {
      await supabase
        .from('user_points')
        .update({
          total_points: existingPoints.total_points + pointsToAdd,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId);
    } else {
      await supabase
        .from('user_points')
        .insert({
          user_id: userId,
          total_points: pointsToAdd,
        });
    }

    return pointsToAdd;
  },
};