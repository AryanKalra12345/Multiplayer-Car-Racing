class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    //this.title = createElement('h2');
    this.reset = createButton('Reset');
   // this.logoImage =loadImage("images/favicon.png")
   // this.logo = createImg(this.logoImage);


  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //this.title.hide();
  }

  display(){
    
    //this.logo.position(width / 2, 30);
    this.button.class("customButton")
    this.input.class("customInput")
    this.reset.class("customButton")
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2-10);
    this.reset.position(displayWidth-300,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/2-70);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      database.ref('/').update({
        players: null,
        leaderBoard: 0
      })
    });
  }
}
