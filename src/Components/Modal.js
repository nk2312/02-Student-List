import React,{ Fragment } from "react";
import ReactDOM  from "react-dom";

const Modal = (props) => {
    const ErrorModal =(props)=> {return ( <div className="modal-cover">
                            <div className="modal">
                                <h3>{props.title}</h3>
                                <div className="modal-msg">
                                <p>{props.msg}</p>
                            </div>
                            <button className="close" onClick={props.onConfirm}>Close</button>
                            </div>
                        </div>)}
    const BackDrop=(props)=>{return (<div className="back-drop" onClick={props.onConfirm}></div>)}
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.closeModal}/>,document.getElementById('back-drop'))}
            {ReactDOM.createPortal(<ErrorModal title={props.title} msg={props.msg} onConfirm={props.closeModal}/>, document.getElementById('error-modal'))}
            
        </Fragment>
    )
}
export default Modal;