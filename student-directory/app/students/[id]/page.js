import Link from "next/link";
import { notFound } from "next/navigation";
import students from "@/data/students.json";

// Dynamic route: the folder name [id] becomes params.id
export default function StudentDetails({ params }) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    notFound();
  }

  return (
    <div className="bg-white border rounded p-6 max-w-lg mx-auto">
      <Link href="/" className="text-blue-600 text-sm">
        &larr; Back to list
      </Link>

      <div className="text-center my-4">
        <img
          src={student.image}
          alt={student.name}
          className="w-32 h-32 rounded-full mx-auto mb-3"
        />
        <h2 className="text-2xl font-bold">{student.name}</h2>
      </div>

      <div className="space-y-2">
        <p><b>Roll No:</b> {student.rollNo}</p>
        <p><b>Department:</b> {student.department}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Phone:</b> {student.phone}</p>
        <p><b>CGPA:</b> {student.cgpa}</p>
        <p><b>Address:</b> {student.address}</p>
        <p><b>Skills:</b> {student.skills.join(", ")}</p>
      </div>
    </div>
  );
}
