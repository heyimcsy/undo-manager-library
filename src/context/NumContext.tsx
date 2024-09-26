import { createContext, useContext, useState } from 'react';

// Context 생성
const NumContext = createContext(null);

// Provider 컴포넌트
export function NumProvider({ children }) {
    const [num, setNum] = useState([]);

    return (
        <NumContext.Provider value={{ num, setNum }}>
            {children}
        </NumContext.Provider>
    );
}

// Context를 사용할 수 있도록 하는 커스텀 훅
export function useNum() {
    const context = useContext(NumContext);
    if (!context) {
        throw new Error('useNum must be used within a NumProvider');
    }
    return context;
}