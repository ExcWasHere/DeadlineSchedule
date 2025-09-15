import React from 'react';
import { BookOpen, Code, Calculator, Globe, Database, Users, Calendar, Clock, Phone } from 'lucide-react';

interface Task {
  id: string;
  matkul: string;
  tugas: string;
  deadline: string;
  namaDosen: string;
  nomorWA: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const tasks: Task[] = [
    {
      id: '1',
      matkul: 'Object Oriented Programming',
      tugas: '-',
      deadline: '-',
      namaDosen: 'Mr. Ridwan Rismanto',
      nomorWA: '6285646313719',
      icon: <Code className="w-5 h-5 text-red-500" />
    },
    {
      id: '2',
      matkul: 'Numerical Methods',
      tugas: 'Gauss and Gauss-Jordan',
      deadline: '2 Hari lagi',
      namaDosen: 'Mrs. Adevian Fairuz Pratama',
      nomorWA: '6281333156702',
      icon: <Calculator className="w-5 h-5 text-red-500" />
    },
    {
      id: '3',
      matkul: 'Database Advanced',
      tugas: 'Jobsheet 03 - Advanced SQL',
      deadline: '1 Hari lagi',
      namaDosen: 'Mr. Yoppy Yunhasnawa',
      nomorWA: '6285755023455',
      icon: <Database className="w-5 h-5 text-red-500" />
    },
    {
      id: '5',
      matkul: 'Web Programming and Design',
      tugas: 'Jobsheet 03 - Javascript',
      deadline: '2 Hari lagi',
      namaDosen: 'Mr. Farid Angga Pribadi',
      nomorWA: '6281357046700',
      icon: <Globe className="w-5 h-5 text-red-500" />
    },
    {
      id: '6',
      matkul: 'Citizenship',
      tugas: 'Presentation',
      deadline: '4 Hari lagi',
      namaDosen: 'Mrs. Widaningsih Condrowardhani',
      nomorWA: '6281803805595',
      icon: <Users className="w-5 h-5 text-red-500" />
    },
    {
      id: '7',
      matkul: 'Management Information System',
      tugas: 'Presentation',
      deadline: 'Thursday',
      namaDosen: 'Mr. Indra Dharma Wijaya',
      nomorWA: '6281805098868',
      icon: <BookOpen className="w-5 h-5 text-red-500" />
    },
    {
      id: '8',
      matkul: 'Project Management',
      tugas: '-',
      deadline: '-',
      namaDosen: 'Mr. Pramana Yoga Saputra',
      nomorWA: '6281330966644',
      icon: <Calendar className="w-5 h-5 text-red-500" />
    },
    {
      id: '9',
      matkul: 'English 2',
      tugas: 'Unit 3 Assignment',
      deadline: '7 Hari Lagi',
      namaDosen: 'Mrs. Farida Ulfa',
      nomorWA: '6285334000317',
      icon: <Globe className="w-5 h-5 text-red-500" />
    },
  ];

  const handleDosenClick = (nomorWA: string, namaDosen: string) => {
    const message = `Selamat ... ${namaDosen}, saya ... dari kelas 2I ingin bertanya ...`;
    const waUrl = `https://wa.me/${nomorWA}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const getUrgencyColor = (deadline: string) => {
    if (deadline.includes('1 hari')) return 'text-red-600 font-bold';
    if (deadline.includes('2 hari') || deadline.includes('3 hari')) return 'text-red-500';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      {/* Motivational Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-red-500 mb-2">Semangat ya Rek!</h2>
        <p className="text-lg text-black">Keep Spirit Guys!</p>
        <h3 className="text-2xl font-semibold text-black">Catatan: Klik Nama Dosen untuk menghubungi Dosen</h3>
        <p className="text-lg text-black">Note: Click on the lecturer's name to contact them</p>
      </div>

      {/* Tasks List */}
      <div className="bg-white rounded-xl shadow-lg border-2 border-red-500 overflow-hidden">
        <div className="bg-red-500 px-6 py-4">
          <h3 className="text-xl font-bold text-white">Daftar Tugas</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <div key={task.id} className={`p-6 hover:bg-red-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    {task.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-red-600 mb-1">{task.matkul}</h4>
                        <p className="text-gray-700 mb-2">{task.tugas}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-red-500" />
                            <span className={getUrgencyColor(task.deadline)}>
                              {task.deadline}
                            </span>
                          </div>
                          <button
                            onClick={() => handleDosenClick(task.nomorWA, task.namaDosen)}
                            className="flex items-center gap-1 text-red-500 hover:text-red-700 hover:underline transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            <span className="font-medium">{task.namaDosen}</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          task.deadline.includes('1 hari') 
                            ? 'bg-red-100 text-red-800 border border-red-300' 
                            : task.deadline.includes('2 hari') || task.deadline.includes('3 hari')
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}>
                          {task.deadline}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;