import asyncHandler from "../../utils/asyncHandler.js";
import { createLeadService, deleteLead, getAllLeads, updateLead } from "./lead.service.js";

const leadController = {

    createLead: asyncHandler(async(req, res) => {
        const {name, phone, email, location, serviceRequested, message, source} = req.body;
        const cleanedPhone = phone.replace(/\D/g, "");
        const lead = await createLeadService({name, phone: cleanedPhone, email, location, serviceRequested, message, source});
        res.status(201).json({success: true, message: "Lead Created Successfully", data: lead});
    }),

    getLeads: asyncHandler(async(req, res) => {
        const leads = await getAllLeads();
        res.json(leads);
    }),

    updateLead: asyncHandler(async(req, res) => {
        const lead = await updateLead(req.params.id, req.body);
        res.json(lead);
    }),

    deleteLead: asyncHandler(async(req, res) => {
        await deleteLead(req.params.id);
        res.json({message: "Lead deleted"});
    })
}

export default leadController;