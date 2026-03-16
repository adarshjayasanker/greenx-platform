import express from 'express';
import serviceControllers from './service.controller.js';
const {createService, getServices, getService} = serviceControllers;
import protect from '../../middleware/authMiddleware.js';
import { deleteService, updateService } from './service.service.js';
import upload from '../../middleware/upload.js';

const serviceRoutes = express.Router();

serviceRoutes.get('/showservices', getServices);
serviceRoutes.get('/:slug', getService);

serviceRoutes.post('/createservice', protect, upload.fields([{name: 'heroImage', maxCount: 1}, {name: 'galleryImages', maxCount: 10}]), createService);
serviceRoutes.patch('/service/:id', protect, updateService);
serviceRoutes.delete('/service/:id', protect, deleteService);

export default serviceRoutes;
