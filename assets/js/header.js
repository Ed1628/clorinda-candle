class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            header{
                width:var(--container);
                margin-inline:auto;
                padding:clamp(2rem, 4vw, 4rem) 0 1rem;
                text-align:center;
                }

                .title{
                text-decoration:none;
                color:var(--dark);
                display:inline-block;
                transition:var(--transition);
                }
                .title:hover{ transform:translateY(-1px); opacity:.92; }

                header p{
                max-width:60ch;
                margin:.5rem auto 0;
                color:var(--muted);
                }
        </style>
        <header>
        <img style="display:block; margin:0 auto; width:200px;" src="./../assets/images/logo_Clo.png" alt="">
            <!-- <a class="title" href="./index.html"><h1>Clorinda Candle</h1></a> -->
            <p>Candele artigianali in cera di soia, colate a mano una alla volta.</p>
        </header>
        `;
    }
}
customElements.define('header-component', HeaderComponent);
export default HeaderComponent;