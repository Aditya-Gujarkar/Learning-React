import { useState } from "react";

export default function CommentsForm() {

    const [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: "",
    });

    let handleInputChange = (event) => {
        setFormData((formData) => {
            return { ...formData, [event.target.name]: event.target.value }
        })
    }

    let submitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remark: "",
            rating: "",
        })
    }

    return (
        <div>
            <h3>Give a Comment!</h3>
            <label htmlFor="username">Username : </label>
            &nbsp;&nbsp;
            <input type="text"
                placeholder="write your name"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange} />
            <br /><br />

            <label htmlFor="remark">Remark : </label>
            &nbsp;&nbsp;
            <textarea type="text"
                placeholder="write few words"
                id="remak"
                name="remark"
                value={formData.remark}
                onChange={handleInputChange} />
            <br /><br />

            <label htmlFor="rating">Rating : </label>
            &nbsp;&nbsp;
            <input type="number"
                id="rating"
                name="rating"
                min={1}
                max={5}
                value={formData.rating}
                onChange={handleInputChange} />
            <br /><br />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}