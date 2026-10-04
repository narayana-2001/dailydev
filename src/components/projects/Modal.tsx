
import { useParams, useNavigate } from 'react-router-dom';
import {  gridData } from '../../data';

export default function Modal() {
  // 1. Get the "slug" from the URL (e.g. "mountain-trip")
  const { slug } = useParams();
  const navigate = useNavigate(); 

  // 2. Find the exact item where the slug matches the URL)
  const data = gridData.find((item) => item.slug === slug);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Landscape not found!</h1>
        <button onClick={() => navigate('/landscapes')} className="text-blue-600 underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full overflow-hidden shadow-2xl relative">
        <button 
          onClick={() => navigate('/landscapes')}
          className="absolute top-3 right-3 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md hover:bg-gray-200"
        >
          X
        </button>

        <img src={data.imageUrl} alt={data.name} className="w-full h-64 object-cover" />
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-sm font-medium text-blue-600 mt-2 mb-4">
            {data.fromDate} — {data.toDate}
          </p>
          <p className="text-gray-700 text-base mb-6">{data.description}</p>

          <button 
            onClick={() => navigate('/landscapes')}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Landscapes
          </button>
        </div>
      </div>
    </div>
  );
}