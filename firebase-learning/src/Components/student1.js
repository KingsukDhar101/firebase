import React, {useState, useEffect} from 'react'
import {
  collection,
  addDoc,
  doc,
  getFirestore,
  deleteDoc,
  query,
  onSnapshot,
} from "firebase/firestore"; 
import {db} from "../firebase-config";


export default function Student1() {

  const [students, setStudents] = React.useState([]);
  const q = query(collection(db, "student_data"));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const s = [];
      querySnapshot.forEach((doc) => {
        s.push(doc);
      });
      setStudents(s);
    });
  }, []);

  const rollno = React.createRef();
  const name = React.createRef();
  const marks = React.createRef();

  function handleDelete(s) {
    try {
      console.log(s.id);
      const student = doc(db, "student_data", s.id);
      deleteDoc(student);
    } catch (err) {
      console.log(err);
    }
  }

  async function handelAdd() {
    try {
      const docRef = await addDoc(collection(db, "student_data"), {
        name: name.current.value,
        rollno: rollno.current.value,
        marks: marks.current.value,
      });
      console.log("Document written with ID: ", docRef.id);
      
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="student-container">
      <div>
        <h1>Learning FireStore</h1>
        <p>Student Details</p>
        <p>
          <input type="text" placeholder="rollno" ref={rollno} />
        </p>
        <p>
          <input type="text" placeholder="name" ref={name} />
        </p>
        <p>
          <input type="text" placeholder="marks" ref={marks} />
        </p>
        <div>
          <button onClick={handelAdd}>Add</button>
          <button onClick="" >Update</button>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td>rollno</td>
            <td>name</td>
            <td>marks</td>
          </tr>
          {students.map((ele) => (
            <tr key={ele.data().rollno}>
              <td>{ele.data().rollno}</td>
              <td>{ele.data().name}</td>
              <td>{ele.data().marks}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(ele);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
