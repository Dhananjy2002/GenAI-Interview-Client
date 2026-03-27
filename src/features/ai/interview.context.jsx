import { createContext, useState } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
    const [currentReport, setCurrentReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <InterviewContext.Provider
            value={{
                currentReport,
                setCurrentReport,
                loading,
                setLoading,
                error,
                setError
            }}
        >
            {children}
        </InterviewContext.Provider>
    );
};
