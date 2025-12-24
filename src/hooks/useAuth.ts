import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";


interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

 
  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email!,
          });
        }
        setIsInitialized(true);
      } catch (err) {
        console.error("Error initializing auth:", err);
        setIsInitialized(true);
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth event:", event);
        
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email!,
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return null;
      }

      
      setLoading(false);
      return { user: data.user };
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred");
      setLoading(false);
      return null;
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError || !data.user) {
        setError(authError?.message || "Registration failed");
        setLoading(false);
        return null;
      }

      
      setLoading(false);
      return { user: data.user };
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("Unexpected error occurred");
      setLoading(false);
      return null;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { user, login, register, logout, loading, error, isInitialized };
};