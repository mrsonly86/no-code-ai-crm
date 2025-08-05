# No-code AI CRM System

![CRM Dashboard](https://github.com/user-attachments/assets/6479fba0-98b2-4d1c-881e-52df08ee5ad2)

Hệ thống CRM hiện đại với tính năng No-code/Low-code và AI thông minh để quản lý khách hàng và tự động hóa quy trình bán hàng.

## ✨ Tính năng chính

### 🎯 Quản lý Leads và Khách hàng
- **Bảng quản lý leads chi tiết** với đầy đủ thông tin:
  - Title (Tiêu đề dự án)
  - Status (Trạng thái: Marketing, Working, Qualified, Downloaded)
  - Owner (Người phụ trách)
  - Validation (Trạng thái xác thực)
  - Last report & First contact (Thời gian liên hệ)
  - Last note (Ghi chú mới nhất)
  - Giá trị dự án tính bằng VND

- **Tìm kiếm và lọc thông minh**:
  - Tìm kiếm theo tên dự án hoặc người phụ trách
  - Lọc theo trạng thái (Marketing, Working, Qualified, Downloaded)
  - Hỗ trợ lọc nâng cao

- **Thao tác dữ liệu**:
  - Thêm lead mới
  - Import/Export từ CSV, Excel
  - Xem chi tiết và chỉnh sửa thông tin

### 📊 Dashboard Real-time
- **KPI Cards** hiển thị thống kê quan trọng:
  - Tổng số leads
  - Số leads đã qualified
  - Số leads đang working
  - Tổng giá trị dự kiến (tính bằng VND)

- **Giao diện thân thiện**:
  - Thiết kế responsive cho mobile và desktop
  - Màu sắc phân biệt rõ ràng cho từng trạng thái
  - Navigation sidebar đơn giản

### 🇻🇳 Hỗ trợ tiếng Việt hoàn toàn
- Giao diện hoàn toàn bằng tiếng Việt
- Định dạng tiền tệ VND
- Ngày tháng theo định dạng Việt Nam
- Timezone Vietnam

## 🏗️ Kiến trúc hệ thống

### Frontend (Next.js 14)
- **Framework**: Next.js 14 với App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks

### Backend (Node.js + Express)
- **Framework**: Express.js với TypeScript
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan
- **API**: RESTful endpoints

### Database (Prisma + PostgreSQL)
- **ORM**: Prisma với schema đầy đủ
- **Database**: PostgreSQL
- **Models**: User, Lead, Activity, Workflow, Notification, Report, AIInsight

### Containerization (Docker)
- **Frontend**: Dockerfile cho Next.js app
- **Backend**: Dockerfile cho Express API
- **Database**: PostgreSQL container
- **Cache**: Redis container
- **Management**: Adminer cho database admin

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL (nếu chạy local)

### Chạy với Docker (Recommended)
```bash
# Clone repository
git clone <repository-url>
cd no-code-ai-crm

# Chạy toàn bộ hệ thống
docker-compose up -d

# Truy cập ứng dụng
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
# Database Admin: http://localhost:8080
```

### Chạy Development
```bash
# Backend
cd backend
npm install
npm run dev  # Port 3001

# Frontend
cd frontend
npm install
npm run dev  # Port 3000
```

## 📁 Cấu trúc dự án

```
/
├── frontend/          # Next.js 14 frontend
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/ # React components
│   │   └── lib/       # Utilities
│   ├── Dockerfile
│   └── package.json
├── backend/           # Express.js API
│   ├── src/
│   │   ├── routes/    # API routes
│   │   ├── models/    # Data models
│   │   ├── services/  # Business logic
│   │   └── middleware/ # Express middleware
│   ├── Dockerfile
│   └── package.json
├── database/          # Database schema & migrations
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
├── docs/              # Documentation
├── docker-compose.yml # Full stack deployment
└── README.md
```

## 🎨 Screenshots

### Dashboard chính
![CRM Dashboard](https://github.com/user-attachments/assets/6479fba0-98b2-4d1c-881e-52df08ee5ad2)

Dashboard hiển thị:
- Header với notification và settings
- Sidebar navigation
- KPI cards với thống kê quan trọng
- Bảng quản lý leads với đầy đủ thông tin
- Tính năng tìm kiếm và lọc

## 🛠️ API Endpoints

### Health Check
```bash
GET /health
# Response: { status: "OK", message: "CRM API Server is running" }
```

### Leads Management
```bash
GET /api/leads
# Response: { data: [...], total: number }
```

### Future Endpoints (sẽ được implement)
- `POST /api/leads` - Tạo lead mới
- `PUT /api/leads/:id` - Cập nhật lead
- `DELETE /api/leads/:id` - Xóa lead
- `GET /api/users` - Quản lý users
- `POST /api/auth/login` - Đăng nhập
- `GET /api/analytics` - Báo cáo analytics

## 🔮 Roadmap

### Phase 1: Core CRM (✅ Completed)
- [x] Project structure setup
- [x] Frontend dashboard với Next.js 14
- [x] Backend API với Express.js
- [x] Database schema với Prisma
- [x] Docker containerization
- [x] Lead management interface
- [x] Vietnamese localization

### Phase 2: Authentication & User Management (🚧 Next)
- [ ] JWT authentication system
- [ ] User roles and permissions
- [ ] Login/logout functionality
- [ ] User profile management

### Phase 3: Advanced Features (📋 Planned)
- [ ] Real-time updates với Socket.io
- [ ] AI-powered insights với OpenAI
- [ ] Visual workflow builder (No-code)
- [ ] Advanced reporting và charts
- [ ] Email integration
- [ ] Mobile responsive enhancements

### Phase 4: AI & Automation (🔮 Future)
- [ ] Smart lead scoring
- [ ] Automated task creation
- [ ] Predictive analytics
- [ ] Natural language processing
- [ ] Chatbot integration

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

Nếu bạn gặp vấn đề hoặc có câu hỏi, vui lòng tạo issue trên GitHub repository.

---

**Made with ❤️ for Vietnamese businesses**
