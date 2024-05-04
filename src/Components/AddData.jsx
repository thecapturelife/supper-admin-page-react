import React from 'react';

const AddData = () => {
  return (
    <div className="max-w-4xl px-8 py-6 bg-white rounded-md shadow-md mt-32 ml-32">
      <h1 className="text-3xl text-gray-800 font-semibold mb-6">Add Data</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="dbname" className="block text-sm font-medium text-gray-700">Database Name</label>
          <input type="text" name="dbname" id="dbname" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Database Name" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="dbcode" className="block text-sm font-medium text-gray-700">Db Code</label>
          <input type="text" name="dbcode" id="dbcode" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Db Code" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="text" name="date" id="date" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Date" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label htmlFor="expiredDate" className="block text-sm font-medium text-gray-700">Expired Date</label>
          <input type="text" name="expiredDate" id="expiredDate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Enter Expired Date" />
        </div>
        <div className="col-span-2">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select id="status" name="status" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Cancelled</option>
            <option>Ongoing</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Data
        </button>
      </div>
    </div>
  );
}

export default AddData;
