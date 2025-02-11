import { Student } from "./student";

export type Classroom = {
  classroomId: string;
  capacity: number;
  name: string;
  students: Record<string, Student>; // id: Student
  groups: Record<string, Group>; // id: Group
};
