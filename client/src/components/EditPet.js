import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router';


const EditPet = () => {
    const {id} = useParams();

    const [petInfo, setPetInfo] = useState([]);

    const history = useHistory();

    const [validationErrors, setValidationErrors] = useState({});


    useEffect(() => {
            axios.get(`http://localhost:8000/api/pets/${id}`)
                .then(res => {
                    console.log("Response for getting one pet -->", res)
                    setPetInfo(res.data.results)
                })
                .catch(err => {console.log(err)})
        }, [])


    const changeHandler = (e) => {
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, petInfo)
            .then(res => {
                console.log("Response after making put request --> ", res)
                if(res.data.err) {
                    setValidationErrors(res.data.err.errors)
                } else {
                    history.push(`/pets/${id}`)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-3">
            <Link to="/">Back to home</Link>
            <h4 className="mt-5">Edit {petInfo.name}</h4>
            <form onSubmit={(e)=>submitHandler(e)} className="mt-3">
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="name" value={petInfo?.name} className="form-control"/>
                    <p className="text-danger">{validationErrors.name?.message}</p>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="type">Type:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="type" value={petInfo?.type} className="form-control"/>
                    <p className="text-danger">{validationErrors.type?.message}</p>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description">Description:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="description" value={petInfo?.description} className="form-control"/>
                    <p className="text-danger">{validationErrors.description?.message}</p>
                </div>
                <p className="mt-5">Skills (Optional)</p>
                <div className="form-group">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill1" value={petInfo?.skill1} className="form-control"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="skill2">Skill 2:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill2" value={petInfo?.skill2} className="form-control"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="skill3">Skill 3:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="skill3" value={petInfo?.skill3} className="form-control"/>
                </div>
                <input type="submit" value="Edit Pet" className="btn btn-primary mt-3" />
            </form>
        </div>
    );
};



export default EditPet;