import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import "./result.css";

function References() {

  return (
    <div className="result_border">
        <table className="caption-top table-borderless table-hover">
        <caption className="result_table_name"> 검색결과 </caption>
         <thead>
          <tr>
           <th className="search_name" scope="col" width="800px">논문제목</th>
          </tr>
         </thead>
         <tbody>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
          <tr className="result_name">
          </tr>
         </tbody>
        </table>
    </div>
  );
}

export default References;