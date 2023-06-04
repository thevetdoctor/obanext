"use client"

import { Formik, Field } from "formik";
import { useState } from "react";

export default function App() {
  const [ file, setFile ] = useState(null);

  return (
    <Formik
      initialValues={{ file: null }}
      onSubmit={(values, { setSubmitting }) => {
        // Handle file upload here
        event.preventDefault()
        console.log("values", values.file);
        setSubmitting(false);
      }}
    >
      {({ values, errors, handleSubmit, setFieldValue }) => (
        <form 
        onSubmit={handleSubmit} 
        className="mt-10 pb-20 h-1/2 px-5 items-center flex"
        encType="multipart/form-data"
        >
          <Field
            type="file"
            name="file"
            value={file?.name}
            placeholder="Upload an image"
            onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
              // setFile(URL.createObjectURL(event.currentTarget.files[0]));
            }}
          />
          {errors.file && <div>{errors.file}</div>}
          {values.file && <div>{values.file.name}</div>}
          <button
            className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="submit"
          >Submit</button>
        </form>
      )}
    </Formik>
  );
}