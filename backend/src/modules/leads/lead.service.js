import Lead from "./lead.model";

export const createLead = async(data) => {
    return await Lead.create(data);
};

export const getAllLeads = async() => {
    return (await Lead.find().populate("serviceRequested")).toSorted({createdAt: -1});
};

export const updateLead = async(id, data) => {
    return await Lead.findByIdAndUpdate(id, data, {new: true});
};

export const deleteLead = async(id) => {
    return await Lead.findByIdAndDelete(id);
};