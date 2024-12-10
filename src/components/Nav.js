class NavigationBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `<header>
        <nav class="navigation">
            <logo>
                VïA
            </logo>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </header>`
        
        ;
    }
}

customElements.define('navigation-bar', NavigationBar);