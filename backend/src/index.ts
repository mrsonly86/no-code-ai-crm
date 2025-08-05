import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'CRM API Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.get('/api', (req, res) => {
  res.status(200).json({ 
    message: 'No-code AI CRM API',
    version: '1.0.0',
    documentation: '/api/docs'
  });
});

// Sample leads endpoint
app.get('/api/leads', (req, res) => {
  const sampleLeads = [
    {
      id: '1',
      title: 'Phát triển website thương mại điện tử',
      status: 'Working',
      owner: 'Nguyễn Văn An',
      validation: 'Validated',
      lastReport: '2 giờ trước',
      firstContact: '15/01/2024',
      lastNote: 'Khách hàng quan tâm đến gói Premium',
      value: 50000000
    },
    {
      id: '2',
      title: 'Hệ thống quản lý bán hàng',
      status: 'Qualified',
      owner: 'Trần Thị Bình',
      validation: 'Pending',
      lastReport: '1 ngày trước',
      firstContact: '12/01/2024',
      lastNote: 'Cần báo giá chi tiết',
      value: 120000000
    }
  ];

  res.json({ data: sampleLeads, total: sampleLeads.length });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 CRM API Server running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api`);
});

export default app;