import express from 'express';
import authRouter from './modules/auth/auth.routes.js';
import errorHandler from './middleware/errorMiddleware.js';
import serviceRoutes from './modules/services/service.routes.js';
import leadRoutes from './modules/leads/lead.routes.js';
import testimonialRouter from './modules/testimonials/testimonial.routes.js';


const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/services', serviceRoutes);
app.use('/leads', leadRoutes);
app.use('/testimonials', testimonialRouter);

app.use(errorHandler);

export default app;