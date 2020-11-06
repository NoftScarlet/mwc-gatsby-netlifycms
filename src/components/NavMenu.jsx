import React, {useState} from 'react';
import {
    Nav,
    Navbar,
    Button,
    ButtonGroup,
    UncontrolledButtonDropdown,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col,NavItem,NavLink
} from 'reactstrap';
import facebookIcon from '../../static/img/facebook.png'
import langEn from '../../static/img/langEn.png'
import twitterIcon from '../../static/img/twitter.png'
import searchIcon from '../../static/img/search.png'
import MenuIcon from '@material-ui/icons/Menu';


const NavMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <div >
            <button
                aria-controls="navbar-default"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler btn btn-secondary"
                data-target="#navbar-default"
                data-toggle="collapse"
                id="navbar-default"
                type="button"
            >
                <MenuIcon /> Menu
            </button>
            <Navbar  light expand="md">

                <Collapse isOpen={isOpen} navbar>

                    <ButtonGroup className={"top-menu"}>
                        <Button color="secondary" href={"/"}>Home</Button>{' '}
                        <UncontrolledButtonDropdown>

                            <DropdownToggle caret outline color="secondary">
                                About Us
                            </DropdownToggle>

                            <DropdownMenu>

                                <DropdownItem href={"/about/education"}>Education</DropdownItem>
                                <DropdownItem href={"/about/research"}>Research</DropdownItem>
                                <DropdownItem href={"/about/clinic"}>Clinic</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem href={"/about/faqs"}>FAQs</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>

                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret outline color="secondary">
                                Team
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href={"/team/directors"}>Directors</DropdownItem>
                                <DropdownItem href={"/team/administrators"}>Practitioners and Educators</DropdownItem>
                                <DropdownItem href={"/team/researchers"}>Researchers</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        <Button outline color="secondary" href={"/practitioners-services"}>Practitioners and Services</Button>{' '}
                        <Button outline color="secondary" href={"/activities"}>Activities</Button>{' '}
                        <Button outline color="secondary" href={"/contact"}>Contact</Button>{' '}
                        <Button color="info">Donate</Button>{' '}
                    </ButtonGroup>
                </Collapse>
                <ButtonGroup>
                    <Container>
                        <Row  className={"nav-widgets"}>
                            <Col xs={"6"}>
                                <Button color="secondary" ><img className={"search"} src={searchIcon}/></Button>
                            </Col>
                            <Col xs={"6"}>
                                <Button color="secondary" ><img className={"search"} src={twitterIcon}/></Button>
                            </Col>
                        </Row>
                        <Row  className={"nav-widgets"}>
                            <Col xs={"6"}>
                                <Button color="secondary"><img className={"search"} src={langEn}/></Button>
                            </Col>
                            <Col xs={"6"}>
                                <Button color="secondary"><img className={"search"} src={facebookIcon}/></Button>
                            </Col>
                        </Row>
                    </Container>
                </ButtonGroup>
            </Navbar>
        </div>
    );
}

export default NavMenu


/*wellness design source   https://shcs.ucdavis.edu/wellness/what-is-wellness*/

/*  Work need: fix-top; on top transparent, scroll down non transparent  */