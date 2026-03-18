import cloudinary from "../../config/cloudinary.js";
import uploadToCloudinary from "../../utils/uploadToCloudinary.js";
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

export const updateServiceFn = async(id, data, files) => {
   const service = await Service.findById(id);
   if(!service) throw new Error("Service not found");
   const {title, slug, shortDescription, fullDescription, featured, removedImages} = data;
   if(removedImages){
    const parsed = JSON.parse(removedImages);
    for(const url of parsed){
        const publicId = url.split('/').slice(-2).join('/').split('.')[0];
        await cloudinary.uploader.destroy(publicId);
    }
    service.galleryImages = service.galleryImages.filter(img => !parsed.includes(img));
   }
   if(files?.heroImage){
    if(service.heroImage){
        const publicId = service.heroImage.split('/').slice(-2).join('/').split('.')[0];
        await cloudinary.uploader.destroy(publicId);
    }
    const upload = await uploadToCloudinary(files.heroImage[0].buffer);
    service.heroImage = upload.secure_url;
   }
   if(files.galleryImages){
    for(const file of files.galleryImages){
        const upload = await uploadToCloudinary(file.buffer);
        service.galleryImages.push(upload.secure_url);
    }
   }
   service.title = title;
   service.slug = slug;
   service.shortDescription = shortDescription;
   service.fullDescription = fullDescription;
   service.featured = featured;
   return await service.save();
};

export const deleteService = async(id) => {
    return await Service.findByIdAndDelete(id);
}
