import express from 'express';
import serviceControllers from './service.controller.js';
const {createService, getServices, getService, deleteService, updateService} = serviceControllers;
import protect from '../../middleware/authMiddleware.js';
import upload from '../../middleware/upload.js';

const serviceRoutes = express.Router();

serviceRoutes.patch('/:id', protect, upload.fields([{name: 'heroImage', maxCount: 1}, {name: 'galleryImages', maxCount: 10}]), updateService);

serviceRoutes.get('/', getServices);
serviceRoutes.get('/slug/:slug', getService);


serviceRoutes.post('/createservice', protect, upload.fields([{name: 'heroImage', maxCount: 1}, {name: 'galleryImages', maxCount: 10}]), createService);
serviceRoutes.delete('/remove/:id', protect, deleteService);

export default serviceRoutes;
