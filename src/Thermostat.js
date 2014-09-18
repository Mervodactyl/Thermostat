function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
  this.maximumTemperature = 25;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < this.maximumTemperature) {this.temperature += 1};
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
  return 'poor';
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  this.powerSavingMode ? this.maximumTemperature = 25 : this.maximumTemperature = 32;
};
