import asyncHandler from "../../utils/asyncHandler.js";
import { createService, deleteService, getAllServices, getServiceBySlug, updateService } from "./service.service.js";

const serviceControllers = {

    createService: asyncHandler(async(req, res) => {
        const service = await createService(req.body);
        res.status(201).json(service);
    }),

    getServices: asyncHandler(async(req, res) => {
        const services = await getAllServices();
        res.json(services);
    }),

    getService: asyncHandler(async(req, res) => {
        const service = await getServiceBySlug(req.params.slug);
        if(!service){
            res.status(404);
            throw new Error("Service not found");
        }
        res.json(service);
    }),

    updateService: asyncHandler(async(req, res) => {
        const service = await updateService(req.params.id, req.body);
        res.json(service);
    }),

    deleteService: asyncHandler(async(req, res) => {
        await deleteService(req.params.id);
        res.json({message: "Service deleted"});
    }),
};

export default serviceControllers;