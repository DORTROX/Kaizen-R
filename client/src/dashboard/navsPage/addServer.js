import React, { useState } from 'react'
import '../../css/addServer.css'
import axios from 'axios'
export default function addServer() {
  const [error, seterror] = useState([]);
  function ValidateServerName() {
    let arr = error;
    let usernamme = document.getElementById("Sname").value;
    if (/[-!@#$%^&*()_+|~=`{}/[]:";'<>?,.]/.test(usernamme)) {
      if (arr.indexOf("No special Characters are allowed") !== -1) {
      } else {
        arr.push("No special Characters are allowed");
      }
    } else {
      if (!arr || arr.indexOf("No special Characters are allowed") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "No special Characters are allowed"
        );
        arr = filtered;
      }
    }
    if (usernamme.length > 10) {
      if (arr.indexOf("Can't be longer than 10 ") !== -1) {
      } else {
        arr.push("Can't be longer than 10 ");
      }
    } else {
      if (!arr || arr.indexOf("Can't be longer than 10 ") !== -1) {
        let filtered = arr.filter(
          (val) => val !== "Can't be longer than 10 "
        );
        arr = filtered;
      }
    }
    seterror(arr);
  }
  function previewImage() {
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("file").files[0])
    reader.onload = () => {
      const preview = document.getElementById('preview');
      preview.src = reader.result;
   };
  }
  function createServer() {
    if (error.length === 0) {
      let form = new FormData();
      form.append("image", document.getElementById("file").files[0])
      axios
      .post(
        "https://api.imgbb.com/1/upload?key=7bd49ee45c0b60ced25adbda95e5baf5&image=", form)
      .then((response) => {
        let sata = {Sname:document.getElementById("Sname").value,members: localStorage.getItem("Name").toString(), imageUri : response.data.data.image.url}
        axios.post("http://localhost:1000/CreateServer", JSON.stringify(sata)).then((response) => {
          window.alert(response.data)
        })
      })
      .catch((error) => {
        console.log("error", error);
      }); 
    } else {
      window.alert(error[0])
    }

  }
  return (
    <div className='addServer'>
      <div className="banner">
        <img src="" alt="" />

      <div className="realAdd">
        <div className='items'>
          <div>
            <div className='prevBoxImg'><img id="preview" src="" alt="" srcSet="" /></div>
            <input onChange={() => previewImage()} id="file" type="file" name=""/>
          </div>
          <div className='prevBoxName'>
            <p>Server Name</p>
            <input type="text" name="" id="Sname" onChange={() => ValidateServerName()}/>
            <p onClick={() => createServer()}>Create Server</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}