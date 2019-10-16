import React from 'react';
const menuTreeJSON = require("../static/menu-tree");

/*
* This component loads menu object from a static json file, and recursively (Depth first Traversal) render the menu structure.
* It is converted from my own solution of rendering menu with vanillaJS: https://github.com/NoftScarlet/JSON-Menu-Tree-vanilaJS/blob/master/menu-tree-builder.js
* */


const LiCreator = (text, link, liChildren) => {
    return (
        <li>
            <a href={link}>
                {text}
            </a>
            {liChildren}
        </li>
    )
};


const UlTreeBuilder = ({arrObjs, recLink}) => {

    let MenuItems = [];

    const UlParent = ({UlChildren}) => {
        return (<ul>{UlChildren}</ul>)
    };

    for (let i = 0; i < arrObjs.length; i++) {
        if (arrObjs[i].children) { // if the item has children
            let ulWithChildren = <UlTreeBuilder arrObjs={arrObjs[i].children} recLink={arrObjs[i].link}/>; //we then create a ul with children, by self invoking UlTreeBuilder
            let liSingle = LiCreator(arrObjs[i].text, recLink+arrObjs[i].link, ulWithChildren);// then we add this created ul into a new li
            MenuItems.push(<UlParent UlChildren={liSingle}/>)//then we put this li into ul, and push ul into the MenuItems array of the current recursion level
        } else { // if the item has no children
            let liSingle = LiCreator(arrObjs[i].text, arrObjs[i].link);//we simply create a li with no children
            MenuItems.push(<UlParent UlChildren={liSingle}/>)//then we put this li into ul, and push ul into the MenuItems array of the current recursion level
        }
    }

    return (MenuItems)
};


const NavMenu = () => {
    return (<UlTreeBuilder arrObjs={menuTreeJSON.menu} recLink={""}/>)
};

export default NavMenu