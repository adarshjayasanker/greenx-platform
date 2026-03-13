import { Star } from "lucide-react";

const GoogleRating =  () => {
    return(
        <div className="flex flex-col items-center mt-6">
            <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
            </div>
            <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">4.8 Google Rating</span> based on 120+ customer reviews.
            </p>
        </div>
    )
}

export default GoogleRating;