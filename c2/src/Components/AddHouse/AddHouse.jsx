import { useState } from "react";
import axios from "axios";

export const AddHouse = () => {


    const [formData, setFormData] = useState({
        name:"",
        ownerName: "",
        address:"",
        areaCode:"",
        rent:"",
        bachelor:"",
        married:"",
        image:"",
    })

    const handleChange = (e)=>{
        const {className,value} = e.target;
        // console.log(className,value)
        setFormData({...formData, [className]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/houses", formData).then(()=>{
            alert("Data submited successfuly")
        });
    }



    return (
      <div className="addHouseContainer">
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input onChange={handleChange} type="text" className="name"  />
          <br />
          <label>ownerName</label>
          <input onChange={handleChange}  type="text" className="ownerName" required />
          <br />
          <label>address</label>
          <input onChange={handleChange}  type="text" className="address" required />
          <br />
          <label>areaCode</label>
          <input onChange={handleChange}  type="text" className="areaCode" required />
          <br />
          <label>rent</label>
          <input onChange={handleChange}  type="text" className="rent" required />
          <br />
          <label>preferredTenant</label>
          <br />
          <label>bachelor</label>
          <input onChange={handleChange}  type="checkbox" className="bachelor" />
          <br />
          <label>married</label>
          <input onChange={handleChange}  type="checkbox" className="married" />
          <br />
          <label>image</label>
          <input onChange={handleChange}  type="text" className="image" required />
          <br />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    );
  };