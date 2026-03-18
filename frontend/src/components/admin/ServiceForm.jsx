import { useEffect, useState } from "react";

const generateSlug = (text) => {
    return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const ServiceForm = ({onSuccess, existingService}) => {

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        shortDescription: "",
        fullDescription: "",
        heroImage: null,
        galleryImages: [],
        featured: false
    });

    const [heroPreview, setHeroPreview] = useState(null);
    const [galleryPreview, setGalleryPreview] = useState([]);
    const [removedImages, setRemovedImages] = useState([]);

    useEffect(() => {
        if(existingService){
            setFormData({
                title: existingService.title || '',
                slug: existingService.slug || '',
                shortDescription: existingService.shortDescription || '',
                fullDescription: existingService.fullDescription || '',
                heroImage: null,
                galleryImages: [],
                featured: existingService.featured || false
            });
            setHeroPreview(existingService.heroImage || null);
            setGalleryPreview(existingService.galleryImages || null);
            setRemovedImages([]);
        }
    }, [existingService]);


    const handleTitleChange = (e) => {
        const title = e.target.value;
        setFormData(prev => ({
            ...prev,
            title,
            slug: generateSlug(title)
        }));
    };

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleHeroUpload = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        if(!file) return;
        setFormData(prev => ({
            ...prev,
            heroImage: file
        }));
        setHeroPreview(URL.createObjectURL(file));
    }

    const handleGalleryUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            galleryImages: [...prev.galleryImages, ...files]
        }));
        const previews = files.map(file => URL.createObjectURL(file));
        setGalleryPreview(prev => [...prev, ...previews]);
        e.target.value = null;
    }

    const removeGalleryImage = (index) => {
        const removed = galleryPreview[index];
        if(typeof removed === 'string'){
            setRemovedImages(prev => [...prev, removed]);
        }
        setGalleryPreview(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            galleryImages: prev.galleryImages.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        const body = new FormData();

        body.append('title', formData.title);
        body.append('slug', formData.slug);
        body.append('shortDescription', formData.shortDescription);
        body.append('fullDescription', formData.fullDescription);
        body.append('featured', formData.featured);
        body.append('removedImages', JSON.stringify(removedImages));

        if(formData.heroImage){
            body.append('heroImage', formData.heroImage);
        }

        formData.galleryImages.forEach(img => {
            body.append('galleryImages', img);
        });

        const url = existingService ? `http://localhost:5000/services/${existingService._id}` : `http://localhost:5000/services/createservice`;
        const method = existingService ? 'PATCH' : 'POST';

        const response = await fetch(url, {
            method,
            headers: {
                Authorization: `Bearer ${token}`
            },
            body
        });
        if(response.ok){
            alert(existingService ? "Service updated" : "Service created");
            onSuccess();
        }else{
            alert('Operation failed');
        }
    };

    return(
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block font-medium">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleTitleChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" required/>
            </div>
            <div>
                <label className="block font-medium">Slug</label>
                <input type="text" name="slug" value={formData.slug} readOnly className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"/>
            </div>
            <div>
                <label className="block font-medium">Short Description</label>
                <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" rows={3}/>
            </div>
            <div>
                <label className="block font-medium">Full Description</label>
                <textarea name="fullDescription" value={formData.fullDescription} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" rows={6}></textarea>
            </div>
            <div>
                <label className="block font-medium">Hero Image</label>
                {heroPreview && (
                    <div className="mt-3">
                        <img src={heroPreview} alt="Hero Preview" className="w-full object-cover rounded-md border"/>
                    </div>
                )}
                <input type="file" name="heroImage" onChange={handleHeroUpload} className="border mt-2 border-gray-300 rounded-md p-2 w-full"/>
            </div>
            <div>
                <label className="block font-medium">Gallery Images</label>
                {galleryPreview.length > 0 && (
                    <div className="grid grid-cols-4 gap-3 mt-3">
                        {galleryPreview.map((img, index) => (
                            <div key={index} className="relative">
                                <img key={index} src={img} alt="Gallery Preview" className="w-full h-24 object-cover rounded-md border"/>
                                <button type="button" className="absolute top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded" onClick={() => removeGalleryImage(index)}>X</button>
                            </div>
                        ))}
                    </div>
                )}
                <input type="file" name="galleryImages" className="border border-gray-300 rounded-md p-2 w-full" multiple onChange={handleGalleryUpload}/>
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" name="featured" onChange={handleChange}/>
                <label>Featured Service</label>
            </div>
            <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-md font-medium">{existingService ? 'Update Service' : 'Create Service'}</button>
        </form>
    )
};

export default ServiceForm;