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
        console.log("values", values.file);
        setSubmitting(false);
      }}
    >
      {({ values, errors, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className="mt-10 pb-20 h-1/2 px-5 items-center flex">
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
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}