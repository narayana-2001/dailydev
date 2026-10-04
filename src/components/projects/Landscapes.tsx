
import { Link } from 'react-router-dom'; 
import { gridData } from '../../data';

export default function Landscapes() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-gray-800">My App Name</h1>
        <img src="https://picsum.photos/seed/profile/100/100" alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" />
      </nav>

      <main className="max-w-6xl mx-auto p-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridData.map((item) => (
            
            <Link 
              key={item.id} 
              to={`/landscapes/${item.slug}`} 
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow block"
            >
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm font-medium text-blue-600 mt-1 mb-3">
                  {item.fromDate} — {item.toDate}
                </p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
            
          ))}
        </div>
      </main>
    </div>
  );
}