import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    Dbname: "cato1",
    Dbcode: "AP1",
    Date: "html1",
    Expired: "01/01/2024",
    status: "cancelled",
  },
  {
    id: 2,
    Dbname: "cato2",
    Dbcode: "AP2",
    Date: "html2",
    Expired: "01/01/2025",
    status: "ongoing",
  },
  {
    id: 3,
    Dbname: "cato3",
    Dbcode: "AP3",
    Date: "html3",
    Expired: "01/01/2026",
    status: "ongoing",
  },
  {
    id: 4,
    Dbname: "cato4",
    Dbcode: "AP4",
    Date: "html4",
    Expired: "01/01/2027",
    status: "ongoing",
  },
  {
    id: 5,
    Dbname: "cato5",
    Dbcode: "AP5",
    Date: "html5",
    Expired: "01/01/2028",
    status: "ongoing",
  },
];

const Home = () => {
  const navigate = useNavigate()
  const [sortingData, setSortingData] = useState(products);
  const [editingStatusId, setEditingStatusId] = useState(null); 
  

  const handleEdit = (id) => {
    setEditingStatusId(id);
  };

  const handleSave = () => {
    setEditingStatusId(null);
  };

  const handleChangeStatus = (event, id) => {
    const newStatus = event.target.value;
    setSortingData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="bg-gray-800 text-white w-48 p-4 flex flex-col items-center justify-between">
      <h1 className='text-2xl font-bold'>Pupa digitals</h1>

        <div className="mt-auto">
        <button class="text-lg font-semibold my-2 bg-blue-600 hover:bg-blue-700 rounded-xl w-20 transition-colors duration-300 ease-in-out" onClick={()=>navigate('/adddata')}>Add Data</button>
        <button class="text-lg font-semibold my-2 bg-blue-600 hover:bg-blue-700 rounded-xl w-20 transition-colors duration-300 ease-in-out">Logout</button>
           
       </div>
      </div>

      <div className="flex-1">
        <div className="max-w-4xl px-8 py-6 bg-white rounded-md shadow-md mt-32 ml-32">
          <h1 className="text-3xl text-gray-800 font-semibold mb-6">Company Super Admin Panel</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">ID</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Database Name</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Db Code</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Date</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Expired Date</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Current Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortingData.map((data) => (
                  <tr
                    key={data.id}
                    className={editingStatusId === data.id ? "bg-gray-100" : ""}
                  >
                    <td className="px-4 py-2 text-sm text-gray-800">{data.id}</td>
                    <td className="px-4 py-2 text-sm text-gray-800">{data.Dbname}</td>
                    <td className="px-4 py-2 text-sm text-gray-800">{data.Dbcode}</td>
                    <td className="px-4 py-2 text-sm text-gray-800">{data.Date}</td>
                    <td className="px-4 py-2 text-sm text-gray-800">{data.Expired}</td>
                    <td className="px-4 py-2 text-sm text-gray-800">
                      {editingStatusId === data.id ? (
                        <input
                          type="text"
                          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition-all duration-300"
                          value={data.status}
                          onChange={(event) =>
                            handleChangeStatus(event, data.id)
                          }
                        />
                      ) : (
                        <span>{data.status}</span>
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {editingStatusId === data.id ? (
                        <button
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none transition-all duration-300"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-all duration-300"
                          onClick={() => handleEdit(data.id)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
