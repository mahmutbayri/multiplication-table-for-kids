import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ParcelLogo from '../img/parcel-logo.svg';

const Header = ({name}) => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img width="120" src={ParcelLogo} alt={name}/>
                </a>
            </div>
        </nav>
    </header>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    name: state.name,
});

export default connect(
    mapStateToProps,
)(Header);
