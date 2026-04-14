import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    source: "",
    busType: "",
    facilities: [],
    date: "",
    seats: ""
  });

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updated = [...formData.facilities];

      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((item) => item !== value);
      }

      setFormData({ ...formData, facilities: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("busForm", JSON.stringify(formData));
    alert("Saved ✅");
    
    
    setFormData({
      name: "",
      gender: "",
      source: "",
      busType: "",
      facilities: [],
      date: "",
      seats: ""
    });
  };

  return (
    <div>
      <h1>Bus Booking Form</h1>

      <form onSubmit={handleSubmit}>
        {/* TEXT */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

       
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        /> Female
        <br /><br />

      
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          <option value="">Select Source</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nashik">Nashik</option>
        </select>

        <br />

        <select
          name="busType"
          value={formData.busType}
          onChange={handleChange}
        >
          <option value="">Select Bus Type</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>

        <br /><br />

      
        <label>Facilities: </label>
        <input
          type="checkbox"
          value="WiFi"
          checked={formData.facilities.includes("WiFi")}
          onChange={handleChange}
        /> WiFi

        <input
          type="checkbox"
          value="Charging"
          checked={formData.facilities.includes("Charging")}
          onChange={handleChange}
        /> Charging
        <br /><br />

     
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br /><br />

     
        <input
          type="number"
          name="seats"
          placeholder="Seats"
          value={formData.seats}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default App;