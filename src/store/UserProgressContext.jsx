import { createContext, useState } from "react";

const UserProgresContext = createContext({
    progress: '', // 'cart', 'checkout'
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

function UserProgresContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkout');
    }

    function hideCheckout(){
        setUserProgress('');
    }

    const UserProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };


    return (
        <UserProgressContext.Provider value={userProgress}>{children}</UserProgressContext.Provider>
    );
}

export default UserProgresContext;