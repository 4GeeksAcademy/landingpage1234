import React from "react";

const NavBar =()=>{
    return (
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light 
            navbar-dark bg-dark" id="logo">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">History</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Prices</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Rock and Roll</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>

    );
};

export default NavBar;