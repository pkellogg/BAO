(function() {
const template = document.createElement('template');
	template.innerHTML = `
	<style>
	.fxcardnarrativeclass {
		border:none;
		 
		font-family:roboto;
		position:relative;
		text-align:left;
		font-family:roboto;
		 
	}
	
	
</style>
<div class = "fxcardnarrativeclass">
	<div  style="position:relative;"> 
		<slot name = "imageslot"></slot> 
	</div>
	 
	
	<div style="position:relative;"><slot name = "narrativeslot"></slot></div>
</div>
	`
	
	class FxCardNarrative extends HTMLElement {
	 
	constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	let style = document.createElement('style'); 
	shadowRoot.appendChild(style);
    }
	connectedCallback() {
	}   
	}//extends
	
	window.customElements.define('fx-cardnarrative', FxCardNarrative);
})();