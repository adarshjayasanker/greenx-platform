import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
    const phone = "918714593851";
    const message = "Hello Greenx, I would like to know more about your pest control services.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return(
        <a href={url} target="_blank" rel="noopener noreferrer" className="fixed bottom-30 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"><MessageCircle size={26}/></a>
    )
};

export default WhatsappButton;