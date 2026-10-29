import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
<<<<<<< HEAD
  let [data, setData] = useState([]);
=======
  let [data, setdata] = useState([]);

>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
<<<<<<< HEAD
        setData(res.data);
=======
        setdata(res.data);
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      })
      .catch(function (err) {
        console.log(err);
      });
<<<<<<< HEAD
  },[]);
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Data from MongoDB</h1>

      <div className="w-full overflow-x-auto rounded-xl border border-orange-500/30 bg-black shadow-xl shadow-orange-500/10">
        <table className="w-full min-w-[500px] text-left text-sm text-gray-200">
          <thead className="bg-orange-500 text-black uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-4 font-bold">Name</th>
              <th className="px-6 py-4 font-bold">Age</th>
              <th className="px-6 py-4 font-bold">Place</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-orange-500/20">
            {data && data.length > 0 ? (
              data.map((value, index) => (
                <tr
                  key={value._id ?? index}
                  className="odd:bg-zinc-950 even:bg-zinc-900 hover:bg-orange-500/10 transition-colors duration-200"
                >
                  <td className="px-6 py-4 font-semibold text-orange-400">
                    {value.name}
                  </td>
                  <td className="px-6 py-4">{value.age}</td>
                  <td className="px-6 py-4">{value.place}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-8 text-center text-orange-200/70"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
=======
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
>>>>>>> dc6d127dfe6f8730f164925fc30334388073ac49
      </div>
    </div>
  );
}
