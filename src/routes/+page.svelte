<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>



<script>
	import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'
	let pagecontact  = undefined
	onMount(async()=>{
		const {data,error}=await supabase
			.from('pagecontact')
			.select('firstname')
			.limit(1)
			.single()
		pagecontact = data
	})
</script>




<!-- Side Navigation -->
<nav class="w3-sidebar w3-bar-block w3-card w3-animate-left w3-center" style="display:none" id="mySidebar">
  <h1 class="w3-xxxlarge w3-text-theme">Side Navigation</h1>
  <button class="w3-bar-item w3-button" onclick="w3_close()">Close <i class="fa fa-remove"></i></button>
  <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  <a href="#" class="w3-bar-item w3-button">Link 4</a>
</nav>







<div class="w3-container">

<div class="w3-center">
 
</div>
<br>


     
<div class="w3-center">
  <h2>à propos de moi</h2>
  
</div>   

<header class="w3-container w3-blue-grey">
  <h2>Presentation rapide</h2>
</header>

<div class="w3-padding w3-white w3-display-container">
  
  <h2>Temmar Fahd</h2>
  <p>Je suis ingénieur généraliste en industrie 4.0, passionné par les nouvelles technologies et les défis que cette nouvelle révolution industrielle implique. Grâce à ma formation en ingénierie et à mes expériences professionnelles, j'ai développé un esprit d'analyse et de synthèse, ainsi qu'une capacité d'adaptation rapide aux nouvelles situations.</p>
  <p>Je suis actuellement un élève ingenieur en 5ème année, evoluant au sein de l'EIGSI. J'aime travailler en equipe. L'adaptation à diverses cultures de travail, la polyvalence, la curiosité, l’identification et la définition 
des priorités sont des caractéristiques marquantes de mon style de travail.</p>

</div>

<footer class="w3-container w3-blue-grey">
  <h5>&#8205</h5>
	 


</footer>

<hr>
<div class="w3-center">
  <h2>Cursus scolaire</h2>
 
</div>
</div>

<div class="w3-row-padding">

<div class="w3-half">
<div class="w3-card white">
  <div class="w3-container w3-theme">
    <h3>Ecole/université</h3>
  </div>
  <div class="w3-container">
  
  </div>
  <ul class="w3-ul w3-border-top">
    <li>
      <h3>2021-2023</h3>
      <p>EIGSI La Rochelle - Ecole d’Ingénieurs Généralistes
			Master Industry 4.0
</p>
    </li>
    <li>
      <h3>2018-2021</h3>
      <p> EIGSI Casablanca - Ecole d’Ingénieurs Généralistes
			Ingénieur généraliste</p>
    </li>
    <li>
      <h3>2017-2018</h3>
      <p>Maimonide - Casablanca Maroc : Diplôme National du Baccalauréat Français(Sciences spécialité Mathématique)
			</p>
    </li>
  </ul>
  <div class="w3-container w3-theme w3-large"><span class="w3-right">Next</span></div>
</div>
</div>

<div class="w3-half">
<div class="w3-card white">
  <div class="w3-container w3-theme">
    <h3>Langues</h3>
  </div>
  <div class="w3-container">
  <h3 class="w3-text-theme"></h3>
  </div>
  <ul class="w3-ul w3-border-top">
    <li>
      <h3>Francais</h3>
      <p>Langue maternelle</p>
    </li>
    <li>
      <h3>Anglais</h3>
      <p> Courant (LINGUASKILL niveau 
C1)
</p>
    </li>
    <li>
      <h3>Arabe</h3>
      <p>Bilingue</p>
    </li>
  </ul>
  <div class="w3-container w3-theme w3-large"><span class="w3-right">Next</span></div>
</div>
</div>
</div>
<hr>



<div class="w3-container">

<h2 class="w3-center">Experiences professionnelles</h2>
<div class="w3-border">
<div class="w3-bar w3-theme">
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'London')">FMG sales & marketing</button>
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Paris')">BSH</button>
  <button class="w3-bar-item w3-button testbtn w3-padding-16" onclick="openCity(event,'Tokyo')">Bosch</button>
</div>

<div id="London" class="w3-container city w3-animate-opacity">
  <h2>FMG sales & marketing, mai 2022</h2>
  <p>Le groupe FMG sales and marketing conçoit et déploie des dispositifs commerciaux 
et marketing au service de la performance commerciale de ses clients.</p>
  <p>J'ai effectué mon stage élève ingénieur sur l’amélioration d’outils dans le 
cadre de la planification de personnes au sein de du groupe FMG Sales & Marketing, 
société de services tertiaires, l’une des principales sociétés d’externalisation en France. </p>
</div>

<div id="Paris" class="w3-container city w3-animate-opacity">
  <h2>BSH Assistant Business Analyste
 Casablanca Maroc, Juill 2021</h2>

  <p>Participation à l’étude de marché marocain. </p>
	   <p>Gestion des données sur Excel: préparation, nettoyage et 
visualisation des données (langage R)</p>
  <p>Compréhension des résultats et participation à la 
proposition d’actions d'optimisation des processus.</p>
</div>

<div id="Tokyo" class="w3-container city w3-animate-opacity">
  <h2>Bosch Assistant Responsable Operations 
, Aout 2019</h2>
  <p>Suivi des commandes et des conditions de vente (délais 
de paiement, escomptes…)</p>
  <p> Suivi mensuel du CA et plan d’action par boutique
</p>
</div>
</div>



<div class="w3-container">
  <hr>
  <div class="w3-center">
    <h2>Loisirs</h2>
    <p w3-class="w3-large"></p>
  </div>
<div class="w3-responsive w3-card-4">
<table class="w3-table w3-striped w3-bordered">
<thead>
<tr class="w3-theme">
  <th>Gaming</th>
  <th>Football</th>
  <th>Autre</th>
</tr>
</thead>
<tbody>
<tr>
  <td> Esprit compétitif, participations a 
plusieurs tournois (FIFA, Rogue…)
</td>
  <td>Membre de la Peña
Madridista (Organisation d’évènements en 
relation avec le Réal Madrid)
</td>
  <td>Participation en tant que représentant 
d’écoles ou entreprises dans plusieurs 
forums depuis 2017</td>
</tr>


</tbody>
</table>
</div>


<div class="w3-row-padding w3-center w3-margin-top">
<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Creativité</h3><br>
  <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Montages video </p>
  <p>Amoureux des ordinateurs</p>
  <p>Plusieurs heures passées sur Photoshop</p>
 
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Standard CSS</h3><br>
  <i class="fa fa-css3 w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Standard CSS only</p>
  <p>Facile a apprendre</p>
  <p> On a pas besoin de jQuery</p>
  <p>On a pas besoin de  library</p>
  </div>
</div>

<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px">
  <h3>Force mental</h3><br>
  <i class="fa fa-diamond w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>Perseverance et stoicisme</p>
  <p>Les lions de l'Atlas</p>
  <p>Aime travailler en communauté</p>
  <p></p>
  </div>
</div>
</div>
<h2 class="w3-center">

</h2>
<div class="w3-container">

<h2>Pour me contacter:</h2>
<form action="/contact">
	<button class="w3-btn w3-theme" href="/contact ">Cliquez ici</button> 
</form>
</div>


<br>



</body>
</html>
