import React from "react";
import "./Form3.css"

function form3() {
  return (
    <div id="form">
      <h1>
        <div id="heading">ಸಮ್ಮತಿ ಪತ್ರ</div>
      </h1>

      <div id="content">
        <br />
        <p>
          <i>
            ನಾನು ಶ್ರೀ <input type="text" /> 'ಹೋಪ್' ಅಮಲು ಚಿಕಿತ್ಸಾ ಹಾಗೂ ಪುನರ್ವಸತಿ ಕೇಂದ್ರ, ಬೆಳಗಾವಿ, ಇದರ ಮದ್ಯ
            ವರ್ಜನಾ ಚಿಕಿತ್ಸಾ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಲು ದಿನಾಂಕ <input type="text" /> ರಂದು ಸ್ವ ಇಚ್ಛೆಯಿಂದ ಬಂದಿರುತ್ತೇನೆ. ಈ ಬಗ್ಗೆ
            ನನ್ನ ಹಾಗೂ ಕುಟುಂಬಸ್ಥರ ಯಾವುದೇ ಆಕ್ಷೇಪ ಇರುವುದಿಲ್ಲ.
          </i>
        </p>
        <br />
        <p>
          <i>
            ಚಿಕಿತ್ಸಾ ಅವಧಿಯಲ್ಲಿ ಸಂಘಟಕರು ಕೈಗೊಂಡ ಪ್ರತಿಯೊಂದು ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಸಕ್ರೀಯವಾಗಿ ಭಾಗವಹಿಸುತ್ತೇನೆ. ಸಂಸ್ಥೆಯ
            ಎಲ್ಲಾ ನಿಯಮಗಳನ್ನು ನಿಷ್ಠೆಯಿಂದ ಪಾಲಿಸುತ್ತೇನೆ ಹಾಗೂ ವೈದ್ಯರು ನಿಗದಿಪಡಿಸಿದ ದಿನಾಂಕದವರೆಗೆ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ
            ಪಾಲ್ಗೊಳ್ಳುತ್ತೇನೆ.
          </i>
        </p>
        <br />
      </div>

      <div id="signature1">
        <p>ಚಿಕಿತ್ಸಾರ್ಥಿಯ</p>
        <div id="name1">
          <b>ಹೆಸರು</b> <input type="text" />
        </div>

        <div id="sign1">
          <b>ಸಹಿ</b> <input type="file" id="photo-upload" name="photo" accept="image/*" />
        </div>
      </div>

      <p>
        <i>
          ಸಂಘಟಕರ ಗಮನಕ್ಕೆ ಬಾರದೇ, ತಿಳಿಸದೇ, ಸಂಸ್ಥೆಯಿಂದ ಹೊರಗೆ ಹೋಗಿ ಯಾವುದೇ ಅನಾಹುತ ಸಂಭವಿಸಿ ಸಮಸ್ಯೆಯಾದಲ್ಲಿ ದಾಖಲು ಪಡಿಸಿದ ನಾವೇ
          ಜವಾಬ್ದಾರರು.
        </i>
      </p>
      <br />

      <div id="signature2">
        <p>ದಾಖಲುಪಡಿಸಿದವರ</p>
        <div id="name2">
          <b>ಹೆಸರು</b> <input type="text" />
        </div>

        <div id="sign2">
          <b>ಸಹಿ</b> <input type="file" id="photo-upload" name="photo" accept="image/*" />
        </div>
      </div>
      <br />

      <p id="mobileNo">ಮೊಬೈಲ್ ನಂ. <input type="text" name="moNo" /></p>
      {/* <div id="pageNo">3</div> */}
      <center>
        <div className="footer">
          {/* <a href="/2.html">&laquo;</a>
          <a href="#">3</a>
          <a href="/4.html">&raquo;</a> */}
        </div>
      </center>
    </div>
  );
}

export default form3;
