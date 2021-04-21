import React, { useState } from "react";

const initialFormValues = {
  title: "",
  director: "",
  genre: "",
  metascore: 0,
  description: "",
};

const AddMovieForm = ({}) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="col">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">
            Adding <strong>{formValues.title}</strong>
          </h4>
        </div>
        <div className="modal-body">
          <label htmlFor="title">
            Title
            <input
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleChange}
              placeholder="Title"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
