import React, { useState } from 'react';
import { Zap, Search, Clock, AlertTriangle, CheckCircle, Calendar, Send } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [complaintArea, setComplaintArea] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle complaint submission logic here
    console.log('Complaint submitted:', { complaintType, complaintArea, complaintDescription });
    // Reset form
    setComplaintType('');
    setComplaintArea('');
    setComplaintDescription('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-600 p-3 rounded-lg">
            <Zap className="h-8 w-8 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">PowerSeva</h1>
            <p className="text-gray-400">Real-time Power Status Tracker</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes flash {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .animate-flash {
            animation: flash 2s infinite;
          }
        `}</style>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Section */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for your sector or area..."
                className="w-full pl-12 pr-4 py-4 bg-black border border-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-100">
            Search for your area to check power status
          </h2>

          {/* Power Cut Information Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Power Cut Intimation */}
            <div className="bg-black border border-gray-900 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-orange-500">Power Cut Intimation</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Scheduled Maintenance</span>
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">Upcoming</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Sector 15, Block A-D</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Tomorrow, 10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Emergency Repair</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Active</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Sector 22, Main Line</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Started: 2:30 PM - Est. End: 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Power Status */}
            <div className="bg-black border border-gray-900 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-500">Current Power Status</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Sector 10-14</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Normal</span>
                  </div>
                  <p className="text-gray-400 text-sm">All areas have stable power supply</p>
                </div>
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Sector 18-20</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Partial</span>
                  </div>
                  <p className="text-gray-400 text-sm">Limited power supply, voltage fluctuations</p>
                </div>
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Sector 22</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Outage</span>
                  </div>
                  <p className="text-gray-400 text-sm">Emergency repair in progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Power Restoration Timings */}
          <div className="bg-black border border-gray-900 rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-500">Power Restoration Timings</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">2:30 hrs</div>
                <div className="text-gray-300 font-medium mb-1">Sector 22</div>
                <div className="text-gray-400 text-sm">Emergency repair</div>
                <div className="text-yellow-400 text-sm mt-2">Expected: 6:00 PM</div>
              </div>
              <div className="bg-black border border-gray-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">4:00 hrs</div>
                <div className="text-gray-300 font-medium mb-1">Sector 15</div>
                <div className="text-gray-400 text-sm">Scheduled maintenance</div>
                <div className="text-yellow-400 text-sm mt-2">Expected: 2:00 PM Tomorrow</div>
              </div>
              <div className="bg-black border border-gray-900 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Normal</div>
                <div className="text-gray-300 font-medium mb-1">Other Areas</div>
                <div className="text-gray-400 text-sm">Stable power supply</div>
                <div className="text-green-400 text-sm mt-2">No outages</div>
              </div>
            </div>
          </div>

          {/* Complaint Section */}
          <div className="bg-black border border-gray-900 rounded-xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Send className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-red-500">Report Power Cut Complaint</h3>
            </div>
            <form onSubmit={handleComplaintSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Complaint Type</label>
                  <select
                    value={complaintType}
                    onChange={(e) => setComplaintType(e.target.value)}
                    className="w-full p-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select complaint type</option>
                    <option value="power-cut">Power Cut</option>
                    <option value="voltage-fluctuation">Voltage Fluctuation</option>
                    <option value="transformer-issue">Transformer Issue</option>
                    <option value="cable-fault">Cable Fault</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Affected Area/Sector</label>
                  <input
                    type="text"
                    value={complaintArea}
                    onChange={(e) => setComplaintArea(e.target.value)}
                    placeholder="Enter sector, area, or locality"
                    className="w-full p-3 bg-black border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Description</label>
                <textarea
                  value={complaintDescription}
                  onChange={(e) => setComplaintDescription(e.target.value)}
                  placeholder="Describe the power issue in detail..."
                  rows={4}
                  className="w-full p-3 bg-black border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Complaint</span>
              </button>
            </form>

            {/* Recent Complaints */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Recent Complaints</h4>
              <div className="space-y-3">
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Power Cut - Sector 25</span>
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">In Progress</span>
                  </div>
                  <p className="text-gray-400 text-sm">Complaint ID: #PC2024001</p>
                </div>
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Voltage Issue - Sector 12</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Resolved</span>
                  </div>
                  <p className="text-gray-400 text-sm">Complaint ID: #PC2024002</p>
                </div>
                <div className="bg-black border border-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">Transformer Fault - Sector 8</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Pending</span>
                  </div>
                  <p className="text-gray-400 text-sm">Complaint ID: #PC2024003</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Status Overview */}
          <div className="bg-black border border-gray-900 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-100 text-center">Quick Status Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">85%</div>
                <div className="text-gray-400 text-sm">Areas Online</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">10%</div>
                <div className="text-gray-400 text-sm">Partial Supply</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-1">5%</div>
                <div className="text-gray-400 text-sm">Under Repair</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
                <div className="text-gray-400 text-sm">Scheduled Cuts</div>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="mt-16 text-center">
            <div className="bg-black border border-gray-900 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">How to use PowerSeva</h3>
              <div className="space-y-3 text-gray-400">
                <p>1. Enter your sector, area, or locality name in the search box</p>
                <p>2. View real-time power status and scheduled maintenance</p>
                <p>3. Check estimated restoration timings for affected areas</p>
                <p>4. Get advance intimation of planned power cuts</p>
                <p>5. Report power issues through the complaint system</p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Real-time power status updates • Updated every 5 minutes • Power cut intimations 24 hours in advance
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;