
$(document).ready(function(){
	$("#loader").show();
});

$(window).load(function(){
	$.localScroll({
   		target:'#container'
	});
	$( "#porLink" ).click(function(){
		showLoaderForTranslate();
	});
	var userLang = navigator.language || navigator.userLanguage;
	if(userLang == 'pt-BR'){
		translatePage();
	}else{
		$( "#loader" ).fadeOut(600);
	}
});

function showLoaderForTranslate(){
	$("#loader").fadeIn(500, function(){
		translatePage()
	});
}

function translatePage(){
	if($( "#porLink" ).html() == "Español"){

		/* Loader */
		$( "#loading" ).html(loadingSpanish);
		
		/* Translate */
		$( "#porLink" ).html("Português");
		
		/* Home */
		$( "#homeText" ).html(homeTextSpanish);

		/* History */
		$( "#historyTitle" ).html(historyTitleSpanish);
		$( "#historyText" ).html(historyTextSpanish);
		$( "#history2Title" ).html(history2TitleSpanish);
		$( "#history2Text" ).html(history2TextSpanish);
		
		/* Ceremony */
		$( "#ceremonyTitle" ).html(ceremonyTitleSpanish);		
		$( "#ceremonyText" ).html(ceremonyTextSpanish);
		
		/* Presents */
		$( "#presentsText" ).html(presentsTextSpanish);
		
		/* Montevideo */
		$( "#montevideoTitle" ).html(montevideoTitleSpanish);
		$( "#hotelsMontevideo" ).html(hotelsSpanish);
		$( "#outsideMontevideo" ).html(outsideSpanish);
		$( "#foodMontevideo" ).html(foodSpanish);
		
		/* Punta */
		$( "#hotelsPunta" ).html(hotelsSpanish);
		$( "#outsidePunta" ).html(outsideSpanish);
		$( "#foodPunta" ).html(foodSpanish);
		
		/* RSVP */
		$( "#contactTitle" ).html(rsvpTitleSpanish);
		$( "#contactText" ).html(rsvpTextSpanish);

	}else{
		/* Loader */
		$( "#loading" ).html(loadingPortuguese);

		/* Translate */
		$( "#porLink" ).html("Español");

		/* Home */
		$( "#homeText" ).html(homeTextPortuguese);
		
		/* History */		
		$( "#historyTitle" ).html(historyTitlePortuguese);
		$( "#historyText" ).html(historyTextPortuguese);
		$( "#history2Title" ).html(history2TitlePortuguese);
		$( "#history2Text" ).html(history2TextPortuguese);

		/* Ceremony */
		$( "#ceremonyTitle" ).html(ceremonyTitlePortuguese);		
		$( "#ceremonyText" ).html(ceremonyTextPortuguese);

		/* Presents */
		$( "#presentsText" ).html(presentsTextPortuguese);	
		
		/* Montevideo */
		$( "#montevideoTitle" ).html(montevideoTitlePortuguese);
		$( "#hotelsMontevideo" ).html(hotelsPortuguese);
		$( "#outsideMontevideo" ).html(outsidePortuguese);
		$( "#foodMontevideo" ).html(foodPortuguese);
			
		/* Punta */
		$( "#hotelsPunta" ).html(hotelsPortuguese);
		$( "#outsidePunta" ).html(outsidePortuguese);
		$( "#foodPunta" ).html(foodPortuguese);
		
		/* RSVP */
		$( "#contactTitle" ).html(rsvpTitlePortuguese);
		$( "#contactText" ).html(rsvpTextPortuguese);
	}
	$("#loader").fadeOut(600);
}

var loadingSpanish = "Cargando";
var loadingPortuguese = "Carregando";

var homeTextSpanish="<p>Una linda novia uruguaya y un encantador novio brasileiro, se casan!</p><br><br><br><p>Euge y Gu</p><p>18·10·2014</p>";
var homeTextPortuguese= "<p>Uma linda noiva uruguaia e um encantador noivo brasileiro vão se casar!</p><br><br><br><p>Euge e Gu</p><p>18·10·2014</p>";

var historyTitleSpanish = "Todo comenzó...";
var historyTitlePortuguese = "Assim começou…";
var historyTextSpanish = "<p>Todo comenzó en junio de 2011. El \“problema\” es que el \“asunto\” quedó en stand by por más de un año. En esa época no vivía en Uruguay. Viví en Montevideo entre 2009 y comienzos de 2011. </p><p>Quedé poco menos de dos años en mi primer experiencia por allá. Estando en San Pablo, supe que habíamos contratado una nueva persona para el área de Marketing. Su nombre: María Eugenia. Durante esa época yo iba una vez por mes a Uruguay. En julio estaba allá. </p><p>Al entrar en la oficina me encontré con la “nueva” asistente de Marketing, la “tal” María Eugenia, Euge. Chica pequeña, concentrada, que no sacaba los ojos de la pantalla de la computadora y... no notó mi presencia. Pensé... Qué linda!! Ya quería dar un bonus para quien había contratado a aquella enanita. No es que las otras chicas de la oficina fueran feas. Jamás. Todas tenían su belleza. Pero Euge era especial. </p><p>Pasé toda aquella semana trabajando y observado a aquella chica que continuaba ignorando mi existencia. Había un problema de logística en toda esta historia. Ella vivía en Montevideo. Yo en São Paulo. Mi trabajo estaba en Brasil. El de ella en Uruguay. Guardé en mi corazón la imagen de aquella chica tan “charmosa” y volví a Brasil el fin de semana. </p><p>Pasaron los meses. Seguí yendo y viniendo de Uruguay. La enanita estaba cada vez más bonita. Continuaba “fingiendo” que yo no existía. ¡Fingiendo sí!. Sé que no es fácil ignorar mi belleza. Pero ella se mantenía firme. Hasta que en julio de 2012 sucedió algo que cambió nuestras vidas. Recibí una propuesta para asumir nuevos desafíos. Tenía que dejar la empresa  en la que los dos trabajábamos y debía volver a Uruguay para trabajar en otra empresa. </p>";
var historyTextPortuguese = "<p>Tudo começou em Junho de 2011. O \"problema\" é que o \"assunto\" ficou em stand by por mais de um ano. Nessa época não morava mais no Uruguai. Morei em Montevideo entre 2009 e o começo de 2011. Fiquei pouco menos de dois anos em minha primeira experiência por lá.</p><p>Soube em São Paulo que havíamos contratado uma nova pessoa para nossa área de marketing. O nome dela: María Eugenia.</p><p>Nesta época eu costumava ir uma vez por mês ao Uruguai. Ficava sempre em torno de uma semana. Em Julho estava lá. Ao entrar no escritório me deparei com a \"nova\" assistente de marketing - a \"tal\" María Eugenia, Euge. Menina pequenina, concentrada, não tirava os olhos da tela do computador... e... nem notou minha bela presença. </p><p>Pensei: \"Caraca... Que linda!!!\". Já queria logo dar um bônus para quem contratou aquela baixinha. Não é que as outras meninas do escritório fossem feias. Jamais. Todas tinham sua beleza. Mas a Euge era especial. Passei toda aquela semana trabalhando e prestando atenção naquela menina que continuava ignorando a minha existência. </p><p>Havia um pequeno problema de logística nessa história toda. Ela morava em Montevideo. Eu em São Paulo. Meu trabalho estava no Brasil. O dela no Uruguai. Guardei no meu coração a imagem daquela menina tão charmosa e voltei ao Brasil no final daquela semana. </p><p>Passaram-se os meses. Segui indo e vindo do Uruguai. A baixinha estava cada vez mais bonita. Continuava \"fingindo\" que eu não existia. Fingindo sim! Sei que não é fácil ignorar minha beleza. Mas ela se mantinha firme. </p><p>Até que em Julho de 2012 aconteceu algo que mudou nossas vidas. Recebi uma proposta para assumir novos desafios. Teria que deixar a empresa em que nós trabalhávamos e deveria voltar ao Uruguai para trabalhar em outra empresa. </p>";

var history2TitleSpanish = "Y siguió…";
var history2TitlePortuguese = "E continuou…";
var history2TextSpanish = "<p>Desembarqué a principios de setiembre de 2012. Había hecho lo mismo en 2009. Un montón de valijas, una gran mudanza... y aquí estaba nuevamente. Montevideo, Uruguay. No había más distancia. Ella y yo vivíamos en Montevideo.</p><p> Trabajábamos en empresas diferentes – lo que también ayudaba mucho. Era el famoso \“ahora o nunca\”. Tomé tres botellas de vino, dos de whisky, cuatro de vodka y para dar la ayudita final, tomé dos botellas de clericó. Estaba pronto! Ya tenía el coraje suficiente para invitarla a cenar.</p><p>La invité. La invité de nuevo. La invité otra vez. Pero Euge fue difícil. Ganaba tiempo. En el fondo yo sabía que ella estaba asustada, ya que no siempre una persona tan bella hace un invitación para salir. Para el que está leyendo y no entiende, explico: Yo soy esa \“persona tan bella\”. Pero yo sabía lo que quería. Soy persistente. No desistí. Ella finalmente aceptó.</p><p> Según mis cálculos fue después de la invitación número 541. Puede ser que me esté equivocando en el cálculo... agregue otras 200 invitaciones que probablemente sea el número correcto.</p> <p>Y fue así que todo comenzó. </p><p>PD – La parte de las bebidas es broma, pero el número de veces que tuve que invitarla para salir, ¡es verdad!</p><p style=\"text-align:center\">Gu</p>";
var history2TextPortuguese = "<p>Desembarquei no começo de Setembro de 2012. Havia feito o mesmo em 2009. Um monte de malas, uma mudança toda... e aqui estava novamente. Montevideo, Uruguai. Não havia mais a distância. Ela e eu morávamos em Montevideo.</p><p> Trabalhávamos em empresas diferentes - o que também ajudava muito. Era o famoso \"agora ou nunca\". Tomei três garrafas de vinho, duas de whisky, quatro de vodka, e para dar aquela ajudinha final, tomei duas jarras de clericó. Estava pronto! Já tinha a coragem suficiente para convidá-la a jantar.</p><p>Convidei. Convidei de novo. Convidei outra vez. Mas a baixinha foi difícil. Ganhava tempo. No fundo eu sabia que ela estava assustada, pois não é sempre que uma pessoa tão bela faz um convite para sair. Para você que está lendo e não entendeu, eu explico: Eu sou essa \"pessoa tão bela\". Mas eu sabia o que queria. Sou persistente. Não desisti. Ela finalmente aceitou.</p><p> Pelos meus cálculos foi após o convite número 541. Pode ser que eu tenha errado no cálculo. Acrescente mais 200 convites que provavelmente seja o número correto.</p> <p>E foi assim que tudo começou. </p><p>PS - A parte das bebidas é brincadeira, mas o número de vezes que tive que convidá-la para sair é verdade!</p><p style=\"text-align:center\">Gu</p>";

var ceremonyTitleSpanish = "Boda";
var ceremonyTitlePortuguese = "Casamento";
var ceremonyTextSpanish ="<section><h2>Ceremonia religiosa</h2><p>A las 17:30 hs, con puntualidad, comenzará la ceremonia. <a id=\"iglesia\" href=\"https://plus.google.com/113317607897274903769/about?gl=uy&hl=es-419\" target=\"_blank\">Iglesia Stella Maris</a>. Carrasco. Dr. Gabriel Otero 6489.</p><BR><BR><h2>Fiesta</h2><p>A continuación de la ceremonia, los esperamos en: Salón Los Olivos del Hotel Regency Zonamérica. Ruta 8 – Kmt. 17 – Jacksonville, Montevideo.</p></section>";
var ceremonyTextPortuguese="<section><h2>Cerimônia religiosa</h2><p>A cerimônia terá início às 17h30 na  <a id=\"iglesia\" href=\"https://plus.google.com/113317607897274903769/about?gl=uy&hl=es-419\" target=\"_blank\">Igreja Stella Maris</a>. Carrasco. Dr. Gabriel Otero 6489.</p><BR><BR><h2>Recepção</h2><p>A recepção acontecerá logo após a cerimônia religiosa no Salão Los Olivos do Hotel Regency Zonamerica. Ruta 8 – Km 17 – Jacksonville, Montevideo.</p></section>";

var presentsTextSpanish = "<section><p style=\"text-align: center\">Lo que más deseamos es compartir con ustedes esta noche tan especial.</p><br><br><p><a href=\"http://www.laiberica.com.uy\" target=\"_blank\">La Ibérica</a></p><p>Rincón 711 – Ciudad Vieja, Montevideo. Estacionamiento Paraná 723 ·Tel. 598-2-9016051</p><p>Horario: Lunes a Viernes de 9:00 a 19:00 hs. Sábados de 9:00 a 13:30 hs. Es posible comprar online, ingresando a nuestra lista <a href=\"http://www.laiberica.com.uy/listas-de-casamiento\" target=\"_blank\">aquí.</a></p><br><div class=\"line-separator-black\"></div><p><a href=\"http://www.walmer.com.uy/\" target=\"_blank\">Walmer</a></p><p>Rambla y Plaza Gomensoro - Pocitos, Montevideo. ·Tel. 598-2-7112293</p><p>Horario: Lunes a Viernes de 10:00 a 19:00 hs. Sábados de 10:00 a 14:00 hs.</p><br><div class=\"line-separator-black\"></div><p>Cuenta bodas BROU</p><p>Nº 187 49753 4</p><br></section>";
var presentsTextPortuguese = "<section><p style=\"text-align: center\">Nosso maior presente será sua presença!</p><br><br><p><a href=\"http://www.laiberica.com.uy\" target=\"_blank\">La Ibérica</a></p><p>Rincón 711 – Ciudad Vieja, Montevidéu. Estacionamento: Paraná 723 ·Tel. 598-2-9016051</p><p>Horário: Seg a Sex de 9h00 às 19h00 / Sab de 9h00 às 13h30. É possível comprar online, acessando nossa lista <a href=\"http://www.laiberica.com.uy/listas-de-casamiento\" target=\"_blank\" >aquí.</a></p><br><p><a href=\"http://www.walmer.com.uy/\" target=\"_blank\">Walmer</a></p><p>Rambla y Plaza Gomensoro - Pocitos, Montevidéu. ·Tel. 598-2-7112293</p><p>Horário: Seg a Sex de 10h00 às 19h00 / Sab de 10h00 às 14h00.</p></section>";

var montevideoTitleSpanish = "Montevideo";
var montevideoTitlePortuguese = "Montevidéu";

var hotelsSpanish = "HOTELES";
var hotelsPortuguese = "HOTÉIS";
var outsideSpanish = "PASEOS";
var	outsidePortuguese = "PASSEIOS";
var	foodSpanish = "GASTRONOMÍA";
var foodPortuguese = "GASTRONOMIA";

var rsvpTitleSpanish = "Confirma tu presencia";
var rsvpTitlePortuguese = "Confirme sua presença";

var rsvpTextSpanish = "<p>Queremos que todo esté perfecto para nuestros invitados. Por eso, te pedimos por favor, nos confirmes tu asistencia. </p><br><br><br><p>Envianos un email a: <a href=\"mailTo:eugeniagustavoRSVP@gmail.com?subject=Confirmar asistencia\">eugeniagustavoRSVP@gmail.com</a></p>";
var rsvpTextPortuguese = "<p>Por favor confirme sua presença enviando um correio eletrônico para: <a href=\"mailTo:eugeniagustavoRSVP@gmail.com?subject=Confirmar asistencia\">eugeniagustavoRSVP@gmail.com</a> </p>";