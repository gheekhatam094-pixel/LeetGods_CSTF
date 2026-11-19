import StudentCard from "@/components/StudentCard";
import students from "@/data/students.json";

export default function Home() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">All Students</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            rollNo={student.rollNo}
            department={student.department}
            image={student.image}
          />
        ))}
      </div>
    </div>
  );
}
