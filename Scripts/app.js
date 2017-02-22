// setup your IIFE (Immediately Invoked Function Expression)
var travelReport = (function () {

//intro paragraph starts here
 var IntroParagraph = document.getElementById("IntroParagraph");
var IntroContent= `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.
Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`;
IntroParagraph.textContent=IntroContent;
// intro paragraph ends here

//Folegandros Para starts here
 var Folegandros = document.getElementById("Folegandros");
var FolegandrosContent= `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`;
Folegandros.textContent=FolegandrosContent;
//Folegandros Para starts here

//Alonissos Para starts here
 var Alonissos = document.getElementById("Alonissos");
var AlonissosContent= `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`;
Alonissos.textContent=AlonissosContent;
//Alonissos Para starts here



})();

