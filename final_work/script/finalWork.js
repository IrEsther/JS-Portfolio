var button = document.getElementById('save');

var appendToTable = (dataToAppend) => {
  document.querySelector('div.data-group').style.display = 'block';
  var newData = document.querySelector(".data-group");
  var newDiv = document.createElement("div");
  newDiv.setAttribute('class', 'data-item-1');
  for(let objData in dataToAppend) {
      var newSpan = document.createElement("span");
      newSpan.innerHTML = dataToAppend[objData];
      newDiv.appendChild(newSpan);
  }
  newData.appendChild(newDiv);
}

if(localStorage.app) {
    var nodeMain = JSON.parse(localStorage.app);
    nodeMain.forEach(function(nodeMain) {
      appendToTable(nodeMain);
    })
} else {
  document.querySelector('div.data-group').style.display = 'none';
  nodeMain = [];
}

button.addEventListener('click', function() {
  var dataList = document.getElementById('form');
  var nodeObj = {};
  var val = []; 
  var err = "<p id='errPara'> Please fill the details </p>";

  var errPara = document.querySelectorAll('#errPara');
  if(errPara) {
    for(let para of errPara) {
      para.remove();
    }
  }

  for(let data of dataList) {
    if (data.type == "text" && data.value.trim() != "") {
      nodeObj[data.name] = data.value;
    } else if(data.type == "text") {
      val.push(data.name);
    }
  }

 

  var validationCheck = new Promise(function(resolve, reject) {
        if (val.length >= 1) {
          reject(val);
        } else {
          resolve(nodeObj);
        }
      });

  validationCheck.then(accepted, rejected);
  function accepted(data) {
    nodeMain.push(data);
    localStorage.app = JSON.stringify(nodeMain);
    appendToTable(data);
    alert('Thank you! Your data has been saved');
    dataList.reset();
  }

  function rejected(erData) {
      for(let erElement of erData) {
        erElement = document.querySelector("input[name='" + erElement + "']");
        if(erElement.parentNode.lastElementChild.id != "errPara") {
          erElement.parentNode.insertAdjacentHTML('beforeEnd', err) ;
        }
      }
  }
});