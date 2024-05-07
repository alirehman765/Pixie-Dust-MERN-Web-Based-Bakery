import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './navbar.css'
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="nav" variant="tabs">
                <table className="navTable">
                    <tr>
                        <td className="navTitle">
                            <h1>
                                <Link to="/" className="linkElement"> <p style={{"display":"inline","color":"white"}}>P I X I E </p><p style={{"display":"inline","color":"#871f78","-webkit-text-stroke":"1px #871f78 "}}>D</p><p style={{"display":"inline","color":"white"}}>UST</p></Link>
                            </h1>
                        </td>
                        <td className="navLogin">
                            <Link to="/profile">
                                <i className="material-icons" style={{ "font-size": "40px", "color": "white" }}>person</i>
                            </Link>
                        </td>
                        <td className="navCart">
                            <Link to="/cart">
                                <NotificationBadge count={this.props.dishCount} effect={Effect.SCALE} frameLength={5.0} />
                                <i className='fas fa-shopping-bag' style={{ "font-size": "20px", "color": "white" }}>cart</i>
                            </Link>
                        </td>
                    </tr>
                </table>
                <div className="navDiv">
                    <ul className="ulElement">
                        <Link to="/menu/Cookies" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                Cookies
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/Brownies" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                Brownies
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/Cinnamon_Rolls" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                Cinnamon Rolls
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/Banana_Bread" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                Banana Bread
                                </div>
                            </li>
                        </Link>

                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return ({
        dishCount: state.cart.dishCount,
    })
}

export default connect(mapStateToProps)(Navbar);
