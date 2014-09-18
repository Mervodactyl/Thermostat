describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("on initialization", function() {
    it('should start at 20 degrees celcius', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("changing temperature", function() {
    it('should be able to increase temperature', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('should be able to decrease temperature', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should not be able to go below 10 degrees celcius', function() {
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('power saving mode (psm)', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('when psm is on, maximum temp is 25 degrees', function() {
      thermostat.temperature = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });

    it('when psm is off, maximum temp is 32 degrees', function() {
      thermostat.powerSavingMode = false;
      thermostat.temperature = 32;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(32);
    });

    it('can raise the temperature above 25 degrees when psm is off', function() {
      thermostat.powerSavingMode = false;
      thermostat.temperature = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(26);
    });
  });

  describe('general settings', function() {
    it('should be able to reset itself to 20', function () {
      thermostat.temperature = 23;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

    it('should turn psm on when it resets', function () {
      thermostat.powerSavingMode = false;
      thermostat.resetTemperature();
      expect(thermostat.powerSavingMode).toEqual(true);
    });
  });

  describe('energy usage and color graph', function () {
    it('should change it energy level to "very good" when temperature is less than 18 degrees', function () {
      thermostat.temperature = 17;
      expect(thermostat.efficiency()).toEqual('very good');
    });

    it('should change it energy level to "good" when temperature is less than 25 degrees', function () {
      expect(thermostat.efficiency()).toEqual('good');
    });

    it('should change it energy level to "poor" when temperature is more than 25 degrees', function () {
      thermostat.temperature = 25;
      expect(thermostat.efficiency()).toEqual('poor');
    });
  });
});









