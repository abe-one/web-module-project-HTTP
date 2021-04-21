import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const initialFormValues = {
  title: "",
  director: "",
  genre: "",
  metascore: 0,
  description: "",
};

const AddMovieForm = ({ setMovies }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, { ...formValues, id: 44 })
      .then((res) => {
        setMovies(res.data);
        push("/movies");
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {});
  };

  return (
    <div className="col">
      <div className="modal-content">
        <form onSubmit={handleAdd}>
          <div className="modal-header">
            <h4 className="modal-title">
              Adding <strong>{formValues.title}</strong>
            </h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="title"></label>
              Title
              <input
                name="title"
                type="text"
                value={formValues.title}
                onChange={handleChange}
                placeholder="Title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input
                name="director"
                type="text"
                value={formValues.director}
                onChange={handleChange}
                placeholder="Director"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input
                name="genre"
                type="text"
                value={formValues.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="metascore">Metascore</label>
              <input
                name="metascore"
                type="number"
                value={formValues.metascore}
                onChange={handleChange}
                placeholder="Metascore"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={formValues.description}
                onChange={handleChange}
                placeholder="Description"
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="submit"
              className="btn btn-info"
              value="Submit Movie"
            />
            <Link to={"/movies"}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
