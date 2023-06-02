import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'students',
    initialState: [],
    reducers: {
        addStudent: (state, action) => {
            const id = state.length + 1;
            state.push({ id: id, name: action.payload, subjects: [] });
        },
        removeStudent: (state, action) => {
            const studentId = action.payload;
            return state.filter((student) => student.id !== studentId);
        },
        addSubject: (state, action) => {
            const { studentId, subject } = action.payload;
            const student = state.find((student) => student.id === studentId);
            if (student) {
                const indexSubject = student.subjects.length + 1;
                student.subjects.push({ id: indexSubject, subject })
            }
        },
        removeSubject: (state, action) => {
            const { studentId, subjectId } = action.payload;
            const student = state.find((student) => student.id === studentId);
            if (student) {
                student.subjects = student.subjects.filter((subject) => subject.id !== subjectId);
            }
        }
    }
});

const studentReducer = studentSlice.reducer;
export const { addStudent, removeStudent, addSubject, removeSubject } = studentSlice.actions;
export default studentReducer;