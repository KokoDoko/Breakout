var Hero = function (x, y) {
    
    this.speed = 6;
    
    // Create a new sprite (x, y, asset)
    this.sprite = game.add.sprite(x, y, 'platform');
    
};

Hero.prototype.move = function(direction){
    
    this.sprite.x += (this.speed * direction);
    
};

Hero.prototype.beweeg = function(speed){
    
    this.sprite.x += speed;
    
}

Hero.prototype.getX = function(){ return this.sprite.x; };
Hero.prototype.getY = function(){ return this.sprite.y; };
Hero.prototype.getWidth = function(){ return this.sprite.width; };
Hero.prototype.getHeight = function(){ return this.sprite.height; };
Hero.prototype.getSprite = function(){ return this.sprite; }
