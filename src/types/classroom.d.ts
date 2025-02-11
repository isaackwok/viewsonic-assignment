import { Student } from "./student";

export type Classroom = {
  classroomId: string;
  capacity: number;
  name: string;
  students: Student[];
};
