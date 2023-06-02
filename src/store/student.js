import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    deleteStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload);
    },
    addCourse: (state, action) => {
      const { studentId, course } = action.payload;
      const student = state.find(student => student.id === studentId);
      student.courses = student.courses || []; // Kiểm tra và khởi tạo mảng courses nếu chưa tồn tại
      student.courses.push(course);
    },
    deleteCourse: (state, action) => {
      const { studentId, courseId } = action.payload;
      const student = state.find(student => student.id === studentId);
      if (student && student.courses) {
        student.courses = student.courses.filter(course => course.id !== courseId);
      }
    },
  },
});

export const { addStudent, deleteStudent, addCourse, deleteCourse } = studentSlice.actions;

export default studentSlice.reducer;
