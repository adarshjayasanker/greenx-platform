import express from 'express';
import createValidation from './lead.validation.js';
import validate from '../../middleware/validateMiddleware.js';
import leadController from './lead.controller.js';
import protect from '../../middleware/authMiddleware.js';
const {createLead, updateLead, getLeads, deleteLead} = leadController;

const leadRoutes = express.Router();

leadRoutes.post('/', createValidation, validate, createLead);

leadRoutes.get('/getLeads', protect, getLeads);
leadRoutes.patch('/lead/:id', protect, updateLead);
leadRoutes.delete('/lead/:id', protect, deleteLead)

export default leadRoutes;