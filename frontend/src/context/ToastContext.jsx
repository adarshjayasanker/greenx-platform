import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({children}) => {
    const [toast, setToast] = useState(null);
    const showToast = ({message, type = "Success"}) => {
        setToast({message, type});
        setTimeout(() => {
            setToast(null);
        }, 3000);
    };
    return(
        <ToastContext.Provider value={{showToast}}>
            {children}
            {toast && (
                <div className="fixed bottom-6 right-6 z-[999]">
                    <div className={`px-5 py-3 rounded-lg shadow-lg text-white ${toast.type === "Success" ? "bg-green-600" : "bg-red-500"}`}>{toast.message}</div>
                </div>
            )}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext);