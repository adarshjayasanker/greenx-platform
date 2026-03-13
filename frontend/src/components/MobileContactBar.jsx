const MobileContactBar = () => {
    const phone = "918714593851";
    return(
        <div className="fixed bottom-0 left-0 w-full bg-green-600 text-white flex items-center justify-center py-4 shadow-lg md:hidden z-50">
            <a href={`tel:${phone}`} className="font-semibold text-lg tracking-wide">📞 Call Now</a>
        </div>
    )
};

export default MobileContactBar;