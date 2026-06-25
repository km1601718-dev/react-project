import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");

 const [students, setStudents] = useState([
  {
    id: 1,
    name: "Arun Kumar",
    batch: "Batch A",
    course: "React JS",
    trainer: "Mr. Rajesh",
    email: "arun@gmail.com",
    phone: "9876543210",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    date: "2026-06-24",
    status: "Present"
  },
  {
    id: 2,
    name: "Priya",
    batch: "Batch B",
    course: "Python",
    trainer: "Mrs. Kavitha",
    email: "priya@gmail.com",
    phone: "9876543211",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "2026-06-24",
    status: "Absent"
  },
  {
   id: 3,
  name: "Rahul Sharma",
  batch: "Batch A",
  course: "Java Full Stack",
  trainer: "Mr. Rajesh",
  email: "rahul@gmail.com",
  phone: "9876543212",
  image: "https://randomuser.me/api/portraits/men/3.jpg",
  date: "2026-06-24",
  status: "Present"
},
{
  id: 4,
  name: "Sneha Reddy",
  batch: "Batch B",
  course: "Python Development",
  trainer: "Mrs. Kavitha",
  email: "sneha@gmail.com",
  phone: "9876543213",
  image: "https://randomuser.me/api/portraits/women/4.jpg",
  date: "2026-06-24",
  status: "Absent"
}
]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : student
      )
    );
  };
  

const filteredStudents = students.filter((student) => {
  return (
    (selectedBatch === "All" ||
      student.batch === selectedBatch) &&
    (selectedDate === "" ||
      student.date === selectedDate) &&
    student.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );
});

  const totalStudents = filteredStudents.length;
  const presentStudents = filteredStudents.filter(
    (s) => s.status === "Present"
  ).length;
  const absentStudents = filteredStudents.filter(
    (s) => s.status === "Absent"
  ).length;

  const attendancePercentage =
    totalStudents > 0
      ? ((presentStudents / totalStudents) * 100).toFixed(2)
      : 0;

  return (
    <div className="container">
      <h1>Trainer Session Attendance Dashboard</h1>

      <div className="filters">
        <select
          onChange={(e) =>
            setSelectedBatch(e.target.value)
          }
        >
          <option value="All">All Batches</option>
          <option value="Batch A">Batch A</option>
          <option value="Batch B">Batch B</option>
        </select>

        <input
          type="date"
          onChange={(e) =>
            setSelectedDate(e.target.value)
          }
        />
        <input
  type="text"
  placeholder="Search Student..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
  
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="card">
          <h3>Present</h3>
          <p>{presentStudents}</p>
        </div>

        <div className="card">
          <h3>Absent</h3>
          <p>{absentStudents}</p>
        </div>

        <div className="card">
          <h3>Attendance %</h3>
          <p>{attendancePercentage}%</p>
        </div>
      </div>
       <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Photo</th>
      <th>Name</th>
      <th>Batch</th>
      <th>Course</th>
      <th>Trainer</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Date</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
        <tbody> 
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.batch}</td>
              <td>{student.date}</td>
              <td>{student.status}</td>
              <td>
                <button
                  onClick={() =>
                    toggleAttendance(student.id)
                  }
                >
                  Mark
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;