document.addEventListener("DOMContentLoaded", function() {
     var customButton = document.getElementById("custom");
     var randButton = document.getElementById("random");
     var input = document.getElementById("input");
     var studentId = document.getElementById("studentId");
     var body = document.querySelector("body");
 
     
     var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
     var select = document.createElement("select");
     select.id = "imageSelect"; 
     body.appendChild(select);

     function changeBackgroundColor(value) {
          if(value < 0 || value > 100) body.style.backgroundColor = "red";
          else if(value <= 20) body.style.backgroundColor = "green";
          else if(value <= 40) body.style.backgroundColor = "blue";
          else if(value <= 60) body.style.backgroundColor = "orange";
          else if(value <= 80) body.style.backgroundColor = "purple";
          else body.style.backgroundColor = "yellow";
      }

      customButton.addEventListener("click", () => {
          var value = parseInt(input.value, 10);
          studentId.textContent = "200556157"; 
          changeBackgroundColor(value);
      });
  
     
      randButton.addEventListener("click", () => {
          var randomValue = Math.floor(Math.random() * 101); 
          changeBackgroundColor(randomValue);
      });
 
     images.forEach(function(img) {
         var option = document.createElement("option");
         option.value = img;
         option.textContent = img;
         select.appendChild(option);
     });
 
     var imgContainer;
     if (!document.getElementById("imgContainer")) {
         imgContainer = document.createElement("img");
         imgContainer.id = "imgContainer";
         imgContainer.style.display = "none"; 
         body.appendChild(imgContainer);
     } else {
         imgContainer = document.getElementById("imgContainer");
     }
 
     select.addEventListener("change", function() {
         imgContainer.src = "./img/" + this.value;
         imgContainer.style.display = "block"; 
     });
 });
 