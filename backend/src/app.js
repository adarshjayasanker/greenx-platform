import express from 'express';
import cors from 'cors';

import authRouter from './modules/auth/auth.routes.js';
import serviceRoutes from './modules/services/service.routes.js';
import leadRoutes from './modules/leads/lead.routes.js';
import testimonialRouter from './modules/testimonials/testimonial.routes.js';

import errorHandler from './middleware/errorMiddleware.js';

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://www.greenxpcs.com",
        "https://greenxpcs.com"
    ],
    credentials: true,
}));

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({status: "Server running"});
})

app.use('/auth', authRouter);
app.use('/services', serviceRoutes);
app.use('/leads', leadRoutes);
app.use('/testimonials', testimonialRouter);

app.use(errorHandler);

export default app;