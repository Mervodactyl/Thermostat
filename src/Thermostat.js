function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.powerSavingMode === true && this.temperature < 25) {this.temperature += 1};
  if(this.powerSavingMode === false && this.temperature < 32) {this.temperature += 1};
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.temperature > 10) {this.temperature -= 1};
};

Thermostat.prototype.resetTemperature = function() {
  this.powerSavingMode = true;
  this.temperature = 20;
};

Thermostat.prototype.efficiency = function() {
  if(this.temperature < 18) return 'very good';
  if(this.temperature < 25) return 'good';
  if(this.temperature >= 25) return 'poor';
};

