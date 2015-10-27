function doSomething(circumference,driver,driven,engineRPM){
  // take in variable from the input form
  var circumference = document.getElementById('circumference').value,
      driverTeeth   = document.getElementById('driver').value,
      drivenTeeth   = document.getElementById('driven').value,
      engineRPM     = document.getElementById('engineRPM').value;

  var ratioPreRound = parseFloat(drivenTeeth/driverTeeth),
      ratio = Math.round(ratioPreRound * 100) / 100,
      wheelSpeed = parseFloat(engineRPM/ratio),
      wheelRPM = Math.round(wheelSpeed * 100)/100,
      inchesPerMinute = parseInt(wheelRPM * circumference),
      inchesPerHour = parseInt(inchesPerMinute * 60),
      speed = parseFloat(inchesPerHour / 63360),
      mph = Math.round(speed * 100)/100;

  //set values to table
  document.getElementById('circum').innerHTML = circumference;
  document.getElementById('drivr').innerHTML = driverTeeth;
  document.getElementById('drivn').innerHTML = drivenTeeth;
  document.getElementById('ratio').innerHTML = ratio +":1";
  document.getElementById('ngn').innerHTML = engineRPM;
  document.getElementById('wheelRPM').innerHTML = wheelRPM;
  document.getElementById('mph').innerHTML = mph;
}
