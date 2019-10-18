import React, { useState } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavMenu = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div>

            <Button color="info">Home</Button>{' '}

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color={"info"}>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>

                    <DropdownItem disabled>Education</DropdownItem>
                    <DropdownItem disabled>Research</DropdownItem>
                    <DropdownItem >Clinic</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>FAQs</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color={"info"}>
                    Button Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem disabled>Directors</DropdownItem>
                    <DropdownItem disabled>Administrators</DropdownItem>
                    <DropdownItem >Practitioners and Educators</DropdownItem>
                    <DropdownItem>Researchers</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <Button color="info">Services</Button>{' '}

            <Button color="info">Activities</Button>{' '}

            <Button color="info">Contact</Button>{' '}

            <Button color="info">Donate</Button>{' '}
        </div>
    );
}

export default NavMenu


/*wellness design source   https://shcs.ucdavis.edu/wellness/what-is-wellness*/

/*  Work need: fix-top; on top transparent, scroll down non transparent  */