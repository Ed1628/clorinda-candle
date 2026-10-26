class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            footer{
                margin-top:var(--section-space);
                background:linear-gradient(180deg, #f7f6f3, #f2f0eb);
                border-top:1px solid var(--border);
                padding:clamp(2rem, 5vw, 4.5rem) 1rem;
                text-align:center;
                }

                #socials h3{ margin-bottom:1rem; }

                #socials ul{
                list-style:none;
                display:flex;
                justify-content:center;
                gap:1rem;
                padding:0;
                }

                #socials a{
                width:44px;
                height:44px;
                border-radius:50%;
                display:grid;
                place-items:center;
                background:#fff;
                border:1px solid var(--border);
                box-shadow:var(--shadow-sm);
                transition:var(--transition);
                }
                #socials a:hover{
                transform:translateY(-3px);
                border-color:var(--primary-strong);
                }

                #socials img{
                width:20px;
                filter:grayscale(100%);
                opacity:.75;
                transition:var(--transition);
                }
                #socials a:hover img{
                filter:grayscale(0%);
                opacity:1;
                }
        </style>
            <footer>
                <img style="display:block; margin:0 auto; width:350px;" src="./../assets/images/logo_Clo.png" alt="">

        <div id="socials">
            <h3>Seguimi sui social</h3>
            <ul>
                <li><a href="https://www.instagram.com/clorinda_candle?igsh=djRveWI4Y213ZjUW" target="_blank" rel="noopener" aria-label="Instagram"><img src="./../assets/images/insta-logo.png" alt="Instagram"></a></li>
                <li><a href="https://wa.me/393775999223" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="./../assets/images/wp-logo.png" alt="WhatsApp"></a></li>
            </ul>
        </div>
        <p>&copy; 2025 Clorinda Candle. Tutti i diritti riservati.</p>
        <p>Written by EP Art Studio</p>
    </footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);

export default FooterComponent;