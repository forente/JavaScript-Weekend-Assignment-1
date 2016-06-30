var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

// new added patients
var claim6 = new Claim('Dylon Paradis',"Primary Care",2000);
var claim7 = new Claim('Johnathan Jostar',"Specialist",3000);
var claim8 = new Claim('Randy Brando',"Specialist",4500);
var claim9 = new Claim('Zeak Poppins',"Emergency",28000);
var claim10 = new Claim('Robert Landis',"Emergency",10000);

var initialList = [claim1, claim2, claim3, claim4, claim5]

initialList.push(claim6);
initialList.push(claim7);
initialList.push(claim8);
initialList.push(claim9);
initialList.push(claim10);

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered (claim){
  var pCovered = -1;
  switch (claim.visitType) {
    case 'Optical':
      pCovered = 0.0;
      break;
    case 'Specialist':
      pCovered = 0.10;
      break;
    case 'Emergency':
      pCovered = 1;
      break;
    case 'Primary Care':
      pCovered = 0.50;
      break;
    default:
      pCovered = 0.00;
  }
  return pCovered;
}


//function to determine amount covered

function ammountCovered(claim){
	return ( claim.visitCost * percentCovered(claim));
}



	for (var i = 0; i < initialList.length; i++) {
		console.log("Paid out $"+(initialList[i].visitCost- ammountCovered(initialList[i])) +" for "+initialList[i].patientName  );
	}
