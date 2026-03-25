const ServiceCardSkeleton = () => {
    return(
        <div className="animate-pulse p-4 rounded-xl shadow">
            <div className="h-40 bg-green-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-green-200 w-3/4 mb-2"></div>
            <div className="h-4 bg-green-200 w-1/2"></div>
        </div>
    )
}

export default ServiceCardSkeleton;