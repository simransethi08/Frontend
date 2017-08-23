import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <button type="button" data-target="#navbarCollapse"
                    data-toggle="collapse" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand">debellate Technologies</a>
            </div>
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/roster'>Roster</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;