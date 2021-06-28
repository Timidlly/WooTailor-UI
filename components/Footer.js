import React from 'react'

export default function Footer() {
    return (
        <footer>
            <p onClick={()=>window.location.href="/"}>WOOTailor &copy; {new Date().getFullYear().toString()} | All rights reserved </p>
        </footer>
    )
}
