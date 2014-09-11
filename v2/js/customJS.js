
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
	
		$( "#porLink" ).html("Português");
		$( "#loading" ).html(loadingSpanish);
		$( "#homeText" ).html(homeTextSpanish);
		$( "#historyText" ).html(historyTextSpanish);

	}else{
		$( "#porLink" ).html("Español");
		$( "#loading" ).html(loadingPortuguese);
		$( "#homeText" ).html(homeTextPortuguese);
		$( "#historyText" ).html(historyTextPortuguese);

	}
	$("#loader").fadeOut(600);
}

var loadingSpanish = "Cargando";
var loadingPortuguese = "Carregando";



var homeTextSpanish="<p>SAVE THE DATE!</p><BR><p>Una linda novia uruguaya y un encantador novio brasileiro, se casan!</p><br><br><br><p>Euge y Gu</p><p>18·10·2014</p>";
var homeTextPortuguese= "<p>SAVE THE DATE!</p><BR><p>Uma linda noiva uruguaia e um encantador noivo brasileiro vão se casar!</p><br><br><br><p>Euge e Gu</p><p>18·10·2014</p>";

var historyTextSpanish ="<p>Todo comenzó en junio de 2011. El “problema” es que el “asunto” quedó en stand by por más de un año. En esa época no vivía en Uruguay. Viví en Montevideo entre 2009 y comienzos de 2011. Quedé poco menos de dos años en mi primer experiencia por allá. Estando en San Pablo, supe que habíamos contratado una nueva persona para el área de Marketing. Su nombre: María Eugenia. Durante esa época yo iba una vez por mes a Uruguay. En julio estaba allá. Al entrar en la oficina me encontré con la “nueva” asistente de Marketing, la “tal” María Eugenia, Euge. Chica pequeña, concentrada, que no sacaba los ojos de la pantalla de la computadora y... no notó mi presencia. Pensé... Qué linda!! Ya quería dar un bonus para quien había contratado a aquella enanita. No es que las otras chicas de la oficina fueran feas. Jamás. Todas tenían su belleza. Pero Euge era especial. Pasé toda aquella semana trabajando y observado a aquella chica que continuaba ignorando mi existencia. Había un problema de logística en toda esta historia. Ella vivía en Montevideo. Yo en São Paulo. Mi trabajo estaba en Brasil. El de ella en Uruguay. Guardé en mi corazón de aquella chica tan “charmosa” y volví a Brasil el fin de semana. Pasaron los meses. Seguí yendo y viniendo de Uruguay. La enanita estaba cada vez más bonita. Continuaba “fingiendo” que yo no existía. ¡Fingiendo sí!. Sé que no es fácil ignorar mi belleza. Pero ella se mantenía firme. Hasta que en julio de 2012 sucedió algo que cambió nuestras vidas. Recibí una propuesta para asumir nuevos desafíos. Tenía que dejar la empresa  en la que los dos trabajábamos y debía volver a Uruguay para trabajar en otra empresa.</p>";
var historyTextPortuguese = "<p>Tudo começou em Junho de 2011. O \"problema\" é que o \"assunto\" ficou em stand by por mais de um ano. Nessa época não morava mais no Uruguai. Morei em Montevideo entre 2009 e o começo de 2011. Fiquei pouco menos de dois anos em minha primeira experiência por lá.</p>\n<p>Soube em São Paulo que havíamos contratado uma nova pessoa para nossa área de marketing. O nome dela: María Eugenia.</p>\n<p>Nesta época eu costumava ir uma vez por mês ao Uruguai. Ficava sempre em torno de uma semana. Em Julho estava lá. Ao entrar no escritório me deparei com a \"nova\" assistente de marketing - a \"tal\" María Eugenia, Euge. Menina pequenina, concentrada, não tirava os olhos da tela do computador... e... nem notou minha bela presença.</p>\n<p>Pensei: \"Caraca... Que linda!!!\". Já queria logo dar um bônus para quem contratou aquela baixinha. Não que as outras meninas do escritório fossem feias. Jamais. Todas tinham sua beleza. Mas a Euge era especial. Passei toda aquela semana trabalhando e prestando atenção naquela menina que continuava ignorando a minha existência.</p><p>Havia um pequeno problema de logística nessa história toda. Ela morava em Montevideo. Eu em São Paulo. Meu trabalho estava no Brasil. O dela no Uruguai. Guardei no meu coração a imagem daquela menina tão charmosa e voltei ao Brasil no final daquela semana.</p>\n<p>Passaram-se os meses. Segui indo e vindo do Uruguai. A baixinha estava cada vez mais bonita. Continuava \"fingindo\" que eu não existia. Fingindo sim! Sei que não é fácil ignorar minha beleza. Mas ela se mantinha firme.</p>\n<p>Até que em Julho de 2012 aconteceu algo que mudou nossas vidas. Recebi uma proposta para assumir novos desafios. Teria que deixar a empresa em que nós trabalhávamos e deveria voltar ao Uruguai para trabalhar em outra empresa.</p>\n<p>Desembarquei no começo de Setembro de 2012. Havia feito o mesmo em 2009. Um monte de malas, uma mudança toda... e aqui estava novamente. Montevideo, Uruguai. Não havia mais a distância. Ela e eu morávamos em Montevideo. Trabalhávamos em empresas diferentes - o que também ajudava muito.</p>\n<p>Era o famoso \"agora ou nunca\". Tomei três garrafas de vinho, duas de whisky, quatro de vodka, e para dar aquela ajudinha final, tomei duas jarras de clericó. Estava pronto! Já tinha a coragem suficiente para convidá-la a jantar.</p>\n<p>Convidei. Convidei de novo. Convidei outra vez. Mas a baixinha foi difícil. Ganhava tempo. No fundo eu sabia que ela estava assustada, pois não é sempre que uma pessoa tão bela faz um convite para sair. Para você que está lendo e não entendeu, eu explico: Eu sou essa \"pessoa tão bela\".</p>\n<p>Mas eu sabia o que queria. Sou persistente. Não desisti. Ela finalmente aceitou. Pelos meus cálculos foi após o convite número 541. Pode ser que eu tenha errado no cálculo. Acrescente mais 200 convites que provavelmente seja o número correto.</p>\n<p>E foi assim que tudo começou.</p>\n<p>PS - A parte das bebidas é brincadeira, mas o número de vezes que tive que convidá-la para sair é verdade!</p>";

var ceremonyTitleSpanish = "";
var ceremonyTitlePortuguese = "";

var ceremonyTextSpanish ="";
var ceremonyTextPortuguese="";


