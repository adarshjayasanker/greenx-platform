import { useEffect, useRef, useState } from "react";

const ServiceDropdown = ({services, value, onChange}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const selectedService = services.find((s) => s._id === value);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return() => document.removeEventListener('mousedown', handleClickOutside)
    }, []);
    return(
        <div ref={dropdownRef} className="relative">
            <button type="button" onClick={() => setOpen((prev) => !prev)} className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500">
                <span className={selectedService ? "text-gray-800" : "text-gray-400"}>{selectedService?.title || "Select Service"}</span>
                <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"/>
                </svg>
            </button>
            {open && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {services.map((s) => (
                        <div key={s._id} onClick={() => {
                            onChange(s._id);
                            setOpen(false);
                        }} className="px-4 py-3 cursor-pointer hover:bg-green-50 transition">{s.title}</div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default ServiceDropdown;