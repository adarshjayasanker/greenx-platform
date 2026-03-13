const ServiceDetail = () => {
    return(
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold">{serviceControllers.title}</h1>
                <p className="text-gray-600 mt-6">{service.description}</p>
            </div>
        </section>
    )
};

export default ServiceDetail;