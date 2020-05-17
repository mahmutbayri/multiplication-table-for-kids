import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
    renderButton() {
        const {isLogin, onLogin, onLogout} = this.props;
        if (isLogin) {
            return (
                <button type="button" className="btn btn-warning logout-btn" onClick={onLogout}>
                    <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt=""/>
                    Çıkış yap
                </button>
            );
        }
        return (
            <button type="button" className="btn btn-light login-btn" onClick={onLogin}>
                <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt=""/>
                Giriş yap
            </button>
        );
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-between p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
                <div className="d-flex align-items-center ">
                    <img className="mr-3" src="https://image.flaticon.com/icons/svg/2436/2436635.svg" alt="" width="100" height="100"/>
                    <div className="lh-100">
                        <h3 className="mb-0 text-white lh-100">Çarpım Tablosu</h3>
                        <small>Test your knowledge</small>
                    </div>
                </div>
                {this.renderButton()}
            </div>
        );
    }
}

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => {
        dispatch({type: 'SHOW_LOGIN_FORM'});
    },
    onLogout: () => {
        dispatch({type: 'USER_LOGOUT'});
    },
});

const mapStateToProps = (state) => ({
    isLogin: !!state.currentStudentsData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
