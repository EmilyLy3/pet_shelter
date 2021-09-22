import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";


const CreatePet = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const history = useHistory()

    const [validationErrors, setValidationErrors] = useState({})


    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(res => {
                console.log("Response after submitting form info --> ", res)
                if(res.data.err) {
                    setValidationErrors(res.data.err.errors)
                } else {
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-3">
            <Link to="/">Back to home</Link>
            <h4 className="mt-5">Know a pet needing a home?</h4>
            <form onSubmit={(e)=>submitHandler(e)} className="mt-3">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="name" className="form-control"/>
                    <p className="text-danger">{validationErrors.name?.message}</p>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="type">Type:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="type" className="form-control"/>
                    <p className="text-danger">{validationErrors.type?.message}</p>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="description" className="form-control"/>
                    <p className="text-danger">{validationErrors.description?.message}</p>
                </div>
                <p className="mt-5">Skills (Optional)</p>
                <div className="form-group">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill1" className="form-control"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="skill2">Skill 2:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill2" className="form-control"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="skill3">Skill 3:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill3" className="form-control"/>
                </div>
                <input type="submit" value="Add Pet" className="btn btn-primary mt-3" />
            </form>
        </div>
    );
};



export default CreatePet;