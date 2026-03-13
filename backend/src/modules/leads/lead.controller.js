import asyncHandler from "../../utils/asyncHandler";
import { createLead, deleteLead, getAllLeads, updateLead } from "./lead.service";

const leadController = {

    createLead: asyncHandler(async(req, res) => {
        const lead = await createLead(req.body);
        res.status(201).json(lead);
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