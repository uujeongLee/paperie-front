// src/components/TopBar.js

import React, { Component } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-awesome-modal';
import { Link } from "react-router-dom";
import "./SignIn.css";

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #FAFBFF;
`;

// const Button = styled.button`
//   margin-left: 10px;
//   padding: 5px 10px;
//   background-color: #3498db;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #2980b9;
//   }
// `


class TopBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      visible : false,
      id : "",
      password : "",
    }
  }

  _changeID = function() {
    const id_v = document.getElementsByName('Id')[0].value;
    
    this.setState({
      id : id_v
    });
  }

  _changePW = function() {
    const pw_v = document.getElementsByName("Pwd")[0].value;

    this.setState({
      password : pw_v
    });
  }

  openModal = function() {
    this.setState({
        visible : true
    });
  }

  closeModal = function() {
    this.setState({
        visible : false
    });
  }
  

  render() {
    console.log('아이디 : ' + this.state.id + ', 비밀번호 : ' + this.state.password);
    return (
      <TopBarWrapper>
        <Button variant="light" onClick={() => this.openModal()}>login</Button>&nbsp;
          <Modal
          visible={this.state.visible} 
          width="400"
          height="360"
          effect="fadeInDown"
          onClickAway={() => this.closeModal()}>
            <div className="modal_container">
              <div>
                <h4 className="login_title">로그인</h4>
                <span className="close" onClick={() => this.closeModal()}>&times;</span>
              </div>
              <div>
                <p className="no_account">계정이 아직 없으신가요?</p>
                <input type="button" className="signup" value="회원가입"/>
              </div>
              <form>
              <div className="login_div">
                  <div className="login_input_div">
                    <input
                    name="Id"
                    className="login_id"
                    type="text"
                    placeholder="아이디 혹은 이메일 주소"
                    onChange={() => this._changeID()}
                    />
                  </div>

                  <div className="login_input_div">
                    <input
                    name="Pwd"
                    className="login_pwd"
                    type="password"
                    placeholder="비밀번호"
                    onChange={() => this._changePW()}
                    />
                  </div>

                  <div>
                    <label>
                      <input type="checkbox" className="save_id" value="id"/>
                      아이디 저장  
                    </label>
                    <input type="button" className="find_id_pwd" value="아이디/비밀번호 찾기"/>
                  </div>

                  <div className="submit_div">
                    <div><input type="button" value="로그인"/></div>
                  </div>
              </div>
              </form>
            </div>
          </Modal>
        <Button variant="light">mypage</Button>
      </TopBarWrapper>
    );
  }

};

export default TopBar;
