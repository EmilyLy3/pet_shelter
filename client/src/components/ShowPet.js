import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';


const ShowPet = () => {
    const {id} = useParams();

    const [petInfo, setPetInfo] = useState({});

    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log("Response for getting one pet -->", res)
                setPetInfo(res.data.results)
            })
            .catch(err => {console.log(err)})
    }, [])


    const onClickHandler = (e, id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log("Response after axios delete -->", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-3">
            <Link to="/">Back to home</Link>
            <h4 className="mt-5">Details about: {petInfo.name}</h4>
            <table className="table table-striped table-dark mt-3">
                <tbody>
                    <tr>
                        <th>Pet type:</th>
                        <td>{petInfo.type}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{petInfo.description}</td>
                    </tr>
                    <tr>
                        <th>Skills:</th>
                        <td>
                            <div>{petInfo.skill1}</div>
                            <div>{petInfo.skill2}</div>
                            <div>{petInfo.skill3}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={(e)=>onClickHandler(e, petInfo._id)} className="btn btn-danger">Adopt {petInfo.name}</button>
        </div>
    );
};



export default ShowPet;