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
      expect(thermostat.temperature).toEqual(19)
    });
  });
});

