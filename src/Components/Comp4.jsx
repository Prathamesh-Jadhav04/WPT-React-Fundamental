import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
        setData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

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
      </div>
    </div>
  );
}
