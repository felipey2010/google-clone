import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  //Global Variables
  const [searchText, setSearchText] = useState("");
  // const [loading, setLoading] = useState(true);
  const [clearText, setClearText] = useState(false);

  //Loading function
  // function loadPage() {
  //   setLoading(true);
  //   //Clear loading screen after 2 seconds
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }

  //function to check the query text
  function checkText() {
    if (searchText === "") {
      setClearText(false);
    } else {
      setClearText(true);
    }
  }

  useEffect(() => {
    checkText();
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <AppContext.Provider
      value={{
        searchText,
        setSearchText,
        // loading,
        // setLoading,
        clearText,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
