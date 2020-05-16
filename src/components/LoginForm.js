import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'Onur',
            userPassword: '1111',
            loginAlert: false,
        };
    }

    handleClose() {
        this.props.dispatch({
            type: 'HIDE_LOGIN_FORM',
        });
    }

    onChangeUserName(event) {
        this.setState({
            userName: event.target.value,
        })
    }

    onChangeUserPassword(event) {
        this.setState({
            userPassword: event.target.value
        })
    }

    handleUserCheck() {
        const {userName, userPassword} = this.state;

        let userCheck = this.props.students.find(user => {
            return user.userName === userName && user.userPassword === userPassword;
        });

        if (userCheck) {
            const {userId, userName, userScore} = userCheck;
            this.props.dispatch({
                type: 'LOGIN_USER',
                payload: {
                    userId,
                    userName,
                    userScore
                }
            });
        } else {
            this.setState({
                loginAlert: true,
            })
        }
    }

    render() {
        const {onClick} = this.props;

        return (
            <Modal show={true} onHide={this.handleClose.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Giriş Yap</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="form-group row">
                        <label className="col-sm-4" htmlFor="userName">Kullanıcı Adı</label>
                        <div className=" col-sm-8">
                            <input className="form-control" type="text" placeholder="Kullanıcı Adı" onChange={this.onChangeUserName.bind(this)} value={this.state.userName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4" htmlFor="userPass">Şifre</label>
                        <div className=" col-sm-8">
                            <input className="form-control " type="password" placeholder="Şifre" onChange={this.onChangeUserPassword.bind(this)} value={this.state.userPassword}/>
                        </div>
                    </div>
                    <div className="alert alert-danger login-control-alert" style={{display: this.state.loginAlert ? 'block' : 'none'}}>
                        Kullanıcı adınız veya şifreniz yanlış!
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="btn btn-success" onClick={this.handleUserCheck.bind(this)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
};

export default connect(mapStateToProps)(LoginForm)
