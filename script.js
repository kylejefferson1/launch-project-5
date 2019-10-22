
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
<ol>
<li>Name: ${json[0].name}</li>
<li>Diameter: ${json[0].diameter}</li>
<li>Star: ${json[0].star}</li>
<li>Distance from Earth: ${json[0].distance}</li>
<li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">
      `;
   });
});




function preventDefault(){
   var pilot = document.getElementById("pilotName").value;
   var coPilot = document.getElementById("copilotName").value;
   var fuel = document.getElementById("fuelLevel").value;
   var cargo = document.getElementById("cargoMass").value;
   var isReady = true;


   if(!pilot || !coPilot || !fuel || !cargo){
      alert('All fields are required!');
   }

   else if(typeof pilot !== 'string' || typeof coPilot !== 'string' || isNaN(fuel) || isNaN(cargo)){
      alert('Make sure to enter valid information for each field!');
   }

   if(fuel < 10000){
      isReady = false;
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
   }
   else if(cargo > 10000){
      isReady =false;
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
   }

   if(isReady === false){
      document.getElementById("pilotStatus").innerHTML = "Pilot " + pilot + " is ready for launch";
      document.getElementById("copilotStatus").innerHTML = "Co-pilot " + coPilot + " is ready for launch";
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
      document.getElementById("faultyItems").style.visibility = "visible";
   }

   if(isReady === true){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatus").style.color = "green";
   }



   

   function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
    //sleep(10000000000000000);




}



