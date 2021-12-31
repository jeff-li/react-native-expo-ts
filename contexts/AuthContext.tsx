import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export type AuthContextData = {
  authData?: AuthData;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};
    
export type AuthData = {
  token: string;
  email: string;
  name: string;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadSecureStorageData();
  }, []);

  async function loadSecureStorageData(): Promise<void> {
    try {
      setLoading(true);
      //Try get the data from Secure Store
      const authDataSerialized = await SecureStore.getItemAsync('authData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      //loading finished
      setLoading(false);
    }
  }

  const signIn = async () => {
    setLoading(true);
    try {
      //call the service passing credential (email and password).
      //In a real App this data will be provided by the user from some InputText components.
      await new Promise(resolve => setTimeout(resolve, 1000));

      //Set the data in the context, so the App can be notified
      //and send the user to the AuthStack
      const _authData = {
        token: 'someToken',
        email: 'test@test.com',
        name: 'test user',
      }
      // Persist the data to be recovered in the next user session.
      // WARNING: Async Storage is not secure enough to secure sensitive information
      // alternative options: react-native-keychain or expo-secure-store
      // https://stackoverflow.com/questions/39148714/is-react-natives-async-storage-secure
      await SecureStore.setItemAsync('authData', JSON.stringify(_authData))
      setAuthData(_authData);
      setLoading(false)
    } catch(e) {
      setLoading(false)
    }
  };

  const signOut = async () => {
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setLoading(true);
    try {
      setAuthData(undefined);
      await new Promise(resolve => setTimeout(resolve, 1000));
      //Remove the data from Async Storage
      //to NOT be recovered in next session.
      await SecureStore.deleteItemAsync('authData');
      setLoading(false)
    } catch(e) {
      setLoading(false)
    }
  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
