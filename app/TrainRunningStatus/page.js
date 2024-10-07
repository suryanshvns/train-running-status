"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const TrainStatus = () => {
  const [pnr, setPnr] = useState('4107768165');
  const [pnrDetails, setPnrDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPNR = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/pnr?pnr=${pnr}`);
      setPnrDetails(response.data.result);
    } catch (err) {
      setError('Unable to fetch PNR details. Please check the PNR number or try again later.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    searchPNR();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md mt-8">
        <div className="flex items-center mb-6">
          <input 
            type="text" 
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded-l-md"
            placeholder="Enter PNR Number"
          />
          <button 
            onClick={searchPNR}
            className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-500">
            Search
          </button>
        </div>

        {loading && <p className="text-blue-500 text-center">Fetching PNR details...</p>}
        
        {error && <p className="text-red-500 text-center">{error}</p>}

        {pnrDetails && (
          <>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
              <h2 className="text-lg font-bold text-white">PNR : {pnr}</h2>
              <span className="text-blue-400 font-semibold cursor-pointer">CHANGE</span>
            </div>

            <div className="bg-gray-800 p-4 rounded-md mb-4">
              <h3 className="text-xl font-semibold text-white">{pnrDetails.trainInfo.trainNo} - {pnrDetails.trainInfo.name}</h3>
              <div className="flex items-center">
                <span className="text-green-500 font-bold">★ 3.8</span>
              </div>
              <p className="text-gray-400">
                <strong>{pnrDetails.trainInfo.fromStationName}</strong> → <strong>{pnrDetails.trainInfo.toStationName}</strong>
              </p>
              <p className="text-gray-500">{pnrDetails.trainInfo.dt} | SL | Expected platform : 1</p>
              <p className="text-red-400 text-sm font-medium mt-2">
                <strong>Remarks:</strong> Train has Departed, Booking not allowed
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Passenger Status</h3>
              <table className="min-w-full bg-gray-900 rounded-lg">
                <thead className="bg-gray-700 text-gray-300">
                  <tr>
                    <th className="py-2">S. No</th>
                    <th className="py-2">Current Coach</th>
                    <th className="py-2">Current Berth</th>
                  </tr>
                </thead>
                <tbody>
                  {pnrDetails.passengerInfo.map((passenger, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-700 px-4 py-2 text-gray-400">{index + 1}</td>
                      <td className="border border-gray-700 px-4 py-2 text-green-500">{passenger.currentCoach}</td>
                      <td className="border border-gray-700 px-4 py-2 text-green-500">{passenger.currentBerthNo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-800 p-4 rounded-md mb-4">
              <p className="text-white">Coach: {pnrDetails.seatInfo.coach}</p>
              <p className="text-white">Berth: {pnrDetails.seatInfo.berth} ({pnrDetails.seatInfo.berthInfo})</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-md">
              <p className="text-white">Chart Prepared just now</p>
              <p className="text-gray-400 font-semibold"><strong>Coach Position:</strong> 20</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default TrainStatus;
