import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "" });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({ title: task.title, description: task.description });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={task}
        onSubmit={async (values) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          setTask({ title: "", description: "" });
          navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="uppercase text-2xl font-bold py-4">
              {params.id ? "Edit task" : "Create task"}
            </h1>
            <label className="block pt-3 font-bold">Title</label>
            <input
              className="p-2 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block pt-3 font-bold">Description</label>
            <textarea
              className="p-2 rounded-sm w-full"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 mt-2 w-full text-white rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
