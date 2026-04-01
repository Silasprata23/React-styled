import React from "react";
import Header from "../components/header/index.jsx";
import Container from "../components/container/index.jsx";
import './style.scss'

export default function PageHome() {
    return (
        <React.Fragment>
            <div className="pageHome">
                <div className="container">
                    <Header/>
                    <Container/>
                </div>
            </div>


        </React.Fragment>
    )
}