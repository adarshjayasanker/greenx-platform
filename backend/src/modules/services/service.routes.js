import express from 'express';
import serviceControllers from './service.controller';
const {createService, getServices, getService} = serviceControllers;
import protect from '../../middleware/authMiddleware';
import { deleteService, updateService } from './service.service';

const serviceRoutes = express.Router();

serviceRoutes.get('/services', getServices);
serviceRoutes.get('/:slug', getService);

serviceRoutes.post('/createservice', protect, createService);
serviceRoutes.patch('/service/:id', protect, updateService);
serviceRoutes.delete('/service/:id', protect, deleteService);

export default serviceRoutes;
