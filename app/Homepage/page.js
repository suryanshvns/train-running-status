import axios from "axios";
import React from "react";

const Homepage = () => {
  const trainStatus = [
    {
      station: "New Delhi",
      date: "Day 2 04-Oct",
      arrives: "22:50",
      departs: "Right Time",
      status: "Right Time",
    },
    {
      station: "Ghaziabad",
      date: "Day 2 04-Oct",
      arrives: "23:20",
      departs: "23:22",
      status: "Right Time",
    },
    {
      station: "Tundla Jn",
      date: "Day 3 05-Oct",
      arrives: "01:23",
      departs: "01:25",
      status: "Right Time",
    },
    {
      station: "Kanpur Central",
      date: "Day 3 05-Oct",
      arrives: "04:25",
      departs: "04:30",
      status: "Right Time",
    },
    {
      station: "Prayagraj Jn.",
      date: "Day 3 05-Oct",
      arrives: "07:15",
      departs: "07:25",
      status: "Right Time",
    },
    {
      station: "Gyanpur Road",
      date: "Day 3 05-Oct",
      arrives: "08:41",
      departs: "08:43",
      status: "Right Time",
    },
    {
      station: "Banaras",
      date: "Day 3 05-Oct",
      arrives: "10:00",
      status: "Right Time",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "uattrainservicesapi.zoopindia.com/running-status?trainNumber=12560&partnerName=trainMan",
      );
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-200 mb-6">
          Train Running Status
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
            <thead>
              <tr>
                <th className="text-left py-3 px-6 font-semibold text-gray-400">
                  Station
                </th>
                <th className="text-left py-3 px-6 font-semibold text-gray-400">
                  Date
                </th>
                <th className="text-left py-3 px-6 font-semibold text-gray-400">
                  Arrives
                </th>
                <th className="text-left py-3 px-6 font-semibold text-gray-400">
                  Departs
                </th>
                <th className="text-left py-3 px-6 font-semibold text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {trainStatus.map((status, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="py-3 px-6 border-b border-gray-700 text-gray-300">
                    {status.station}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-700 text-gray-300">
                    {status.date}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-700 text-gray-300">
                    {status.arrives}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-700 text-gray-300">
                    {status.departs || "N/A"}
                  </td>
                  <td className="py-3 px-6 border-b border-gray-700 text-green-400 font-semibold">
                    {status.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
