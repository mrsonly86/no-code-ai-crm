# Installation Guide

This guide will help you set up the No-code AI CRM system on your local machine or server.

## Prerequisites

### Required Software
- **Node.js** 18 or higher
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (recommended)
- **PostgreSQL** 13+ (if running without Docker)
- **Redis** (optional, for caching)

### System Requirements
- **RAM**: Minimum 4GB, recommended 8GB
- **Storage**: Minimum 2GB free space
- **OS**: Windows 10+, macOS 10.15+, or Linux Ubuntu 18.04+

## Installation Methods

### Method 1: Docker Compose (Recommended)

This is the easiest way to get the entire system running with all dependencies.

```bash
# 1. Clone the repository
git clone <repository-url>
cd no-code-ai-crm

# 2. Create environment files
cp backend/.env.example backend/.env
cp database/.env.example database/.env

# 3. Edit environment variables (optional)
# Edit backend/.env and database/.env with your preferred settings

# 4. Build and start all services
docker-compose up -d

# 5. Wait for all services to be ready (may take 2-3 minutes)
docker-compose logs -f

# 6. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
# Database Admin: http://localhost:8080
```

### Method 2: Local Development Setup

For development or if you prefer running services individually.

#### Step 1: Setup Database
```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
CREATE DATABASE crm_db;
CREATE USER crm_user WITH PASSWORD 'crm_password';
GRANT ALL PRIVILEGES ON DATABASE crm_db TO crm_user;
\q
```

#### Step 2: Setup Backend
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Edit .env file with your database credentials
nano .env

# Setup database schema (when Prisma is available)
# npx prisma migrate dev

# Start backend server
npm run dev
```

#### Step 3: Setup Frontend
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Configuration

### Backend Environment Variables

Edit `backend/.env`:

```env
# Server Configuration
NODE_ENV=development
PORT=3001

# Database Configuration
DATABASE_URL="postgresql://crm_user:crm_password@localhost:5432/crm_db"

# JWT Configuration (for future authentication)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# Redis Configuration (optional)
REDIS_URL=redis://localhost:6379

# OpenAI Configuration (for future AI features)
OPENAI_API_KEY=your-openai-api-key

# Email Configuration (for future notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-email-password

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### Frontend Environment Variables

Create `frontend/.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

# App Configuration
NEXT_PUBLIC_APP_NAME="No-code AI CRM"
NEXT_PUBLIC_APP_VERSION="1.0.0"
```

## Verification

### Check if Services are Running

1. **Frontend**: Visit http://localhost:3000
   - You should see the CRM Dashboard
   - Navigation should work
   - Lead table should display sample data

2. **Backend API**: Visit http://localhost:3001/health
   - Should return: `{"status":"OK","message":"CRM API Server is running"}`

3. **Database**: Visit http://localhost:8080 (if using Docker)
   - Login with PostgreSQL credentials
   - Should see `crm_db` database

### Test API Endpoints

```bash
# Test health endpoint
curl http://localhost:3001/health

# Test API info endpoint
curl http://localhost:3001/api

# Test leads endpoint
curl http://localhost:3001/api/leads
```

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000 or 3001
lsof -i :3000
lsof -i :3001

# Kill the process
kill -9 <PID>
```

#### Docker Issues
```bash
# Reset Docker containers
docker-compose down
docker-compose up -d --build

# View logs for debugging
docker-compose logs frontend
docker-compose logs backend
docker-compose logs postgres
```

#### Database Connection Issues
- Check PostgreSQL is running: `sudo systemctl status postgresql`
- Verify credentials in `.env` file
- Check database exists: `psql -U crm_user -d crm_db -h localhost`

#### Node.js Version Issues
```bash
# Check Node.js version
node --version

# Update Node.js using nvm
nvm install 18
nvm use 18
```

### Getting Help

If you encounter issues:

1. Check the logs: `docker-compose logs` or `npm run dev`
2. Verify all environment variables are set correctly
3. Ensure all required ports are available
4. Check the GitHub Issues page for known problems
5. Create a new issue with detailed error information

## Next Steps

After successful installation:

1. **Explore the Dashboard**: Navigate through the interface
2. **Test Lead Management**: Use search and filter features
3. **Check API Endpoints**: Test with curl or Postman
4. **Review Documentation**: Read the API documentation
5. **Plan Customization**: Consider your specific business needs

## Production Deployment

For production deployment, refer to the [Deployment Guide](DEPLOYMENT.md) which covers:
- Production environment setup
- Security considerations
- Performance optimization
- Monitoring and logging
- Backup strategies