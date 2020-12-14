var tela = 1

var posiçãox1 = 100, prilarg = 200, posiçãoy1 = 50, prialt = 50;

var posiçãox2 = 200, seglarg = 190, posiçãoy2 = 140, segalt = 50, posiçãox3 = 200, posiçãoy3 = 220, posiçãox4 = 200, posiçãoy4 = 300;

var volx = 280, voly = 380, vollarg = 190, volalt = 50, testex = 150, testey = 200, testequa = 100;

var bonecox = 0, bonecoy = 290;

var vidas = 3, tempo = 0, temporodando = 0;

var fase, ratetempo = 60, contador = 0, contadorsegundos = 60, redutor = 0

var tempo, historia = 0

var doutorx = -50 , doutory = 0; doutorposicao = 0; 

var lacaiox = 200, lacaioy = 180

var ajudantex = -150, ajudantey = 230

var a = 250, b = 250, c = 250

var contador2 = 0, carregar = 0, porcentagem = 0, carregador = 1, carrega = 1;

//telas extras
var            tela7 = 0, tela10 = 0, tela13 = 0, tela16 = 0
var tela5 = 0, tela8 = 0, tela11 = 0, tela14 = 0, tela17 = 0, tela19 = 0, tela24 = 0


//Limite tela
var limiteesquerda = -15, limitedireita = 220, limitechao = 290

//Mecanica Pulo
var pulandoteste = false

//quadradoacerto
var quadradoacerto1 = 220 , quadradoacerto2 = 235

//quadrado esquerda
var quadradoesquerda1 = 25 , quadradoesquerda2 = 65

//quadrado direita
var quadradodireita1 = 165 , quadradodireita2 = 185

//Centro Mapa Mundi
var MapaCentrox = 175, MapaCentroy = 165

//SamuraiMundi
var SamuraiMundix1 = 175, SamuraiMundiy1 = 165
var SamuraiMundix2 = 285, SamuraiMundiy2 = 250
var SamuraiMundix3 = 285, SamuraiMundiy3 = 85
var SamuraiMundix4 = 60, SamuraiMundiy4 = 85
var SamuraiMundix5 = 65, SamuraiMundiy5 = 255

//Limites Mapa Mundi
var limitemapaesquerda = 35, limitemapadireita = 325
var limitemapatopo = 25, limitemapabaixo = 310

//controle tempo
var tempofase = []
var tempofase21 = 0, tempofase22 = 0
var tempofase31 = 0, tempofase32 = 0
var tempofase41 = 0, tempofase42 = 0
var tempofase51 = 0, tempofase52 = 0
var tempofase61 = 0, tempofase62 = 0, tempofase63 = 0, tempofase64 = 0, tempofase65 = 0, tempofase66 = 0

//Fases para referencia
var fase2x = 285 , fase2y = 255 //rect(280, 260, 60, 60, 15)
var fase3x = 285 , fase3y = 65 //rect(280, 70, 60, 60, 15)
var fase4x = 60, fase4y = 65 //rect(60, 70, 60, 60, 15)
var fase5x = 60, fase5y = 255 //rect(65, 260, 60, 60, 15)
var fasefinalx, fasefinaly //rect(170, 170, 60, 60, 15)

//lacaios
var lacaio2x = 200 , lacaio2y = 180
var lacaio3x = 200, lacaio3y = 180
var lacaio4x = 200, lacaio4y = 180
var lacaio5x = 200, lacaio5y = 180
var lacaio2, lacaio3, lacaio4, lacaio5

//tempo total
var tempofinal = 0, controletempo = 0


//reset
var jajogou = false

function preload(){
 menu = loadImage('MENUJOGO.png')
 pombo = loadImage('Pombo.png')
 lesma = loadImage('Lesma.png')
 macaco = loadImage('Macaco.png')
 formiga = loadImage('Formiga.png') 
 borboleta = loadImage('Borboleta.png')
 cachorro = loadImage('Cachorro.png')
 rato = loadImage('Rato.png') 
 aranha = loadImage('Aranha.png') 
 cobra = loadImage('Cobra.png')
 camelo = loadImage('Camelo.png')
 escorpiao = loadImage('Escorpiao.png')
 escaravelho = loadImage('Escaravelho.png') 
 iguana = loadImage('Iguana.png') 
 urso = loadImage('Urso.png')
 caracol = loadImage('Caracol.png')
 minhoca = loadImage('Minhoca.png') 
 tubarao = loadImage('Tubarão.png') 
 raia = loadImage('Raia.png')
 aguaviva = loadImage('Aguaviva.png')
 polvo = loadImage('Polvo.png') 
 jogar = loadImage('jogar2.jpg')
 instrucoes = loadImage('INSTRUÇÕES.jpg')
 creditos = loadImage('CREDITOS.jpg')
 parado = loadImage('idle_1.png')
 andando = loadImage('run_1.png')
 pulando = loadImage('jump_0.png')
 parado2 = loadImage('idle_1.png')
 jacare = loadImage('jacare.jpg')
 tartaruga =loadImage('tartaruga.jpg')
 vitoria = loadImage('VITORIA.png')
 derrota = loadImage('DERROTA.png')
 professora = loadImage('PROFESSORA.jpg')
 programador = loadImage('PROGRAMADOR.jpg')
 setastecla = loadImage('setasteclado.png')
 snowy = loadImage('snowy.png')
 mar = loadImage('TELA_DO_JOGO.gif')
 poluicao = loadImage('poluição.png')
 doutor = loadImage('ship_97.png')
 lacaiopulando =loadImage('ninja_jump.png')
 lacaioparado = loadImage('ninja_iddle.png')
 lacaioparado2 = loadImage('ninja_iddle.png')
 lacaiopulando2 = loadImage('ninja_jump.png')
 lacaiofugindo = loadImage('ninja_run0.png')
 lacaio2parado = loadImage('2lacaio_parado.png')
 lacaio2pulo = loadImage('2lacaio_pulo.png')
 lacaio2correndo = loadImage('2lacaio_correndo.png')
 lacaio3parado = loadImage('3lacaio_parado.png')
 lacaio3pulo = loadImage('3lacaio_pulo.png')
 lacaio3correndo = loadImage('3lacaio_correndo.png')
 lacaio4parado = loadImage('4lacaio_parado.png')
 lacaio4pulo = loadImage('4lacaio_pulo.png')
 lacaio4correndo = loadImage('4lacaio_correndo.png')
 lacaio5parado = loadImage('5lacaio_parado.png')
 lacaio5pulo = loadImage('5lacaio_pulo.png')
 lacaio5correndo = loadImage('5lacaio_correndo.png')
 ajudante = loadImage('ship_0.png')
 ScoreScreen = loadImage('ScoreScreen.jpg')
 MapaMundi1 = loadImage('MAPA MUNDI 1.png')
 SamuraiMundi = loadImage('Samurai Mapa Mundi.png')
 NivelCidade = loadImage('Nivel Cidade.png')
 MapaMundi2 = loadImage('MAPA MUNDI 2.png')
 NivelDeserto = loadImage('Nivel Deserto.png')
 MapaMundi3 = loadImage('MAPA MUNDI 3.png')
 NivelFloresta = loadImage('Nivel Floresta.png')
 MapaMundi4 = loadImage('MAPA MUNDI 4.png')
 NivelMar = loadImage('Nivel Mar.png')
 MapaMundi5 = loadImage('MAPA MUNDI 5.png')
 NivelFinal = loadImage('Nivel Final.png')
 erro = loadSound('Buzzer Wrong Answer - Gaming Sound Effect (HD).mp3')
 vitoria = loadSound('TADAAH - Gaming Sound Effect (HD).mp3')
 game_over = loadSound('gameover.mp3')
 acertou = loadSound('acertou.mp3')
}

function setup(){
  createCanvas(400,400);
  frameRate(ratetempo);
}


function draw(){
  textStyle(BOLD)
  textAlign(CENTER)
  textSize(25)
  
    //menu inicial
  if (tela == 1){
      background(menu)
      
      strokeWeight(4)
      stroke(218, 165, 32)
      fill(255, 215, 0)
      rect(posiçãox1,posiçãoy1, prilarg, prialt, 15)
      
      strokeWeight(2)
      stroke(0, 255, 255 )
      fill(224, 255, 255 )
      text("X-Science", posiçãox1+100, posiçãoy1+35)
      
      
      if(mouseX > posiçãox2 && mouseX < posiçãox2+seglarg && mouseY > posiçãoy2 && mouseY < posiçãoy2+segalt){
      strokeWeight(4)
      stroke(124, 252, 0)
      noFill()  
      rect(posiçãox2,posiçãoy2, seglarg, segalt, 15)
        if(mouseIsPressed)
        {
          tela = 2
        }
      }
      
      strokeWeight(2)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text("COMEÇAR", posiçãox2+95, posiçãoy2+35)
      
      if(mouseX > posiçãox3 && mouseX < posiçãox3+seglarg && mouseY > posiçãoy3 && mouseY < posiçãoy3+segalt){
      strokeWeight(4)
      stroke(124, 252, 0)
      noFill()
      rect(posiçãox3,posiçãoy3, seglarg, segalt, 15)
        if(mouseIsPressed)
        {
          tela = 35
        }
      }
      
      strokeWeight(2)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text("INSTRUÇÕES", posiçãox3+95, posiçãoy3+35)
      
      if(mouseX > posiçãox4 && mouseX < posiçãox4+seglarg && mouseY > posiçãoy4 && mouseY < posiçãoy4+segalt){
      strokeWeight(4)
      stroke(124, 252, 0)
      noFill()
      rect(posiçãox4,posiçãoy4, seglarg, segalt, 15)
        if(mouseIsPressed)
        {
          tela = 36
        }
      }
      
      strokeWeight(2)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text("CRÉDITOS", posiçãox4+95, posiçãoy4+35)
      
      strokeWeight(4)
      textSize(15)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text("OBJETIVO DO PROJETO", 100, 380)
      
      if(mouseX > 5 && mouseX < 5 + 190 && mouseY > 360 && mouseY < 360 + 30){
      strokeWeight(4)
      stroke(124, 252, 0)
      noFill()
      rect( 5, 360, 190, 30, 15)
        if(mouseIsPressed)
          {
            tela = 37
          }
      }
    }
  
    //JOGAR
  if (tela == 2){
      background(jogar)
      textSize(20)
      textAlign(LEFT)
      
      stroke(119,136,153 )
      image(setastecla, 290,40)
    
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(255, 255, 255 )
      text("Dica: Pergunte para seus pais ou \n procure na internet se tiver duvidas!" , 5, 160)
     
      strokeWeight(2)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text("Segure as setas do teclado"+"\n"+"para movimentar o samurai!"+"\n"+"\n"+ "Seta para cima para selecionar resposta!" , 5, 60)
        
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(255, 255, 255 )
      text("Dica: Animais vertebrados tem ossos!" , 5, 320)
    
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(255, 255, 255 )
      text("Dica: Animais invertebrados não tem \n ossos!" , 5, 340)
      
      textSize(25)
      stroke(0, 250, 154 )
      fill(34, 139, 34)
      text ("VOLTAR", volx, voly)
      if(mouseX > volx-95 && mouseX < volx+vollarg-95 && mouseY > voly-35 && mouseY < voly+volalt-35){
      strokeWeight(4)
      stroke(124, 252, 0)
      noFill()
      rect(265, 345, 130, 50, 15)
        if(mouseIsPressed)
        {
          tela = 1
        }
      }
      strokeWeight(3)
      stroke(110, 123, 139 )
      fill(255, 0, 0)
      square(testex, testey, testequa, 15);
      
      strokeWeight(2)
      noStroke()
      fill(0)
      text("JOGAR", 155, 260)
      if(mouseX > testex && mouseY > testey && mouseX < testex+testequa && mouseY < testey+testequa)
      {
        if(mouseIsPressed)
          {
            if(jajogou == true){

                posiçãox1 = 100, prilarg = 200, posiçãoy1 = 50, prialt = 50,

                posiçãox2 = 200, seglarg = 190, posiçãoy2 = 140, segalt = 50, posiçãox3 = 200, posiçãoy3 = 220, posiçãox4 = 200, posiçãoy4 = 300,

                volx = 280, voly = 380, vollarg = 190, volalt = 50, testex = 150, testey = 200, testequa = 100,

                bonecox = 0, bonecoy = 290,

                vidas = 3, tempo = 0, temporodando = 0,

                fase, ratetempo = 60, contador = 0, contadorsegundos = 60, redutor = 0,

                historia = 0,

                doutorx = -50 , doutory = 0; doutorposicao = 0,

                lacaiox = 200, lacaioy = 180,

                ajudantex = -150, ajudantey = 230,

                a = 250, b = 250, c = 250,

                contador2 = 0, carregar = 0, porcentagem = 0, carregador = 1, carrega = 1,

                           tela7 = 0, tela10 = 0, tela13 = 0, tela16 = 0,
                tela5 = 0, tela8 = 0, tela11 = 0, tela14 = 0, tela17 = 0, tela19 = 0, tela24 = 0,

                limiteesquerda = -15, limitedireita = 220, limitechao = 290,

                pulandoteste = false,

                quadradoacerto1 = 220 , quadradoacerto2 = 235,

                quadradoesquerda1 = 25 , quadradoesquerda2 = 65,

                quadradodireita1 = 165 , quadradodireita2 = 185,

                MapaCentrox = 175, MapaCentroy = 165,

                SamuraiMundix1 = 175, SamuraiMundiy1 = 165,
                SamuraiMundix2 = 285, SamuraiMundiy2 = 250,
                SamuraiMundix3 = 285, SamuraiMundiy3 = 85,
                SamuraiMundix4 = 60, SamuraiMundiy4 = 85,
                SamuraiMundix5 = 65, SamuraiMundiy5 = 255,

                limitemapaesquerda = 35, limitemapadireita = 325,
                limitemapatopo = 25, limitemapabaixo = 310,

                tempofase21 = 0, tempofase22 = 0,
                tempofase31 = 0, tempofase32 = 0,
                tempofase41 = 0, tempofase42 = 0,
                tempofase51 = 0, tempofase52 = 0,
                tempofase61 = 0, tempofase62 = 0, tempofase63 = 0, tempofase64 = 0, tempofase65 = 0, tempofase66 = 0,

                fase2x = 285 , fase2y = 255, //rect(280, 260, 60, 60, 15)
                fase3x = 285 , fase3y = 65, //rect(280, 70, 60, 60, 15)
                fase4x = 60, fase4y = 65, //rect(60, 70, 60, 60, 15)
                fase5x = 60, fase5y = 255, //rect(65, 260, 60, 60, 15)
                fasefinalx, fasefinaly, //rect(170, 170, 60, 60, 15)

                lacaio2x = 200 , lacaio2y = 180,
                lacaio3x = 200, lacaio3y = 180,
                lacaio4x = 200, lacaio4y = 180,
                lacaio5x = 200, lacaio5y = 180,
                lacaio2, lacaio3, lacaio4, lacaio5,

                tempofinal = 0, controletempo = 0;

            }
            tela = 3
            frameRate(60)
          }
      }
    }
  
    //Historia
  if (tela == 3){
    background(menu)
    jajogou = false
    
    if(historia == 0){
      image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("O samurai estava vivendo seu \n dia normalmente quando do nada...", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
            
    }
    
    if(historia == 1){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      
          if(doutorx < 200){
          for(i = 0; i < 1; i++){
          doutorx = doutorx + 3
        }
      }
      
      if(doutorx >= 200){
        historia = 2
      }
      }
    
    if(historia == 2){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      
          if(doutory < 180){
          for(j = 0; j < 1; j++){
          doutory = doutory + 3
        }
      }
      
      if(doutory >= 180){
        historia = 3
      }
      }
  
    if(historia == 3){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 35, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Muhahahaah Olá Samurai!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
            
    }
    
    if(historia == 4){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(0,5, 400, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Estou indo destruir a natureza para fazer \n mais robos e assim dominar o mundo!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }
    
    if(historia == 5){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10,5, 380, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Se quiser me impedir, derrote \n meus lacaios antes!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }
    
    if(historia == 6){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10,5, 380, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Começando por esse...", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }
    
    if(historia == 7){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaiopulando, lacaiox, lacaioy)
      
      

      if(lacaioy < 400){
          for(m = 0; m < 1; m++){
          lacaioy = lacaioy + 3
        }
      }
      
      if(lacaioy >= 280){
        historia = 8
      }
      }
        
    if(historia == 8){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaiopulando, lacaiox, lacaioy)
      
      

      if(lacaioy < bonecox+50){
          for(m = 0; m < 1; m++){
          lacaioy = lacaioy + 3
        }
      }
      
      if(lacaioy >= bonecox+50){
        lacaiopulando = lacaioparado
        historia = 9
      }
      }
      
    if(historia == 9){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaioparado, lacaiox, lacaioy)
      
      

      if(doutory > -150){
          for(j = 0; j < 1; j++){
          doutory = doutory -3
        }
      }
      
      if(doutory <= -150){
        historia = 10
      }
      }
    
    if(historia == 10){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaioparado, lacaiox, lacaioy)
        image(pombo, 80, 120)
        image(lesma, 220, 120)
      
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos ver se você entende mesmo de \n animais! QUEM É O ROBO? HAHA", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }
    
    if(historia == 11){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaioparado, lacaiox, lacaioy)
        image(pombo, 80, 120)
        image(lesma, 220, 120)
        image(ajudante, ajudantex, ajudantey)
      
    if(ajudantex < -85){
          for(i = 0; i < 1; i++){
          ajudantex = ajudantex + 3
        }
      }
      
      if(ajudantex >= -85){
        historia = 12
      }
      }
    
    if(historia == 12){
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
        image(lacaioparado, lacaiox, lacaioy)
        image(pombo, 80, 120)
        image(lesma, 220, 120)
        image(ajudante, ajudantex, ajudantey)
      
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Samurai! Cheguei para ajudar! \n O animal de verdade é invertebrado!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          tela = 4;
        }
      
      mouseX = 0
      mouseY = 0
      
    }
      
    }
   
  //primeira fase Nivel 1
  if (tela == 4){
    jajogou = false
    background(jogar)
    image(pombo, 80, 120)
    image(lesma, 220, 120)
    image(doutor, doutorx, doutory)
    image(parado, bonecox+50, bonecoy)
    image(lacaioparado, lacaiox+75, lacaioy-15)
    image(ajudante, ajudantex, ajudantey)
    
    fill(250,250,250)
    textSize(15)
    text("Pombo", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Lesma", 275, 270)    
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O INVERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 5
    }
  }
  
  //primeira fase Nivel 2
  if (tela == 5){
    background(jogar)
    image(doutor, doutorx, doutory)
    image(parado, bonecox+50, bonecoy)
    image(lacaioparado, lacaiox+75, lacaioy-15)
    image(ajudante, ajudantex, ajudantey)
    image(macaco, 80, 120)
    image(formiga, 220, 120)
      
    
    if(tela5 == 0){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Droga! Vamos ver se você \n acerta dessa vez!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }  
      
    if(tela5 == 1){  
      
      fill(250,250,250)
      textSize(15)
      text("Macaco", 135, 270)

      fill(250,250,250)
      textSize(15)
      text("Formiga", 275, 270)   
      
      stroke(0)
      fill(238, 201, 0 )
      square(120, 220, 30,5 )

      fill(250,250,250)
      textSize(25)
      text("!", 135, 245)

      stroke(0)
      fill(238, 201, 0 )
      square(120+140, 220, 30,5 )

      fill(250,250,250)
      textSize(25)
      text("!", 135+140, 245)

      fill(250,250,250)
      textSize(25)
      text("QUEM É O INVERTEBRADO?", 200, 50)

      contador = contador + 1
      tempo = contadorsegundos - (parseInt(contador/ratetempo))

      fill(a, b, c)
      textSize(25)
      text("Tempo: "+ (tempo), 100, 75)

      if(tempo <= 20){
        a = 255;
        b = 0;
        c = 0;
      }
      
      if(tempo == 0){
        game_over.play(1,1,1,1,2)
        tela = 26;
      }

    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }

      if (vidas == 3)
      {
      fill(110, 123, 139 )
      textSize(25)
      text("VIDAS: III", 320, 100)
      }

      if (vidas == 2)
      {
      fill(110, 123, 139 )
      textSize(25)
      text("VIDAS: II", 320, 100)
      }

      if (vidas == 1)
      {
      fill(110, 123, 139 )
      textSize(25)
      text("VIDAS: I", 320, 100)
      }

      if (vidas == 0)
      {
        bonecox = 0
        bonecoy = 320
        parado = parado2
        tela = 26
      }

      if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
      {
      fill(205, 0, 0 )
      textSize(40)
      text("ERRADO", 150, 100)
      vidas = vidas - 1
        if(vidas >= 1){
        erro.play(1,1,1,1,2) 
        }
        if(vidas == 0)
          {
             if(vidas === 0)
        {
        game_over.play(1,1,1,1,2)
        }
          }
      bonecox = 0
      bonecoy = 320
      parado = parado2

      }
      if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
      {
      fill(0, 255, 0 )
      textSize(40)
      text("CERTO", 150, 100)
      acertou.play(1,1,1,1,2)
      bonecox = 0
      bonecoy = 290
      parado = parado2
      tela5 = 2
      }
    }
    
    if(tela5 == 2){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Eu... perdi...", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          frameRate(60)
          tela5 = 3;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
    
    if(tela5 == 3){
      lacaioparado = lacaiofugindo
      if(lacaiox < 450){
          for(k = 0; k < 1; k++){
          lacaiox = lacaiox + 3
        }
      }
      
      if(lacaiox >= 450){
        tela = 6
      }
    }
    }
  
  //Mapa Mundi 1
  if(tela == 6){
    background(MapaMundi1)
    image(SamuraiMundi, SamuraiMundix1 , SamuraiMundiy1) 

    textSize(20)
    strokeWeight(2)
    stroke(255, 255, 255 )
    fill(0, 0, 0 )
    text("Aperte Enter em cima do quadrado \n para entrar na fase!", 200, 20)  


    if(keyIsDown(LEFT_ARROW) && SamuraiMundix1 > limitemapaesquerda){
      SamuraiMundix1 -= 5      
      }
    else if(keyIsDown(RIGHT_ARROW) && SamuraiMundix1 < limitemapadireita){
      SamuraiMundix1 += 5       
      }
    else if(keyIsDown(UP_ARROW) && SamuraiMundiy1 > limitemapatopo){
      SamuraiMundiy1 -= 5
      }
    else if(keyIsDown(DOWN_ARROW) && SamuraiMundiy1 < limitemapabaixo){
      SamuraiMundiy1 += 5
      }

    strokeWeight(4)
    stroke(255, 255, 255)
    noFill()
    rect(280, 260, 60, 60, 15)

    if(SamuraiMundix1 > 230 && SamuraiMundix1 > 230 && SamuraiMundiy1 > 230 && SamuraiMundiy1 < 290 ){
      strokeWeight(4)
      stroke(0, 255, 0)
      noFill()
      rect(280, 260, 60, 60, 15)
      if(keyIsDown(ENTER)){
        tela = 7
      }

    }
  }
  
  //segunda fase Nivel 1
  if (tela == 7){
    if(tela7 == 0){
    background(NivelCidade)
    lacaio5 = lacaio5pulo
    image(parado, bonecox+50, bonecoy)
    image(lacaio5, lacaio5x+75, lacaio5y-300)
    image(ajudante, ajudantex, ajudantey)
      
      if(lacaio5y < 565){
        for(i = 0; i < 2; i++){
          lacaio5y = lacaio5y +3
        }
      }
      if(lacaio5y >= 565){
        lacaio5pulo = lacaio5parado
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos lá!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

      }
    }
    
    if(tela7 == 1){
    background(NivelCidade)
    lacaio5x = 275
    lacaio5y = 270
    image(cachorro, 80, 120)
    image(borboleta, 220, 120)
    image(parado, bonecox+50, bonecoy)
    image(lacaio5pulo, lacaio5x, lacaio5y)
    image(ajudante, ajudantex, ajudantey)
      
    fill(250,250,250)
    textSize(15)
    text("Cachorro", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Borboleta", 275, 270)
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O VERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase12 = tempofase21 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 8
    tempofase[0] = tempofase21
    }      
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase1 = tempofase21 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    }
  }
  
  //segunda fase Nivel 2
  if (tela == 8){
    background(NivelCidade)
    image(parado, bonecox+50, bonecoy)
    image(lacaio5pulo, lacaio5x, lacaio5y)
    image(ajudante, ajudantex, ajudantey)
    image(aranha, 80, 120)
    image(rato, 220, 120)
    
      
    
    if(tela8 == 0){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Droga! Vamos ver se você \n acerta dessa vez!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
      
    }  
      
    if(tela8 == 1){  
      
    fill(250,250,250)
    textSize(15)
    text("Aranha", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Rato", 275, 270) 
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O VERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase22 = tempofase22 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase22 = tempofase22 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela8 = 2
    tempofase[1] = tempofase22
    }
    }
    
    if(tela8 == 2){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Lembre de jogar lixo no lixo!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          frameRate(60)
          tela8 = 3;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
    
    if(tela8 == 3){
      lacaio5pulo = lacaio5correndo
      if(lacaio5x < 450){
          for(k = 0; k < 1; k++){
          lacaio5x = lacaio5x + 3
        }
      }
      
      if(lacaio5x >= 450){
        tela = 9
      }
    }
    }
  
  //Mapa Mundi 2
  if(tela == 9){
    background(MapaMundi2)
    image(SamuraiMundi, SamuraiMundix2 , SamuraiMundiy2) 

    textSize(20)
    strokeWeight(2)
    stroke(255, 255, 255 )
    fill(0, 0, 0 )
    text("Aperte Enter em cima do quadrado \n para entrar na fase!", 200, 20)  


    if(keyIsDown(LEFT_ARROW) && SamuraiMundix2 > limitemapaesquerda){
      SamuraiMundix2 -= 5      
      }
    else if(keyIsDown(RIGHT_ARROW) && SamuraiMundix2 < limitemapadireita){
      SamuraiMundix2 += 5       
      }
    else if(keyIsDown(UP_ARROW) && SamuraiMundiy2 > limitemapatopo){
      SamuraiMundiy2 -= 5
      }
    else if(keyIsDown(DOWN_ARROW) && SamuraiMundiy2 < limitemapabaixo){
      SamuraiMundiy2 += 5
      }

    strokeWeight(4)
    stroke(255, 255, 255)
    noFill()
    rect(280, 90, 60, 60, 15)

    if(SamuraiMundix2 > 230 && SamuraiMundix2 > 230 && SamuraiMundiy2 > 55 && SamuraiMundiy2 < 120 ){
      strokeWeight(4)
      stroke(0, 255, 0)
      noFill()
      rect(280, 90, 60, 60, 15)
      if(keyIsDown(ENTER)){
        tela = 10
      }

    }
  }
  
  //terceira fase Nivel 1
  if (tela == 10){
    if(tela10 == 0){
    background(NivelDeserto)
    lacaio4 = lacaio4pulo
    image(parado, bonecox+50, bonecoy)
    image(lacaio4, lacaio4x+75, lacaio4y-300)
    image(ajudante, ajudantex, ajudantey)
      
      if(lacaio4y < 565){
        for(i = 0; i < 2; i++){
          lacaio4y = lacaio4y +3
        }
      }
      if(lacaio4y >= 565){
        lacaio4pulo = lacaio4parado
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos lá!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

        if(keyIsDown(ENTER))
        {
          tela10 = 1;
        }
      }
    }
    
    if(tela10 == 1){
    background(NivelDeserto)
    lacaio4x = 275
    lacaio4y = 270
    image(escaravelho, 80, 120)
    image(cobra, 220, 120)
    image(parado, bonecox+50, bonecoy)
    image(lacaio4pulo, lacaio4x, lacaio4y)
    image(ajudante, ajudantex, ajudantey)
      
    fill(250,250,250)
    textSize(15)
    text("Escaravelho", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Cobra", 275, 270)
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O INVERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase31 = tempofase31 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 11
    tempofase[2] = tempofase31
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase31 = tempofase31 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }      
    }
  }
  
  //terceira fase Nivel 2
  if (tela == 11){
    background(NivelDeserto)
    image(parado, bonecox+50, bonecoy)
    image(lacaio4pulo, lacaio4x, lacaio4y)
    image(ajudante, ajudantex, ajudantey)
    image(camelo, 80, 120)
    image(escorpiao, 220, 120)
      
    
    if(tela11 == 0){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Droga! Vamos ver se você \n acerta dessa vez!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          tela11 = 1;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
      
    if(tela11 == 1){ 
      
    fill(250,250,250)
    textSize(15)
    text("Camelo", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Escorpião", 275, 270)  
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O VERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase32 = tempofase32 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela11 = 2
    tempofase[3] = tempofase32
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase32 = tempofase32 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    }
    
    if(tela11 == 2){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Economize água para não criar \n outro deserto!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          frameRate(60)
          tela11 = 3;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
    
    if(tela11 == 3){
      lacaio4pulo = lacaio4correndo
      if(lacaio4x < 450){
          for(k = 0; k < 1; k++){
          lacaio4x = lacaio4x + 3
        }
      }
      
      if(lacaio4x >= 450){
        tela = 12
      }
    }
    }
  
  //Mapa Mundi 3
  if(tela == 12){
    background(MapaMundi3)
    image(SamuraiMundi, SamuraiMundix3 , SamuraiMundiy3) 

    textSize(20)
    strokeWeight(2)
    stroke(255, 255, 255 )
    fill(0, 0, 0 )
    text("Aperte Enter em cima do quadrado \n para entrar na fase!", 200, 20)  


    if(keyIsDown(LEFT_ARROW) && SamuraiMundix3 > limitemapaesquerda){
      SamuraiMundix3 -= 5      
      }
    else if(keyIsDown(RIGHT_ARROW) && SamuraiMundix3 < limitemapadireita){
      SamuraiMundix3 += 5       
      }
    else if(keyIsDown(UP_ARROW) && SamuraiMundiy3 > limitemapatopo){
      SamuraiMundiy3 -= 5
      }
    else if(keyIsDown(DOWN_ARROW) && SamuraiMundiy3 < limitemapabaixo){
      SamuraiMundiy3 += 5
      }

    strokeWeight(4)
    stroke(255, 255, 255)
    noFill()
    rect(60, 90, 60, 60, 15)

    if(SamuraiMundix3 > 5 && SamuraiMundix3 < 100 && SamuraiMundiy3 > 55 && SamuraiMundiy3 < 120 ){
      strokeWeight(4)
      stroke(0, 255, 0)
      noFill()
      rect(60, 90, 60, 60, 15)
      if(keyIsDown(ENTER)){
        tela = 13
      }

    }
  }
  
  //quarta fase Nivel 1
  if (tela == 13){
    if(tela13 == 0){
    background(NivelFloresta)
    lacaio3 = lacaio3pulo
    image(parado, bonecox+50, bonecoy)
    image(lacaio3, lacaio3x+75, lacaio3y-300)
    image(ajudante, ajudantex, ajudantey)
      
      if(lacaio3y < 565){
        for(i = 0; i < 2; i++){
          lacaio3y = lacaio3y +3
        }
      }
      if(lacaio3y >= 565){
        lacaio3pulo = lacaio3parado
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos lá!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

        if(keyIsDown(ENTER))
        {
          tela13 = 1;
        }
      }
    }
    
    if(tela13 == 1){
    background(NivelFloresta)
    lacaio3x = 275
    lacaio3y = 270
    image(urso, 80, 120)
    image(minhoca, 220, 120)
    image(parado, bonecox+50, bonecoy)
    image(lacaio3pulo, lacaio3x, lacaio3y)
    image(ajudante, ajudantex, ajudantey)
      
    fill(250,250,250)
    textSize(15)
    text("Urso", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Minhoca", 275, 270)  
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O VERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase41 = tempofase41 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 14
    tempofase[4] = tempofase41
    }    
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase41 = tempofase41 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    }
  }
  
  //quarta fase Nivel 2
  if (tela == 14){
    background(NivelFloresta)
    image(parado, bonecox+50, bonecoy)
    image(lacaio3pulo, lacaio3x, lacaio3y)
    image(ajudante, ajudantex, ajudantey)
    image(iguana, 80, 120)
    image(caracol, 220, 120)
      
    
    if(tela14 == 0){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Droga! Vamos ver se você \n acerta dessa vez!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          tela14 = 1;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
      
    if(tela14 == 1){  
    
    fill(250,250,250)
    textSize(15)
    text("Iguana", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Caracol", 275, 270)    
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O INVERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase42 = tempofase42 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase42 = tempofase42 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela14 = 2
    tempofase[5] = tempofase42
    }
    }
    
    if(tela14 == 2){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Você notou que todos os insetos \n são invertebrados?", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          frameRate(60)
          tela14 = 3;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
    
    if(tela14 == 3){
      lacaio3pulo = lacaio3correndo
      if(lacaio3x < 450){
          for(k = 0; k < 1; k++){
          lacaio3x = lacaio3x + 3
        }
      }
      
      if(lacaio3x >= 450){
        tela = 15
      }
    }
    }
  
  //Mapa Mundi 4
  if(tela == 15){
    background(MapaMundi4)
    image(SamuraiMundi, SamuraiMundix4 , SamuraiMundiy4) 

    textSize(20)
    strokeWeight(2)
    stroke(255, 255, 255 )
    fill(0, 0, 0 )
    text("Aperte Enter em cima do quadrado \n para entrar na fase!", 200, 20)  


    if(keyIsDown(LEFT_ARROW) && SamuraiMundix4 > limitemapaesquerda){
      SamuraiMundix4 -= 5      
      }
    else if(keyIsDown(RIGHT_ARROW) && SamuraiMundix4 < limitemapadireita){
      SamuraiMundix4 += 5       
      }
    else if(keyIsDown(UP_ARROW) && SamuraiMundiy4 > limitemapatopo){
      SamuraiMundiy4 -= 5
      }
    else if(keyIsDown(DOWN_ARROW) && SamuraiMundiy4 < limitemapabaixo){
      SamuraiMundiy4 += 5
      }

    strokeWeight(4)
    stroke(255, 255, 255)
    noFill()
    rect(65, 260, 60, 60, 15)

    if(SamuraiMundix4 > 5 && SamuraiMundix4 < 100 && SamuraiMundiy4 > 230 && SamuraiMundiy4 < 290 ){
      strokeWeight(4)
      stroke(0, 255, 0)
      noFill()
      rect(65, 260, 60, 60, 15)
      if(keyIsDown(ENTER)){
        tela = 16
      }

    }
  }
  
  //quinta fase Nivel 1
  if (tela == 16){
    if(tela16 == 0){
    background(NivelMar)
    lacaio2 = lacaio2pulo
    image(parado, bonecox+50, bonecoy)
    image(lacaio2, lacaio2x+75, lacaio2y-300)
    image(ajudante, ajudantex, ajudantey)
      
      if(lacaio2y < 565){
        for(i = 0; i < 2; i++){
          lacaio2y = lacaio2y +3
        }
      }
      if(lacaio2y >= 565){
        lacaio2pulo = lacaio2parado
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos lá!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

        if(keyIsDown(ENTER))
        {
          tela16 = 1;
        }
      }
    }
    
    if(tela16 == 1){
    background(NivelMar)
    lacaio2x = 275
    lacaio2y = 270
    image(aguaviva, 80, 120)
    image(tubarao, 220, 120)
    image(parado, bonecox+50, bonecoy)
    image(lacaio2pulo, lacaio2x, lacaio2y)
    image(ajudante, ajudantex, ajudantey)
      
    fill(250,250,250)
    textSize(15)
    text("Água-viva", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Tubarão", 275, 270)  
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O INVERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase52 = tempofase52 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 17
    tempofase[6] = tempofase51
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase51 = tempofase51 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    }
  }
  
  //quinta fase Nivel 2
  if (tela == 17){
    background(NivelMar)
    image(parado, bonecox+50, bonecoy)
    image(lacaio2pulo, lacaio2x, lacaio2y)
    image(ajudante, ajudantex, ajudantey)
    image(raia, 80, 120)
    image(polvo, 220, 120)
      
    
    if(tela17 == 0){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Droga! Vamos ver se você \n acerta dessa vez!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
    }  
      
    if(tela17 == 1){
      
    fill(250,250,250)
    textSize(15)
    text("Raia", 135, 270)
    
    fill(250,250,250)
    textSize(15)
    text("Polvo", 275, 270)        
    
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
        
    fill(250,250,250)
    textSize(25)
    text("QUEM É O INVERTEBRADO?", 200, 50)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 75)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase52 = tempofase52 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase52 = tempofase52 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela17 = 2
    tempofase[7] = tempofase52
    }
    }
    
    if(tela17 == 2){
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(10, 5, 375, 50, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Não polua nosso mar!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 
      
        if(keyIsDown(ENTER))
        {
          frameRate(60)
          tela17 = 3;
        }
      
      mouseX = 0
      mouseY = 0
      
    }  
    
    if(tela17 == 3){
      lacaio2pulo = lacaio2correndo
      if(lacaio2x < 450){
          for(k = 0; k < 1; k++){
          lacaio2x = lacaio2x + 3
        }
      }
      
      if(lacaio2x >= 450){
        tela = 18
      }
    }
    }
  
  //Mapa Mundi 5
  if(tela == 18){
    background(MapaMundi5)
    image(SamuraiMundi, SamuraiMundix5 , SamuraiMundiy5) 

    textSize(20)
    strokeWeight(2)
    stroke(255, 255, 255 )
    fill(0, 0, 0 )
    text("Aperte Enter em cima do quadrado \n para entrar na fase!", 200, 20)  


    if(keyIsDown(LEFT_ARROW) && SamuraiMundix5 > limitemapaesquerda){
      SamuraiMundix5 -= 5      
      }
    else if(keyIsDown(RIGHT_ARROW) && SamuraiMundix5 < limitemapadireita){
      SamuraiMundix5 += 5       
      }
    else if(keyIsDown(UP_ARROW) && SamuraiMundiy5 > limitemapatopo){
      SamuraiMundiy5 -= 5
      }
    else if(keyIsDown(DOWN_ARROW) && SamuraiMundiy5 < limitemapabaixo){
      SamuraiMundiy5 += 5
      }

    strokeWeight(4)
    stroke(255, 255, 255)
    noFill()
    rect(172, 162, 60, 60, 15)

    if(SamuraiMundix5 > 140 && SamuraiMundix5 < 210 && SamuraiMundiy5 > 125 && SamuraiMundiy5 < 185 ){
      strokeWeight(4)
      stroke(0, 255, 0)
      noFill()
      rect(172, 162, 60, 60, 15)
      if(keyIsDown(ENTER)){
        tela = 19
      }

    }
  }
  
  //Sexta fase Nivel 1
  if(tela == 19){
    if(tela19 == 0){
      background(NivelFinal)
      image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Bem-vindo ao meu laboratorio...", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

      
      
    }
    
    if(tela19 == 1){
        background(NivelFinal)
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      
          if(doutorx < 200){
          for(i = 0; i < 1; i++){
          doutorx = doutorx + 3
        }
      }
      
      if(doutorx >= 200){
        tela19 = 2
      }
      }
    
    if(tela19 == 2){
        background(NivelFinal)
        image(doutor, doutorx, doutory)
        image(parado, bonecox+50, bonecoy)
      
      
          if(doutory < 180){
          for(j = 0; j < 1; j++){
          doutory = doutory + 3
        }
      }
      
      if(doutory >= 180){
        tela19 = 3
      }
      }
    
    if(tela19 == 3){
      background(NivelFinal)
      image(doutor, doutorx, doutory)
      image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Vamos ver se você \n prestou atenção!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100) 

    }
    
    if(tela19 == 4){
      
    background(NivelFinal)
    image(doutor, doutorx, doutory)
    image(parado, bonecox+50, bonecoy) 
    
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(100, 165, 70, 55, 15)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(240, 165, 70, 55, 15)  
            
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Sim", 135, 200)
    
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Não", 275, 200)    
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(25,5, 350, 55, 15)
        
    fill(0,0,0)
    stroke(250,250,250)  
    textSize(20)
    text("Todos os insetos são \n invertebrados?", 200, 30)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    stroke(0,0,0)  
    textSize(25)
    text("Tempo: "+ (tempo), 100, 90)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase61 = tempofase61 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela19 = 5
    tempofase[8] = tempofase61
    }
    
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase61 = tempofase61 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    }
    
    if(tela19 == 5){
      
    background(NivelFinal)
    image(doutor, doutorx, doutory)
    image(parado, bonecox+50, bonecoy)
    
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(100, 165, 70, 55, 15)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(240, 165, 70, 55, 15)  
            
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Sim", 135, 200)
    
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Não", 275, 200)    
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(25,5, 350, 55, 15)
        
    fill(0,0,0)
    stroke(250,250,250)  
    textSize(20)
    text("Os animais invertebrados \n tem ossos?", 200, 30)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    stroke(0,0,0)  
    textSize(25)
    text("Tempo: "+ (tempo), 100, 90)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase62 = tempofase62 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase62 = tempofase62 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela19 = 6
    tempofase[9] = tempofase62
    }
    } 
    
    if(tela19 == 6){
     
    background(NivelFinal)
    image(doutor, doutorx, doutory)
    image(parado, bonecox+50, bonecoy)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(100, 165, 70, 55, 15)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(240, 165, 70, 55, 15)  
            
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Sim", 135, 200)
    
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Não", 275, 200)    
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(25,5, 350, 55, 15)
        
    fill(0,0,0)
    stroke(250,250,250)  
    textSize(20)
    text("Eu posso desperdiçar água?", 200, 30)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    stroke(0,0,0)
    textSize(25)
    text("Tempo: "+ (tempo), 100, 90)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase63 = tempofase63 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase63 = tempofase63 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela19 = 7
    tempofase[10] = tempofase63
    }
    } 
    
    if(tela19 == 7){
      
     background(NivelFinal)
      image(doutor, doutorx, doutory)
      image(parado, bonecox+50, bonecoy) 
      
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(100, 165, 70, 55, 15)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(240, 165, 70, 55, 15)  
            
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Mar", 135, 200)
    
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Lixeira", 275, 200)     
      
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(25,5, 350, 55, 15)
        
    fill(0,0,0)
    stroke(250,250,250)  
    textSize(20)
    text("Onde eu devo jogar o meu lixo?", 200, 30)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    textSize(25)
    stroke(0,0,0)  
    text("Tempo: "+ (tempo), 100, 90)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase64 = tempofase64 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase64 = tempofase64 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela19 = 8
    tempofase[11] = tempofase64
    }
    } 
    
    if(tela19 == 8){
      
      background(NivelFinal)
      image(doutor, doutorx, doutory)
      image(parado, bonecox+50, bonecoy)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(100, 165, 70, 55, 15)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(240, 165, 70, 55, 15)  
            
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Cobra", 135, 200)
    
    fill(0,0,0)
    stroke(250, 250, 250)  
    textSize(20)
    text("Polvo", 275, 200)     
       
    stroke(0)
    fill(238, 201, 0 )
    square(120, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135, 245)
        
    stroke(0)
    fill(238, 201, 0 )
    square(120+140, 220, 30,5 )
    
    fill(250,250,250)
    textSize(25)
    text("!", 135+140, 245)
      
    strokeWeight(2)
    stroke(0, 0, 0)
    fill(250, 250, 250)
    rect(25,5, 350, 55, 15)
        
    fill(0,0,0)
    stroke(250,250,250)  
    textSize(20)
    text("Qual desses NÃO é \n invertebrado??", 200, 30)
        
    contador = contador + 1
    tempo = contadorsegundos - (parseInt(contador/ratetempo))
        
    fill(a, b, c)
    stroke(0,0,0) 
    textSize(25)
    text("Tempo: "+ (tempo), 100, 90)
        
    if(tempo <= 20){
      a = 255;
      b = 0;
      c = 0;
    }
    if(tempo == 0){
      game_over.play(1,1,1,1,2)
      tela = 26;
    }
           
    if(keyIsDown(LEFT_ARROW) && bonecox > limiteesquerda){
      frameRate(60)
      parado = andando
      bonecox -= 5      
    }
    
    else if(keyIsDown(RIGHT_ARROW) && bonecox < limitedireita){
      frameRate(60)
      parado = andando
      bonecox += 5       
      }
    
    else if(keyIsDown(UP_ARROW) && ! pulandoteste){
    frameRate(20)
      parado = pulando
      bonecoy = limitechao - 70
      pulandoteste = true
    }
    
    if ( pulandoteste ){
      if(bonecoy < limitechao){
        frameRate(20)
        bonecoy = bonecoy + 12
      }
      else{
        frameRate(20)
        pulandoteste = false
        bonecoy = limitechao
      }
    }
        
    if (vidas == 3)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: III", 320, 100)
    }
    
    if (vidas == 2)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: II", 320, 100)
    }
        
    if (vidas == 1)
    {
    fill(110, 123, 139 )
    textSize(25)
    text("VIDAS: I", 320, 100)
    }
    
    if (vidas == 0)
    {
      bonecox = 0
      bonecoy = 320
      parado = parado2
      tela = 26
    }
        
    if(bonecox > quadradoesquerda1 && bonecox < quadradoesquerda2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(0, 255, 0 )
    textSize(40)
    text("CERTO", 150, 100)
    tempofase65 = tempofase65 + 60 - tempo
    acertou.play(1,1,1,1,2)
    contador = 0
    bonecox = 0
    bonecoy = 290
    frameRate(60)
    tela = 24
    tempofase[12] = tempofase65
    }
    
    if(bonecox > quadradodireita1 && bonecox < quadradodireita2 && bonecoy > quadradoacerto1 && bonecoy < quadradoacerto2)
    {
    fill(205, 0, 0 )
    textSize(20)
    text("ERRADO", 150, 100)
    tempofase65 = tempofase65 + 60 - tempo
    vidas = vidas - 1
      if(vidas >= 1){
      erro.play(1,1,1,1,2) 
      }
      if(vidas === 0)
      {
      game_over.play(1,1,1,1,2)
      }
    contador = 0
    bonecox = 0
    bonecoy = 290
    parado = parado2
    }
    } 
    
  }
  
  //Sexta fase Nivel FINAL
  if(tela == 24){
    
      background(NivelFinal)
      image(doutor, doutorx, doutory)
      image(parado, bonecox+50, bonecoy)
      
      strokeWeight(2)
      stroke(0, 0, 0)
      fill(250, 250, 250)
      rect(25,5, 350, 55, 15)

      textSize(20)
      noStroke()
      fill(0, 0, 0 )
      text("Ok ok! \n Eu vou parar!", 200, 25)
        
      textSize(25)
      text ("Aperte Enter para Continuar", 230, 100)  
       
  }
  //vai para tela 33
  
  //Game Over
  if (tela == 26){
    background(poluicao)
    textSize(30)
     
    noStroke()
    fill(255, 0, 0)
    text("GAME OVER!", 200, 200)
    text("VOLTAR", 310, 380)
    
    
    if(keyIsDown(ENTER))
      {
        mouseX = 0
        mouseY = 0
        tela = 1
        vidas = 3
        historia = 0
        tela7 = 0
        lacaioparado = lacaioparado2
        lacaiox = 200
        lacaioy = 180
        doutorx = -50 
        doutory = 0
        tempo = 60
        contador = 0
        a = 250
        b = 250
        c = 250
      }
    
   }

  //Vitoria Final
  if (tela == 33){
    background(mar)
    textSize(30)
     
    noStroke()
    fill(0, 255, 0 )
    text("MUITO BEM!", 200, 200)
    text("SHIFT PARA VER O SCORE", 200, 380)
         
   }
  
  //Dados como vitoria/derrotas/tempo
  if (tela == 34){
    background(ScoreScreen)
    

    
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Seu Tempo em cada nivel: ", posiçãox1+100, posiçãoy1+35)
    
    if(carrega == 1){
      strokeWeight(2)
      stroke(0, 255, 255 )
      fill(34, 139, 34 )
      text("Aperte Enter carregar", posiçãox1+100, posiçãoy1+75)
            
      while(controletempo == 0){
        for(i = 0; i < 13; i++){
          tempofinal = tempofinal + tempofase[i]
          if(i == 12){
            controletempo = 1
          }
        }  
      }
      
    }
    
    if(carrega == 2){
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Carregou "+porcentagem+"%", posiçãox1+100, posiçãoy1+75)
          
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Nivel 1//  1°: "+tempofase[0]+"    2°: "+tempofase[1], posiçãox1+50, posiçãoy1+110)
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Nivel 2//  1°: "+tempofase[2]+"    2°: "+tempofase[3], posiçãox1+50, posiçãoy1+135)      
    
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Nivel 3//  1°: "+tempofase[4]+"    2°: "+tempofase[5], posiçãox1+50, posiçãoy1+160)
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Nivel 4//  1°: "+tempofase[6]+"    2°: "+tempofase[7], posiçãox1+50, posiçãoy1+185)
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Nivel 5//  1°: "+tempofase[8]+"    2°: "+tempofase[9], posiçãox1+50, posiçãoy1+210)
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("3°: "+tempofase[10]+"    4°: "+tempofase[11], posiçãox1+105, posiçãoy1+235)
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("5°: "+tempofase[12], posiçãox1+64, posiçãoy1+260)
      
      
    strokeWeight(2)
    stroke(0, 255, 255 )
    fill(34, 139, 34 )
    text("Tempo Final: "+tempofinal+" SEGUNDOS", posiçãox1+80, posiçãoy1+290)      
    
    textSize(25)
    text ("APERTE ESC PARA VOLTAR", volx-60, voly)
      
    }
    
  }
  
  //Instruções
  if (tela == 35){
      background(instrucoes)
      textSize(20)
      textAlign(LEFT)
     
      strokeWeight(2)
      stroke(0)
      fill(135, 206, 250)
      text("Vamos salvar os animais? O Doutor"+"\n"+"Poluição está destruindo o ecossistema,"+"\n"+"acabe com ele e salve nossos animais!"+"\n"+"Você tem que escolher entre o robô e o"+"\n"+"animal real! O jogo vai te dar dicas, como"+"\n"+"por exemplo: se ele é vertebrado ou"+"\n"+"invertebrado. Acabe com os vilões!", 5, 20)
      
      textSize(25)
      text ("VOLTAR", volx, voly)
      if(mouseX > volx-95 && mouseX < volx+vollarg-95 && mouseY > voly-35 && mouseY < voly+volalt-35){
      strokeWeight(4)
      stroke(135, 206, 250)
      noFill()
      rect(265, 345, 130, 50, 15)
        if(mouseIsPressed)
        {
          tela = 1
        }
      }
    }
  
  //Creditos
  if (tela == 36){
      background(creditos)
      textSize(20)
      textAlign(LEFT)
     
      strokeWeight(2)
      stroke(0)
      fill(135, 206, 250)
      text("Programador: Felipe Monteiro Bet"+"\n"+"Formando em Ciências e Tecnologia"+"\n"+"Para turma de Lógica de Programação"+"\n"+"\n"+"\n"+"\n"+"Professora: Jessica Pereira Barbosa"+"\n"+"Formada em Pedagogia pela UFRN"+"\n"+"Professora de ensino fundamental I", 20, 140)
      image(professora,25,215)
      image(programador, 25, 60)
      
      textSize(25)
      stroke(0)
      fill(135, 206, 250)
      text ("VOLTAR", volx, voly)
      if(mouseX > volx-95 && mouseX < volx+vollarg-95 && mouseY > voly-35 && mouseY < voly+volalt-35){
      strokeWeight(4)
      stroke(135, 206, 250)
      noFill()
      rect(265, 345, 130, 50, 15)
        if(mouseIsPressed)
        {
          tela = 1
        }
      }
    }
  
  //Objetivo do projeto
  if (tela == 37){
      textAlign(LEFT)
      textSize(20)
      
      background(snowy)
      
      strokeWeight(2)
      stroke(0)
      fill(34, 139, 34)
      text("O objetivo do jogo é ser uma ferramenta"+"\n"+"interativa que facilite o processo de"+"\n"+"aprendizado das crianças sobre os"+"\n"+"animais vertebrados e invertebrados."+"\n"+"Esse jogo foi pensado especialmente"+"\n"+"para os alunos do segundo ano do"+"\n"+"ensino fundamental I."+"\n"+"\n"+"As habilidades BNCC escolhidas foram:"+"\n"+"1º Conhecimento (descobrir a"+"\n"+"característica do animal/inseto)"+"\n"+"10º Responsabilidade e Cidadania (salvar"+"\n"+"os animais e lutar contra a poluição).", 5, 25)
      
      textSize(25)
      text ("VOLTAR", volx, voly)
      if(mouseX > volx-95 && mouseX < volx+vollarg-95 && mouseY > voly-35 && mouseY < voly+volalt-35){
      strokeWeight(4)
      stroke(135, 206, 250)
      noFill()
      rect(265, 345, 130, 50, 15)
        if(mouseIsPressed)
        {
          tela = 1
        }
      }
    
  
}
  
  
}

function keyPressed() {

  if(tela == 3 && historia != 12){
    if (keyCode === ENTER) {
    historia += 1;
  }
  }
  
  if(tela == 5 && tela5 == 0){
    if (keyCode === ENTER) {
    tela5 += 1;
  }
  }
  
  if(tela == 7 && tela7 == 0){
    if (keyCode === ENTER) {
    tela7 += 1;
  }
  }
  
  if(tela == 8 && tela8 == 0){
    if (keyCode === ENTER) {
    tela8 += 1;
  }
  }
  
  if(tela == 10 && tela10 == 0){
    if (keyCode === ENTER) {
    tela10 += 1;
  }
  }
  
  if(tela == 11 && tela11 == 0){
    if (keyCode === ENTER) {
    tela11 += 1;
  }
  }
  
  if(tela == 13 && tela13 == 0){
    if (keyCode === ENTER) {
    tela13 += 1;
  }
  }
  
  if(tela == 14 && tela14 == 0){
    if (keyCode === ENTER) {
    tela14 += 1;
  }
  }
  
  if(tela == 16 && tela16 == 0){
    if (keyCode === ENTER) {
    tela16 += 1;
  }
  }
  
  if(tela == 17 && tela17 == 0){
    if (keyCode === ENTER) {
    tela17 += 1;
  }
  }
  
  if(tela == 19){
    if(tela19 == 0){
      if (keyCode === ENTER) {
      tela19 += 1;
      }
    }
    if(tela19 == 3){
      if (keyCode === ENTER) {
      tela19 += 1;
      }
    }
  }
  
  if(tela == 24){
    if (keyCode === ENTER) {
    tela = 33;
  }
  }
  
  if(tela == 33){
    if (keyCode === SHIFT) {
    tela = 34;
    }
  }
  
  if(tela == 34){
    if(carrega == 1){
       if(keyCode === ENTER){
            while(carregador == 1){
            carregar = carregar + 1
            if(carregar%5 == 0){
               porcentagem = porcentagem + 0.5
            }

            if(carregar == 1000){
              carregador = 2
              carrega = 2
            } 
    
           }
      }
    }
   if(carrega == 2){
    if(keyCode === ESCAPE){
      jajogou = true
      tela = 1
    }
   }
  }
 
}