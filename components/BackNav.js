import React from 'react'

export default function BackNav(props) {
    return (
        <>
            <div className="mobile">
                <div className="back-mobile-nav">
                 <div className="content" onClick={props.onClick}>
                 <i className="fa fa-chevron-left" aria-hidden="true"></i>
                 <p>{props.title}</p>
                 </div>
                </div>
            </div>


            <div className="desktop">
                <div className="back-desktop-nav">
                 <div className="content" onClick={props.onClick}>
                 <i className="fa fa-chevron-left" aria-hidden="true"></i>
                 <p>{props.title}</p>
                 </div>
                </div>
            </div>
        </>
    )
}
