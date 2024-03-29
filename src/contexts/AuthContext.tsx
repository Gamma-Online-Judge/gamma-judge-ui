import { ReactNode, createContext, useEffect, useState } from "react";
import { getUserLocalStorage, postLogin, setUserLocalStorage } from "../actions/login";

interface IProps {
  children?: ReactNode;
}

export interface IUser {
  token?: string;
  id?: string;
  username?: string;
}

interface IAuthContext extends IUser {
  user: IUser | null;
  authenticate: (username: string, senha: string) => Promise<IUser>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function authenticate(username: string, senha: string): Promise<IUser> {
     return postLogin(username, senha).then(response => {
       const _user = {
         token: response['token'],
         username: response['user']['username'],
         id: response['user']['id']
        }
        console.log(response, _user);
      setUser(_user)
      setUserLocalStorage(_user)
      return response;
     }).catch(err => {
      console.log(err.response.statusText);
      throw new Error('Usuário ou senha incorretos')
     });
  }

  useEffect(() => {
    async function loadUser() {
      const userLocalStorage = await getUserLocalStorage();

      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (userLocalStorage) {
        setUser(userLocalStorage);
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  function logout() {
    setUser(null);
    setUserLocalStorage("");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        authenticate,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };