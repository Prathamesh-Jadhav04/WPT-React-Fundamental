import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  let [data, setdata] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
        setdata(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-center uppercase text-2xl font-bold text-blue-700 mb-6">
          Fetch Data From Mongo !
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 px-6 py-3 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-6 py-3 text-left">
                  Age
                </th>
                <th className="border border-gray-300 px-6 py-3 text-left">
                  Place
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, index) => (
                <tr
                  key={value._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="border border-gray-300 px-6 py-3 font-medium text-gray-800">
                    {value.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-gray-700">
                    {value.age}
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-gray-700">
                    {value.place}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
