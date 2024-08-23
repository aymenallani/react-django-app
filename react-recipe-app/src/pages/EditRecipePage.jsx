import React, { useEffect, useState } from 'react';
import "./AddRecipePage.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditRecipePage = ({ updateRecipe }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/${slug}`)
            .then(res => {
                setTitle(res.data.title);
                setBody(res.data.body);
                setCategory(res.data.category);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [slug]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title && !body && !category && !image) return;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }

        updateRecipe(formData, slug); 
        navigate(`/recipes/${slug}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5>Update Recipe</h5>
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
                    Recipe's category
                </label>
                <select
                    className="form-select"
                    id="category"
                    aria-label="Default select example"
                    style={{ height: "40px" }}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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

            <button className="btn btn-primary d-flex justify-content-center" style={{ width: "100%" }}>Update Recipe</button>
        </form>
    );
};

export default EditRecipePage;
