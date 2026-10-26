class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
                nav{
                    position:sticky;
                    top:0;
                    z-index:1000;
                    backdrop-filter:blur(10px);
                    -webkit-backdrop-filter:blur(10px);
                    background:rgba(255,255,255,.72);
                    border-top:1px solid rgba(255,255,255,.6);
                    border-bottom:1px solid var(--border);
                    }

                    nav ul{
                    width:var(--container);
                    margin:0 auto;
                    padding:.85rem 0;
                    list-style:none;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    gap:clamp(.8rem, 2vw, 2.2rem);
                    flex-wrap:wrap;
                    }

                    nav a{
                    text-decoration:none;
                    color:var(--text);
                    text-transform:uppercase;
                    font-size:.76rem;
                    font-weight:600;
                    letter-spacing:.12em;
                    padding:.45rem .7rem;
                    border-radius:999px;
                    transition:var(--transition);
                    }
                    nav a:hover{
                    color:var(--dark);
                    background:rgba(220,229,191,.45);
                    }
        </style>
            <nav aria-label="Navigazione principale">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./prodotti.html">Prodotti</a></li>
                    <li><a href="./about.html">Chi sono</a></li>
                    <li><a href="./socials.html">Contatti</a></li>
                </ul>
            </nav>
        `;
  }
}
customElements.define("navigation-component", Navigation);

export default Navigation;
