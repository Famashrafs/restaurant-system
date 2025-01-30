import React, { createContext, useState, useEffect, useContext } from 'react';  // Import useContext here
import { onAuthStateChanged , signOut } from 'firebase/auth';
import { auth } from '../firebase';  // Firebase auth initialization


// Create and export the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Set the user state when authentication state changes
        });

        return () => unsubscribe();  // Cleanup subscription when the component unmounts
    }, []);

    const logout = async () => {
        try {
          await signOut(auth); // Firebase sign out
          console.log('User logged out');
        } catch (error) {
          console.error('Error logging out:', error.message);
        }
      };

    return (
        <AuthContext.Provider value={{ user, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export a custom hook to easily access the context
export const useAuth = () => {
    return useContext(AuthContext);  // Now useContext will work correctly
};
