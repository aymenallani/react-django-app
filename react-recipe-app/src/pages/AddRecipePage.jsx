import React, { useState } from 'react';
import "./AddRecipePage.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddRecipePage = ({ addRecipe }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body || !category) {
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }

        axios.post('http://127.0.0.1:8000/recipes/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            addRecipe(response.data); 
            navigate("/");   
            window.location.reload();
        })
        .catch(error => {
            console.error("There was an error adding the recipe!", error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Add New Recipe</h5>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    className="form-control"
                    id="title"
                    placeholder="Enter recipe's title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">
                    Content
                </label>
                <textarea
                    className="form-control"
                    id="body"
                    rows={4}
                    placeholder="Enter recipe's content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Recipe's Category
                </label>
                <select
                    className="form-select"
                    id="category"
                    aria-label="Default select example"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ height: "40px" }}
                >
                    <option value="">Pick a category</option>
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="LUNCH">Lunch</option>
                    <option value="DINNER">Dinner</option>
                    <option value="SNACKS">Snacks</option>
                    <option value="DESSERTS">Desserts</option>
                    <option value="BEVERAGES">Beverages</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">
                    Recipe Image
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={handleImageChange}
                />
            </div>

            <button className="btn btn-primary d-flex justify-content-center" style={{ width: "100%" }}>
                Add Recipe
            </button>
        </form>
    );
};

export default AddRecipePage;
