import asyncHandler from "../../utils/asyncHandler.js";
import uploadToCloudinary from "../../utils/uploadToCloudinary.js";
import { createServiceFn, deleteService, getAllServicesFn, getServiceBySlug, updateServiceFn } from "./service.service.js";

const serviceControllers = {

    createService: asyncHandler(async(req, res) => {
        const {title, slug, shortDescription, fullDescription, featured} = req.body;
        console.log(req.body, 'Body');
        console.log(req.files, 'Files');
        
        
        let heroImageUrl = null;

        const galleryUrls = [];

       try{
         if(req.files?.heroImage){
            const heroUpload = await uploadToCloudinary(req.files.heroImage[0].buffer);
            heroImageUrl = heroUpload.secure_url;
        }
        if(req.files?.galleryImages){
            for(const file of req.files.galleryImages){
                const upload = await uploadToCloudinary(file.buffer);
                galleryUrls.push(upload.secure_url);
            }
        }
        const service = await createServiceFn({
            title,
            slug,
            shortDescription,
            fullDescription,
            heroImage: heroImageUrl,
            galleryImages: galleryUrls,
            featured: featured === 'true',
        });
        console.log(service);
        
        res.status(201).json({message: "Service Created successfully", service});
       }catch(error){
        console.error('Cloudinary error:', error);
        
       }
    }),

    getServices: asyncHandler(async(req, res) => {
        console.log("CREATE SERVICE CONTROLLER HIT");
        const services = await getAllServicesFn();
        console.log(services);
        
        res.status(200).json({message: "Services fetched successfully.", services});
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
        const service = await updateServiceFn(req.params.id, req.body, req.files);
        res.json(service);
    }),

    deleteService: asyncHandler(async(req, res) => {
        await deleteService(req.params.id);
        res.json({message: "Service deleted"});
    }),
};

export default serviceControllers;