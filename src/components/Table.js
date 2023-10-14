import { useEffect, useState } from "react"
import axios from "axios"

function Table(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/users")
        .then((res)=>{
            setData(res.data.users);
        })
        .catch()
    },[])

    const tableStuff = () => {
        return(
            data.map((val) => {
                return(
                    <tr>
                        <td className="py-3">{val.id}</td>
                        <td><img src = {val.image} style={{width:"5em"}} /></td>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.gender}</td>
                        <td>{val.email}</td>
                        <td>{val.username}</td>
                        <td>{val.domain}</td>
                        <td>{val.ip}</td>
                        <td>{val.university}</td>
                    </tr>
                  
                )
            })
        )
    }

    const tableHeadings = <tr style={{border: "1px solid white"}}>
        <th className="text-center">Sno</th>
        <th className="text-center">Profile Pic</th>
        <th className="text-center">First Name</th>
        <th className="text-center">Last Name</th>
        <th className="text-center">Gender</th>
        <th className="text-center">E-mail</th>
        <th className="text-center">Username</th>
        <th className="text-center">Domain</th>
        <th className="text-center">IP</th>
        <th className="text-center">University</th>
    </tr>;
    return(
        <div className="container-fluid bg-dark text-light">
            <h2 className="fw-bold text-center pt-2">Dummy data</h2>
            
            <table style={{border: "1px solid white"}} className="mx-auto mt-3">
                <tbody>
                    {tableHeadings}
                    {tableStuff()}
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default Table
