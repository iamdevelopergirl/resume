import reactDom from 'react-dom';
import {useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './modalWrapper.scss';

const ModalWrapper = (props) => {
       const nodeElement = document.getElementById("modal-root") || document.createElement('div');

     useEffect(() => {
        if(nodeElement){
            ReactDOM.render(
                <HashRouter>
                    <ModalContent {...props} />
                </HashRouter>
                ,
                nodeElement
            );
        } 
        return () => {
            ReactDOM.unmountComponentAtNode(nodeElement)
         }
     })

    return <script />
}

function ModalContent(props) {
    const { open, children } = props;
    let className = "portal-modal"
    if (open) {
        className += " portal-modal-open"
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default ModalWrapper;


