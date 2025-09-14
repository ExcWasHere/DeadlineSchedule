import React from 'react';
import { BookOpen, Code, Calculator, Globe, Database, Users, Calendar, Clock } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  taskCount: number;
  urgentTasks: number;
  nextDeadline: string;
}

const Dashboard: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'oop',
      title: 'Pemrograman Berbasis Objek',
      icon: <Code className="w-6 h-6 text-white" />,
      taskCount: 3,
      urgentTasks: 1,
      nextDeadline: '2 hari lagi'
    },
    {
      id: 'numeric',
      title: 'Metode Numerik',
      icon: <Calculator className="w-6 h-6 text-white" />,
      taskCount: 2,
      urgentTasks: 0,
      nextDeadline: '5 hari lagi'
    },
    {
      id: 'database',
      title: 'Basis Data Lanjut',
      icon: <Database className="w-6 h-6 text-white" />,
      taskCount: 4,
      urgentTasks: 2,
      nextDeadline: '1 hari lagi'
    },
    {
      id: 'webdesign',
      title: 'Desain dan Pemrograman Web',
      icon: <Globe className="w-6 h-6 text-white" />,
      taskCount: 3,
      urgentTasks: 1,
      nextDeadline: '3 hari lagi'
    },
    {
      id: 'citizenship',
      title: 'Kewarganegaraan',
      icon: <Users className="w-6 h-6 text-white" />,
      taskCount: 1,
      urgentTasks: 0,
      nextDeadline: '1 minggu lagi'
    },
    {
      id: 'mis',
      title: 'Sistem Informasi Manajemen',
      icon: <BookOpen className="w-6 h-6 text-white" />,
      taskCount: 2,
      urgentTasks: 1,
      nextDeadline: '4 hari lagi'
    },
    {
      id: 'projman',
      title: 'Manajemen Proyek',
      icon: <Calendar className="w-6 h-6 text-white" />,
      taskCount: 3,
      urgentTasks: 0,
      nextDeadline: '6 hari lagi'
    },
    {
      id: 'english',
      title: 'Bahasa Inggris 2',
      icon: <Globe className="w-6 h-6 text-white" />,
      taskCount: 2,
      urgentTasks: 1,
      nextDeadline: '2 hari lagi'
    },
    {
      id: 'practicum',
      title: 'Praktikum Pemrograman Berbasis Objek',
      icon: <Code className="w-6 h-6 text-white" />,
      taskCount: 2,
      urgentTasks: 1,
      nextDeadline: '3 hari lagi'
    }
  ];

  const handleCourseClick = (courseId: string) => {
    console.log(`Clicked course: ${courseId}`);
    // Nanti akan navigate ke detail page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Tugas</h1>
            <p className="text-gray-600">Kelola jadwal dan deadline tugas kuliahmu</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Total Mata Kuliah</span>
            </div>
            <div className="text-2xl font-bold mt-1">{courses.length}</div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Total Tugas</span>
            </div>
            <div className="text-2xl font-bold mt-1">{courses.reduce((sum, course) => sum + course.taskCount, 0)}</div>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Tugas Mendesak</span>
            </div>
            <div className="text-2xl font-bold mt-1">{courses.reduce((sum, course) => sum + course.urgentTasks, 0)}</div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course.id)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-purple-100 hover:border-purple-300 hover:-translate-y-1 group"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Deadline terdekat: {course.nextDeadline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{course.taskCount}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Total Tugas</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${course.urgentTasks > 0 ? 'text-red-500' : 'text-green-500'}`}>
                      {course.urgentTasks}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Mendesak</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-purple-600 group-hover:text-purple-700">
                  <span className="text-sm font-medium">Lihat Detail</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      course.urgentTasks > 0 ? 'bg-gradient-to-r from-red-400 to-red-500' : 'bg-gradient-to-r from-green-400 to-green-500'
                    }`}
                    style={{ width: course.urgentTasks > 0 ? '75%' : '100%' }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {course.urgentTasks > 0 ? `${course.urgentTasks} tugas perlu perhatian` : 'Semua tugas dalam jadwal'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
          <p className="text-gray-600">
            💡 <strong>Tips:</strong> Klik pada kartu mata kuliah untuk melihat detail tugas dan kontak dosen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;