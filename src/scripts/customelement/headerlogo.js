class HeaderLogo extends HTMLElement{
    connectedCallback(){
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
            <figure>
                <a class="navbar-brand" href="#">
                    <img src="${this.src}" 
                        alt="${this.alt}" 
                        width=30 height=30>
                        CCOVID-19
                </a>
            </figure>
        `;
    }
}

customElements.define("header-logo", HeaderLogo);