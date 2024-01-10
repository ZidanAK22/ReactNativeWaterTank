// AuthHook.tsx
import { useEffect, useState, useCallback } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const useAuthObserver = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  const setAuthenticatedCallback = useCallback((value: boolean) => {
    setAuthenticated(value);
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser: FirebaseAuthTypes.User | null) => {
      setAuthenticatedCallback(!!authUser);
    });

    return () => unsubscribe();
  }, [setAuthenticatedCallback]);

  return authenticated;
};

export default useAuthObserver;
