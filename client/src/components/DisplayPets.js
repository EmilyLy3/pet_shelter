import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const DisplayPets = () => {
    const [allPets, setAllPets] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log("Response for getting all pets -->", res)
                // res.data.results.sort(function ( a, b ) {
                //     if (a.name < b.name){
                //         return -1;
                //     }
                //     if (a.name > b.name){
                //         return 1;
                //     }
                //     return 0;
                // })
                setAllPets(res.data.results)
            })
            .catch(err => console.log(err))
        }, [])


    const sortHandler = (e) => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                res.data.results.sort(function ( a, b ) {
                    if (a.type < b.type){
                        return -1;
                    }
                    if (a.type > b.type){
                        return 1;
                    }
                    return 0;
                })
                setAllPets(res.data.results)
            })
            .catch(err => console.log(err))
        console.log("SORTED PETS ------>", allPets)
    }


    return (
        <div className="mt-3">
            <Link to="/create_pet">Add a pet to the shelter</Link>
            <h4 className="mt-5">These pets are looking for a good home</h4>
            <button onClick={(e)=>sortHandler(e)} className="btn btn-primary">Sort by type</button>
            <table className="table table-striped table-dark mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets.map((pet, i) => {
                            return <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>Details</Link> | <Link to={`/pets/edit/${pet._id}`}>Edit</Link>
                                </td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};



export default DisplayPets;