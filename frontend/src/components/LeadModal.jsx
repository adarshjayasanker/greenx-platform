import { useEffect } from "react";
import { useLead } from "../context/LeadContext"
import LeadForm from "./LeadForm";

const LeadModal = () => {
    const {isOpen, closeLeadModal} = useLead();
    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        return() => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen

    ]);
    if(!isOpen) return null;
    return(
        <div className="fixed inset-0 z-50">
           <div className="absolute inset-0 bg-black/50" onClick={closeLeadModal}>
                <div className="absolute inset-0 flex items-end md:items-center md:justify-center">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[90vh] overflow-y-auto overscroll-contain rounded-t-2xl md:rounded-xl md:max-w-lg p-6 relative">
                        <button onClick={closeLeadModal} className="absolute top-4 right-4 text-gray-500">✕</button>
                        <LeadForm/>
                    </div>
                </div>
           </div>
        </div>
    )
};

export default LeadModal;