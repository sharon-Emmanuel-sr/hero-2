import { useEffect, useState } from "react";
import axios from "axios";

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/attendance")
      .then((res) => setAttendance(res.data))
      .catch((error) => console.error("Error fetching attendance", error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Attendance Records</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record._id}>
              <td className="border p-2">{record.studentId.name}</td>
              <td className="border p-2">{new Date(record.date).toLocaleDateString()}</td>
              <td className="border p-2">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
