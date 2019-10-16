import React from 'react';

const menuTreeJSON = require("../static/menu-tree");


const LiCreator = ({singleMenuElement}) => {
    return (
        <li>
            <a href={singleMenuElement.link}>
                {singleMenuElement.text}
            </a>
            {singleMenuElement.children}
        </li>
    )
};


const UlTreeBuilder = ({arrObjs}) => {

    const UlParent = ({children}) => {
        return (<ul>{children}</ul>)
    };

    for (let i = 0; i < arrObjs.length; i++) {

        const LiSingle = ({liSingleChildren}) => {
            return (<LiCreator singleMenuElement={arrObjs[i]}/>)
        };

        if (arrObjs[i].children) {
            const UlWithChildren = () => {
                return (
                    <LiSingle liSingleChildren={<UlTreeBuilder arrObjs={arrObjs[i].children}>}
                        )}
                        }
                        <UlParent children={<LiCreator singleMenuElement={arrObjs[i]}/>}/>
                        }

                        return (<UlParent/>)
                        }

//https://github.com/NoftScarlet/JSON-Menu-Tree-vanilaJS/blob/master/menu-tree-builder.js