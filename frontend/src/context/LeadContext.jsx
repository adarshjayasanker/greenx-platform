import { createContext, useContext, useState } from "react";

const LeadContext = createContext();

export const LeadProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [leadData, setLeadData] = useState({
        serviceId: null,
        source: null,
    });
    const openLeadModal = (data = {}) => {
        setLeadData({
            serviceId: data.serviceId || null,
            source: data.source || "UNKNOWN",
        });
        setIsOpen(true);
    };
    const closeLeadModal = () => {
        setIsOpen(false);
        setLeadData({serviceId: null, source: null});
    }
    return(
        <LeadContext.Provider value={{isOpen, leadData, openLeadModal, closeLeadModal}}>
            {children}
        </LeadContext.Provider>
    )
};

export const useLead = () => useContext(LeadContext);