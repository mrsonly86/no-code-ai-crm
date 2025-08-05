'use client';

import { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Filter,
  Download,
  Upload
} from 'lucide-react';

// Sample lead data
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
  },
  {
    id: '3',
    title: 'Ứng dụng mobile banking',
    status: 'Marketing',
    owner: 'Lê Hoàng Cường',
    validation: 'Validated',
    lastReport: '3 giờ trước',
    firstContact: '18/01/2024',
    lastNote: 'Demo sản phẩm vào tuần tới',
    value: 300000000
  },
  {
    id: '4',
    title: 'Platform học trực tuyến',
    status: 'Downloaded',
    owner: 'Phạm Thị Dung',
    validation: 'Validated',
    lastReport: '5 giờ trước',
    firstContact: '10/01/2024',
    lastNote: 'Đã gửi tài liệu kỹ thuật',
    value: 80000000
  }
];

const statusColors = {
  'Marketing': 'bg-blue-100 text-blue-800',
  'Working': 'bg-yellow-100 text-yellow-800',
  'Qualified': 'bg-green-100 text-green-800',
  'Downloaded': 'bg-purple-100 text-purple-800'
};

const validationColors = {
  'Validated': 'bg-green-100 text-green-800',
  'Pending': 'bg-yellow-100 text-yellow-800',
  'Invalid': 'bg-red-100 text-red-800'
};

export default function Dashboard() {
  const [leads, setLeads] = useState(sampleLeads);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Filter leads based on search and status
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalValue = leads.reduce((sum, lead) => sum + lead.value, 0);
  const qualifiedLeads = leads.filter(lead => lead.status === 'Qualified').length;
  const workingLeads = leads.filter(lead => lead.status === 'Working').length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
            <Settings className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg">
              <Users className="h-5 w-5" />
              <span>Quản lý Leads</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <BarChart3 className="h-5 w-5" />
              <span>Báo cáo</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Settings className="h-5 w-5" />
              <span>Cài đặt</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-900">
                  {leads.length}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">Tổng số Leads</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-green-600">
                  {qualifiedLeads}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">Leads đã Qualified</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-yellow-600">
                  {workingLeads}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">Leads đang Working</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(totalValue).replace('₫', 'đ')}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">Tổng giá trị</p>
            </div>
          </div>

          {/* Lead Management Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Quản lý Leads</h2>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus className="h-4 w-4" />
                    <span>Thêm Lead</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Upload className="h-4 w-4" />
                    <span>Import</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Download className="h-4 w-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm leads..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Working">Working</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Downloaded">Downloaded</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Lọc thêm</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Validation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Report
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Note
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{lead.title}</div>
                        <div className="text-sm text-gray-500">{formatCurrency(lead.value)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[lead.status as keyof typeof statusColors]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lead.owner}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${validationColors[lead.validation as keyof typeof validationColors]}`}>
                          {lead.validation}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.lastReport}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {lead.firstContact}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                        {lead.lastNote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
