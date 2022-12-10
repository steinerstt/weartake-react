import { createContext, useState } from "react";
import { Loading } from "../components/Loading";

export const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (boolean) => {
    setIsLoading(boolean);
  };

  return (
    <LoadingContext.Provider value={{ handleLoading }}>
      {isLoading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};
