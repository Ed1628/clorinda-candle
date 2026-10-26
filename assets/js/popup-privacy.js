class PolicyPopupComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            .policy-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .policy-popup {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 100%;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                font-family: 'Arial', sans-serif;
            }
            
            .policy-popup h3 {
                margin: 0 0 20px 0;
                color: #722F37;
                font-size: 1.5rem;
                text-align: center;
            }
            
            .policy-popup p {
                margin: 0 0 20px 0;
                line-height: 1.6;
                color: #555;
                font-size: 0.95rem;
            }
            
            .policy-popup .buttons {
                text-align: center;
            }
            
            .policy-popup button {
                background: #d4af37;
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 6px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .policy-popup button:hover {
                background: #b8961f;
            }
            
            .hidden {
                display: none;
            }
            </style>
            <div class="policy-overlay" id="policyOverlay">
                <div class="policy-popup">
                    <h3>Informativa Privacy</h3>
                    <p>Questo sito web è una vetrina statica del laboratorio artistico <strong>Clo Candle Atelier</strong>.</p>
                    <p>Non raccogliamo, archiviamo o trattiamo alcun dato personale o di navigazione. Il sito non utilizza cookies di profilazione o sistemi di tracciamento.</p>
                    <p>Continuando la navigazione accetti di visualizzare i contenuti di questa vetrina artistica.</p>
                    <div class="buttons">
                        <button id="acceptButton">Ho capito</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    connectedCallback() {
        const overlay = this.shadowRoot.getElementById('policyOverlay');
        const acceptButton = this.shadowRoot.getElementById('acceptButton');
        
        // Check if user already accepted
        if (localStorage.getItem('policyAccepted') === 'true') {
            overlay.classList.add('hidden');
            return;
        }
        
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('policyAccepted', 'true');
            overlay.classList.add('hidden');
        });
    }
}

customElements.define('policy-popup-component', PolicyPopupComponent);