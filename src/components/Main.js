import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <h3>Name:</h3>
          <p>Osmium</p>
          <h3>Periodic Square:</h3>
          <img src="https://i.imgur.com/UPxmcjj.jpg" alt="Periodic Table"/>
          <h3>What family is it in?</h3>
          <p> the Platinum Family </p>
          <h3> Who discovered it, when, and how? </h3>
          <p> It was discovered by Smithson Tennant in 1803. </p>
          <p> According to Chemicool, "Tennant’s discovery of osmium began when he dissolved a sample of crude platinum in aqua regia, a mixture of hydrochloric acid and nitric acid, resulting in a metallic, black powder.Previous chemists had believed this powder was graphite, but Tennant – who had previous experience of working with carbon’s allotropes – thought differently. (3)Tennant treated the powder with sodium hydroxide and heated to the solution. He removed an alkali from the residue by adding water. He added hydrochloric acid to the remaining residue to form an acidic solution. The alkaline solution was found to contain osmium, while the acidic contained iridium." </p>
          <h3> What form is it most commonly found in and is it rare or common? </h3>
          <p> It is the rarest of all stable elements in Earth's crust, with 50 parts per trillion in the continental crust. </p>
          <p> Osmium alloys are found many places in the world- see "Interesting Facts, Values and Uses." </p>
          <p> Osmium is also found naturally alloyed with nickel and copper. </p>
          {close}
        </article>

        <article id="physical" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Physical Properties</h2>
          <h3> What are the Physical Properties of Osmium?</h3>
          <p>Osmium is blueish-white in color. It is also shiny. The melting point of Osmium is 3033°C (or 5941°F), and the boiling point of Osmium is 5027°C (or 9080°F). The density of Osmium is 22.5g per cubic centimeter. These numbers are the highest of the platinum-group metals, and among the highest of all elements. It is also different from other metals in that it cannot be melted or shaped like other metals, and it is unworkable.</p>
          {close}
        </article>

        <article id="chemical" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Chemical Properties</h2>
          <h3> What are the chemical properties of Osmium? </h3>
          <p>Osmium can be dissolved by acids or by aqua regia (which is a mixture of nitric acid and hydrochloric acid) after long periods of exposure. After it is heated and combined with oxygen, it forms Osmium Tetroxide, which is often used in the chemical industry (OsO4). Osmium Tetroxide has many uses but is toxic.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
 
