import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Osmium</h1>
                <p>The 76th element of the periodic table.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Basic Info</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Physical Properties</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Chemical Properties</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Interesting Facts, Values, and Uses</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
