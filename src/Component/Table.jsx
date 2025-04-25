import React from 'react';

const Table = ({ tokenData, serviceData, topServiceData }) => {
  return (
    <div className="space-y-6">
      {/* Branch Summary Button */}
      <button className="bg-red-800 text-white text-lg px-5 py-2 rounded-md">
        Branch Summary
      </button>

      {/* Token Data Table */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h4 className="text-lg font-semibold mb-4">Token Data Summary</h4>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-2 text-left">Token Type</th>
              <th className="px-4 py-2 text-left">Icon</th>
              <th className="px-4 py-2 text-left">Value</th>
              <th className="px-4 py-2 text-left">Color</th>
            </tr>
          </thead>
          <tbody>
            {tokenData.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.icon}</td>
                <td className="px-4 py-2 font-semibold">{item.value}</td>
                <td className="px-4 py-2">
                  <span className={`inline-block w-4 h-4 ${item.color}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Service Data Table */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h4 className="text-lg font-semibold mb-4">Service Data Summary</h4>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-2 text-left">Service Name</th>
              <th className="px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((service, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{service.name}</td>
                <td className="px-4 py-2 font-semibold">{service.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Service Data Table */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h4 className="text-lg font-semibold mb-4">Top Services Summary</h4>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-2 text-left">Time Period</th>
              <th className="px-4 py-2 text-left">Service Name</th>
              <th className="px-4 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(topServiceData).map((period, idx) =>
              topServiceData[period].map((service, serviceIdx) => (
                <tr key={`${idx}-${serviceIdx}`} className="border-b hover:bg-gray-50">
                  {serviceIdx === 0 && (
                    <td rowSpan={topServiceData[period].length} className="px-4 py-2 font-semibold">
                      {period}
                    </td>
                  )}
                  <td className="px-4 py-2">{service.name}</td>
                  <td className="px-4 py-2 font-semibold">{service.value}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
