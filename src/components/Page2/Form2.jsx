import React from "react";
import "./Form2.css"
import { useNavigate } from 'react-router-dom';

function Form2() {
  const navigate= useNavigate()
    function page1(){
          navigate("/")
    }
    function page3()
    {
      navigate("/form3")
    }
  return (
    <div className="id1">
      <div id="p1">
        <p><b>Any issue / concerned expressed by client / Family:</b></p>
        <b>1</b><input type="text" placeholder="" /><br /><br />
        <b>2</b> <input type="text" placeholder="" /><br /><br />
        <b>3</b><input type="text" placeholder="" /><br /><br />
        <b>4</b> <input type="text" placeholder="" /><br /><br />
        <p><b>Impression of Intake counsellor: </b><input type="text" placeholder=" " /></p>
        <p>
          <b>Action taken: </b>
          <label>
            <input type="radio" id="option1" name="choice" value="option1" />
            Admitted
          </label>
          <label>
            <input type="radio" id="option2" name="choice" value="option2" />
            Given later Date
          </label>
          <label>
            <input type="radio" id="option3" name="choice" value="option3" />
            Referral
          </label>
          <label>
            <input type="radio" id="option4" name="choice" value="option4" />
            Denied Admission
          </label>
        </p>
        <p style={{ position: 'relative', left: '30%' }}>
          <b>Address: </b><input type="text" placeholder="" />
        </p>
      </div>
      <hr />
      <div id="p2">
        <table>
          <thead>
            <tr>
              <th colSpan="4" style={{ textAlign: 'left' }}>Contact Phone Numbers:</th>
            </tr>
            <tr>
              <th> </th>
              <th>Number</th>
              <th>Name</th>
              <th>Relation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Mob No.1</b></td>
              <td><input type="text" placeholder="" maxLength="10" /></td>
              <td><input type="text" placeholder="" maxLength="20" /></td>
              <td><input type="text" placeholder="" /></td>
            </tr>
            {/* Add other table rows here */}
          </tbody>
        </table>
        <p>
          <b>Remarks : </b>
          <input type="text" placeholder=" " /><br />
          <input type="text" placeholder=" " /><br />
          <input type="text" placeholder="" /><br />
          <input type="text" placeholder="" />
        </p><br />
        <p style={{ position: 'relative', left: '75%' }}>
          <b><u>Signature of the Counsellor</u></b><br /><br />
          <input type="file" id="photo-upload" name="photo" accept="image/*" />
        </p>
      </div>
      <center>
        <div className="footer" >
          {/* <a href="/1.html"></a>
          
          <a href="/3.html">&raquo;</a> */}
          <button onClick={page1}>prev</button>
          <button >2</button>
            {/* <a href="#" >2</a> */}
          <button onClick={page3}>next</button>
        </div>
      </center>
    </div>
  );
}

export default Form2;
