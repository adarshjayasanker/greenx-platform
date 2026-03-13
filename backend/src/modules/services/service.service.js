import Service from "./service.model.js";

export const createService = async(data) => {
    return await Service.create(data);
};

export const getAllServices = async() => {
    return (await Service.find()).toSorted({createdAt: -1});
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
