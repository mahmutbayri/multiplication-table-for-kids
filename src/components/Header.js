import React, {Component} from 'react';

class Header extends Component {
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
                <button className="btn btn-light login-btn" data-toggle="modal" data-target="#loginModal">
                    <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt=""/>
                    Giriş yap
                </button>
                <button className="btn btn-warning logout-btn">
                    <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" width="30" height="30" alt=""/>
                    Çıkış yap
                </button>
            </div>

        );
    }
}

export default Header;
