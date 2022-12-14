var getSiblings = function (elem) {
    var siblings = [];
    var sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };
  var select ;
  thankYou.style.display = "none";
  var userInput;
  var opt = document.querySelectorAll("input[name=rate]");
  for (let i of opt) {
    i.addEventListener("click", function () {
      userInput = i.value;
      let rateNum = "label[for=rate" + i.value + "]";
      console.log(rateNum);
      let optBtn = document.querySelector(rateNum);
      console.log(optBtn);
      optBtn.style.backgroundColor = "var(--orange)";
      
      select = optBtn.textContent
      console.log(select) 
      if (select == 1) { 
        console.log("case one selected");
        var x = document.createElement("img");
        x.setAttribute("src", "img_pulpit.jpg");
       
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);  
        }
      else if(select == 2)
      { console.log("2nd case");
      document.getElementById("img").src = "https://raw.githubusercontent.com/hejkeikei/interactive-rating-component/16de82dee8e9299ac78d332cc3b5480da9bf435c/images/icon-star.svg";
    }   

      
      let sib = getSiblings(optBtn);
      // console.log(sib);
      for (let i in sib) {
        console.log(sib[i]);
        sib[i].style.backgroundColor = "var(--mediumGreyOp)";
      }
    });
  }
        

        
  var userValue = document.querySelector(".userValue");
  var submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function () {
    event.preventDefault();
    userValue.innerHTML = userInput;
    console.log("Usersays: " + userInput);
    let pop = document.getElementById("thankYou");
    pop.style.display = "block";
    rating.style.display = "none";
  });