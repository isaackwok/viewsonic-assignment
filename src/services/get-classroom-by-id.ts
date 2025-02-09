const mockClassroomInfo = {
  capacity: 30,
  name: "302 Science",
  students: [
    {
      id: "1",
      name: "Philip",
      isActive: true,
      initialScore: 2,
    },
    {
      id: "2",
      name: "Darrell",
      isActive: true,
      initialScore: 5,
    },
    {
      id: "3",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "4",
      name: "Cody",
      isActive: true,
      initialScore: 9,
    },
    {
      id: "5",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "6",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "7",
      name: "Bessie",
      isActive: true,
      initialScore: 0,
    },
    {
      id: "8",
      name: "Wendy",
      isActive: true,
      initialScore: 3,
    },
    {
      id: "9",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },

    {
      id: "10",
      name: "Esther",
      isActive: true,
      initialScore: 1,
    },
    {
      id: "11",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },

    {
      id: "12",
      name: "Gloria",
      isActive: true,
      initialScore: 1,
    },
    {
      id: "13",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "14",
      name: "Lee",
      isActive: true,
      initialScore: 2,
    },
    {
      id: "15",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "16",
      name: "Ann",
      isActive: true,
      initialScore: 0,
    },
    {
      id: "17",
      name: "Jacob",
      isActive: true,
      initialScore: 8,
    },
    {
      id: "18",
      name: "Calvin",
      isActive: true,
      initialScore: 2,
    },
    {
      id: "19",
      name: "Guest",
      isActive: false,
      initialScore: 0,
    },
    {
      id: "20",
      name: "Joe",
      isActive: true,
      initialScore: 0,
    },
  ],
};

export const getClassroomInfoById = async (classroomId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    classroomId,
    ...mockClassroomInfo,
  };
};
