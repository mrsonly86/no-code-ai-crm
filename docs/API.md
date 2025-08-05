# API Documentation

## Base URL
- Development: `http://localhost:3001`
- Production: `https://your-domain.com/api`

## Authentication
Currently, authentication is not implemented. In future versions, you'll need to include a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Health Check
Check if the API server is running.

**GET** `/health`

**Response:**
```json
{
  "status": "OK",
  "message": "CRM API Server is running",
  "timestamp": "2024-01-20T10:30:00.000Z"
}
```

### API Info
Get general API information.

**GET** `/api`

**Response:**
```json
{
  "message": "No-code AI CRM API",
  "version": "1.0.0",
  "documentation": "/api/docs"
}
```

### Leads Management

#### Get All Leads
Retrieve all leads with pagination support.

**GET** `/api/leads`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (Marketing, Working, Qualified, Downloaded)
- `search` (optional): Search in title and owner fields

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "title": "Phát triển website thương mại điện tử",
      "status": "Working",
      "owner": "Nguyễn Văn An",
      "validation": "Validated",
      "lastReport": "2 giờ trước",
      "firstContact": "15/01/2024",
      "lastNote": "Khách hàng quan tâm đến gói Premium",
      "value": 50000000
    }
  ],
  "total": 4,
  "page": 1,
  "limit": 10,
  "totalPages": 1
}
```

### Future Endpoints

#### Create Lead
**POST** `/api/leads`

**Request Body:**
```json
{
  "title": "New Project Title",
  "owner": "Nguyen Van A",
  "status": "Marketing",
  "value": 100000000,
  "firstContact": "2024-01-20",
  "lastNote": "Initial contact note"
}
```

#### Update Lead
**PUT** `/api/leads/:id`

#### Delete Lead
**DELETE** `/api/leads/:id`

#### Get Lead Details
**GET** `/api/leads/:id`

## Error Responses

### 400 Bad Request
```json
{
  "error": "Bad Request",
  "message": "Invalid request parameters"
}
```

### 404 Not Found
```json
{
  "error": "Route not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Something went wrong!",
  "message": "Internal server error"
}
```

## Rate Limiting
- 100 requests per 15 minutes per IP address
- Headers included in response:
  - `X-RateLimit-Limit`: Request limit
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Time when rate limit resets

## Data Types

### Lead Object
```typescript
interface Lead {
  id: string;
  title: string;
  status: 'Marketing' | 'Working' | 'Qualified' | 'Downloaded';
  owner: string;
  validation: 'Validated' | 'Pending' | 'Invalid';
  lastReport: string;
  firstContact: string;
  lastNote: string;
  value: number; // Value in VND
}
```

### User Object (Future)
```typescript
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'MANAGER' | 'SALES_REP' | 'MARKETING';
  avatar?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
```