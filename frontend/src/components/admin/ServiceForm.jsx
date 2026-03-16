import { useState } from "react";

const generateSlug = (text) => {
    return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const ServiceForm = ({onSuccess}) => {
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
    const handleTitleChange = (e) => {
        const title = e.target.value;
        setFormData({
            ...formData,
            title,
            slug: generateSlug(title)
        });
    }
    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }
    const handleHeroUpload = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            heroImage: file
        });
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
        setGalleryPreview(prev => prev.filter((_, i) => i !== index));
        setFormData(prev => ({
            ...prev,
            galleryImages: prev.galleryImages.filter((_, i) => i !== index)
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const body = new FormData();
        body.append('title', formData.title);
        body.append('slug', formData.slug);
        body.append('shortDescription', formData.shortDescription);
        body.append('fullDescription', formData.fullDescription);
        body.append('featured', formData.featured);
        body.append('heroImage', formData.heroImage);
        formData.galleryImages.forEach(img => {
            body.append('galleryImages', img);
        });
        const res = await fetch('http://localhost:5000/services/createservice', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body
        });
        if(res.ok){
            alert('service created');
            if(onSuccess) onSuccess();
        }else{
            alert('failed to create new service');
        }
    }
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
                <textarea name="shortDescription" onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" rows={3}/>
            </div>
            <div>
                <label className="block font-medium">Full Description</label>
                <textarea name="fullDescription" onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" rows={6}></textarea>
            </div>
            <div>
                <label className="block font-medium">Hero Image</label>
                {heroPreview && (
                    <div className="mt-3">
                        <img src={heroPreview} alt="Hero Preview" className="w-full object-cover rounded-md border"/>
                    </div>
                )}
                <input type="file" name="heroImage" onChange={handleHeroUpload} className="border border-gray-300 rounded-md p-2 w-full"/>
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
            <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-2 rounded-md font-medium">Save Service</button>
        </form>
    )
};

export default ServiceForm;