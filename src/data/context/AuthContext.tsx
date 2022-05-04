import Cookies from "js-cookie";
import route from "next/router";
import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "../../model/User";

interface AuthContextProps {
  user?: User;
  charging?: boolean;
  register?: (email: string, password: string) => Promise<void>;
  login?: (email: string, password: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function userNormalized(firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  };
}

function cookieManage(logged: boolean) {
  if (logged) {
    Cookies.set("admin-template-auth", logged, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}

export function AuthProvider(props) {
  const [charging, setCharging] = useState(true);
  const [user, setUser] = useState<User>(null);

  async function sessionConfigure(firebaseUser) {
    if (firebaseUser?.email) {
      const user = await userNormalized(firebaseUser);
      setUser(user);
      cookieManage(true);
      setCharging(false);
      return user.email;
    } else {
      setUser(null);
      cookieManage(false);
      setCharging(false);
      return false;
    }
  }

  async function login(email, password) {
    try {
      setCharging(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await sessionConfigure(resp.user);
      route.push("/");
    } finally {
      setCharging(false);
    }
  }

  async function register(email, password) {
    try {
      setCharging(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await sessionConfigure(resp.user);
      route.push("/");
    } finally {
      setCharging(false);
    }
  }

  async function loginGoogle() {
    try {
      setCharging(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await sessionConfigure(resp.user);
      route.push("/");
    } finally {
      setCharging(false);
    }
  }

  async function logout() {
    try {
      setCharging(true);
      await firebase.auth().signOut();
      await sessionConfigure(null);
    } finally {
      setCharging(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(sessionConfigure);
      return () => cancel();
    } else {
      setCharging(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        charging,
        login,
        register,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
