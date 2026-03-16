import Service from "./service.model.js";

export const createServiceFn = async(data) => {
    const newService = await Service.create(data);
    console.log(newService);
    return newService;
};

export const getAllServicesFn = async() => {
    const services = await Service.find({});
    return services;
};

export const getServiceBySlug = async(slug) => {
    return await Service.findOne({slug});
};

export const updateService = async(id, data) => {
    return await Service.findByIdAndUpdate(id, data, {new: true});
};

export const deleteService = async(id) => {
    return await Service.findByIdAndDelete(id);
}
