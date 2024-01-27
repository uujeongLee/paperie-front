import React, {  useEffect, Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import "./table.css";
import copy_img from "../assets/copy_img.png"
import { motion, useAnimation } from 'framer-motion';

function References() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치에 따라 애니메이션 컨트롤
      const scrollY = window.scrollY;
      controls.start({ opacity: scrollY > 50 ? 1 : 0.5 }); // 스크롤 위치에 따라 opacity 조절
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const handleCopyClipBoard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (e) {
      alert('클립보드 복사에 실패하였습니다');
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0.5 }}
    animate={controls}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    className="table_border"
  >
    <table className="caption-top table-borderless table-hover">
    <caption className="refer_table_name"> 출처표기법 </caption>
      <thead>
        <tr>
          <th className="table_menu" scope="col">Type</th>
          <th className="table_menu" scope="col">Result</th>
          <th className="table_menu" scope="col">Copy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='refer_type' scope="row" width="200px">APA</td>
          <td id="apaResult" className='apa_result' width="500px">Smith, J. A. (2022). Climate Change and Its Impact on Biodiversity. Environmental Science Journal, 28(3), 123-145.</td>
          <td>
            <button type="button" className="copy_button" onClick={() => handleCopyClipBoard(document.getElementById("apaResult").innerHTML)}>
              <div>
                <img class="copy_img" src={copy_img}/>
                Copy
              </div>
            </button>
          </td>
        </tr>
        <tr>
          <td className='refer_type' scope="row">Chicago</td>
          <td id="chicagoResult" className='chicago_result'>Smith, John A. "Climate Change and Its Impact on Biodiversity." Environmental Science Journal 28, no. 3 (2022): 123-145.</td>
          <td>
            <button type="button" className="copy_button" onClick={() => handleCopyClipBoard(document.getElementById("chicagoResult").innerHTML)}>
              <div>
                <img class="copy_img" src={copy_img}/>
                Copy
              </div>
            </button>
          </td>
        </tr>
        <tr>
          <td className='refer_type' scope="row">MLA</td>
          <td id="mlaResult" className='mla_result'>Smith, John A. "Climate Change and Its Impact on Biodiversity." Environmental Science Journal, vol. 28, no. 3, 2022, pp. 123-145.</td>
          <td>
            <button type="button" className="copy_button" onClick={() => handleCopyClipBoard(document.getElementById("mlaResult").innerHTML)}>
              <div>
                <img class="copy_img" src={copy_img}/>
                Copy
              </div>
            </button>
          </td>
        </tr>
        <tr>
          <td className='refer_type' scope="row">Vancouver</td>
          <td id="vancouverResult" className='vancouver_result'>Smith JA. Climate Change and Its Impact on Biodiversity. Environmental Science Journal. 2022;28(3):123-145.</td>
          <td>
            <button type="button" className="copy_button"
            onClick={() => handleCopyClipBoard(document.getElementById("vancouverResult").innerHTML)}>
              <div>
                <img class="copy_img" src={copy_img}/>
                Copy
              </div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </motion.div>
  );
}

export default References;