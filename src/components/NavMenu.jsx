import React, {useState} from 'react';
import {
    Navbar,
    Button,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import facebookIcon from '../../static/img/facebook.png'
import langEn from '../../static/img/langEn.png'
import twitterIcon from '../../static/img/twitter.png'
import searchIcon from '../../static/img/search.png'

const NavMenu = (props) => {

    return (

        <div className={"navbar-end"}>
            <Navbar  light expand="md">
                <ButtonGroup>
                    <Button outline color="secondary">Home</Button>{' '}

                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret outline color="secondary">
                            About Us
                        </DropdownToggle>

                        <DropdownMenu>

                            <DropdownItem href={"/about/education"}>Education</DropdownItem>
                            <DropdownItem>Research</DropdownItem>
                            <DropdownItem>Clinic</DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>FAQs</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>

                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret outline color="secondary">
                            Team
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem disabled>Directors</DropdownItem>
                            <DropdownItem disabled>Administrators</DropdownItem>
                            <DropdownItem>Practitioners and Educators</DropdownItem>
                            <DropdownItem>Researchers</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>


                    <Button outline color="secondary">Services</Button>{' '}

                    <Button outline color="secondary">Activities</Button>{' '}

                    <Button outline color="secondary">Contact</Button>{' '}

                    <Button color="info">Donate</Button>{' '}


                </ButtonGroup>
                <ButtonGroup>

                <div >
                    <img className={"search"} src={searchIcon}/>

                    <img className={"search"} src={twitterIcon}/>
                    <br />
                    <img className={"search"} src={langEn}/>

                    <img className={"search"} src={facebookIcon}/>
                </div>


                </ButtonGroup>

            </Navbar>



        </div>
    );
}

export default NavMenu


/*wellness design source   https://shcs.ucdavis.edu/wellness/what-is-wellness*/

/*  Work need: fix-top; on top transparent, scroll down non transparent  */