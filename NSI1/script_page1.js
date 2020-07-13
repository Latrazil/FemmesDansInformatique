"use strict"

var score=0;

var nbClick=0;

let elt1=document.getElementById("algo");

elt1.addEventListener('dblclick',afficheImage);
	
function afficheImage(event){
	if(nbClick==0){
		elt1.style.height='100%';
		elt1.style.width='100%';
		nbClick=1;
	}
	else if(nbClick==1){
		elt1.style.height='25%';
		elt1.style.width='25%';
		nbClick=0;
	}
}

/*Je déclare mes variables et defini ma première fonction qui est affiche Image qui permet quand on dbl click sur certaines images de les agrandir*/

let rf=document.getElementsByClassName("Faux");
   
for(i=0;i<rf.length;i++){
    	clique = rf[i];
        clique.addEventListener('click',fa, false);
    }
 
function fa(event){
	//window.alert("Faux !");
	var arr= Array.prototype.slice.call(rf);
	var j=arr.indexOf(event.currentTarget);
	score=score-1;
	for(var k=j;k<j+1;k++){
        document.getElementsByClassName("Faux")[k].innerHTML="Faux !";
    }
}

/*Je défini rf une liste puis j'asigne à tous ses éléments la fonction fa qui change l'innerHTML et soustrais 1 au score*/

let rv=document.getElementsByClassName("Vrai");
   
for(var i=0;i<rv.length;i++){
    	var clique = rv[i];
        clique.addEventListener('click', va, false);
    }
 
function va(event){
	var arr= Array.prototype.slice.call(rv);
	var j=arr.indexOf(event.currentTarget);
	//window.alert("Vrai !");
	score=score+1;
	for(var k=j;k<j+1;k++){

        document.getElementsByClassName("Vrai")[k].innerHTML="Vrai !";
	}}

/*Pareil que rf sauf que c'est la fonction va que j'apelle qui ajoute 1 au score*/

let scoreTotal=document.getElementById("cs");
 
scoreTotal.addEventListener('click', st, false);

/*J'apelle la fonction st grace au bouton cs*/

function st(event){
	document.getElementById("scoreAffiche1").innerHTML="Votre score est de "+score;
	if(score<0){
		
	document.getElementById("scoreAffiche2").innerHTML="Vous l'avez un peu fait exprès, non ?";
	}
	else if(score<3){
		document.getElementById("scoreAffiche2").innerHTML="Vous ferez mieux la prochaine fois...";
	}
	else if(score<4){
		document.getElementById("scoreAffiche2").innerHTML="Presque un sans faute !";
	}
	else if(score<5){
		document.getElementById("scoreAffiche2").innerHTML="Un sans faute, bravo !";
	}
	else if(score>4){
		document.getElementById("scoreAffiche2").innerHTML="Vous avez un peu triché, non ?";
	}
}

/*J'annonce le score du joueur et affiche un message personalisé */