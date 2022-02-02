const template = document.createElement('div')
template.innerHTML = `
<style>
    p{
    color: blue;
    }
</style>
    <p>You Choose spiderman</p>
    <p>Texto de ejemplo</p>
`;

class myElement extends HTMLElement {
    constructor() {
        super();
        // console.log('Mundo esta de sabatico cariño');
        this.p = document.createElement('p')
    }
    connectedCallback(){
        this.p.textContent = "Hola mundo esta de sabatico cariño ";
        this.appendChild(this.p)
        this.appendChild(template)
    }
}
customElements.define('my-element', myElement)
