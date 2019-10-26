import React from 'react'
import {Link} from 'gatsby'
import github from '../img/github-icon.svg'

import logo from '../../static/img/png-logo-transparent-bg.png'
import NavMenu from './NavMenu'
import {Navbar as Navbarz} from 'reactstrap'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: '',
        }
    }


    render() {
        return (
            <Navbarz className={"sticky-top"}>

                <a href={"/"}>
                    <img className={"logo"} src={logo} alt={"Musician's Wellness Centre logo"}/>
                    <span>
                    <h3 style={{
                        marginLeft:'10px',
                        textAlign: 'center',
                        color: 'black',
                        opacity: '0.6',
                        fontFamily:'pavman',
                        display:'inline-block'
                    }}>
                        <strong>Musicians' Wellness Centre<br/></strong>
                    </h3>
                    </span>
                </a>

                <NavMenu/>

            </Navbarz>
        )
    }
}

export default Navbar
