document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var x = document.querySelector("#reset-field input");
  x.value = ""
})

document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var e = document.querySelector("#validate-field input");
  var valid = e.value;
  var display = document.querySelector(".flash-message");
console.log(valid.length)
  if ( valid.length < 6){
    display.textContent = "Input no log enough";
    display.classList.remove("valid");
    display.classList.add('invalid');
    }else if (valid.length >= 6){
    display.textContent = "field valid";
    display.classList.remove("invalid");
    display.classList.add('valid');
    }

})


document.querySelector("#calculate-items button").addEventListener('click',function(){

  var sum = 0;
  var pesito = "$ "

  document.querySelectorAll('.cars-list input').forEach(function(list){
    if(list.checked === true){
      var round = Math.round;
      var sub = round(list.value);
      console.log(sub)
      sum += sub;
    }
  })
  document.querySelector('.sum-total').textContent = pesito + sum;
})



document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4

  var cars = document.getElementsByClassName('selection');
  var text= cars[0].options[cars[0].selectedIndex];
  model = text.getAttribute('value')
  msrp =text.getAttribute('data-msrp')
  mpg = text.getAttribute('data-mpg')
  er = text.getAttribute('data-edmunds')
  img = (text.getAttribute('data-img'))
  document.querySelector('.model').textContent = model;
  document.querySelector('.msrp').textContent = msrp;
  document.querySelector('.mpg').textContent = mpg;
  document.querySelector('.edmunds').textContent = er;
    var elementExists = document.querySelector(".img-box img");
    if(elementExists){
        elementExists.setAttribute("src", "./images/"+img);
    }else {
      console.log("no existe")
        parent.innerHTML = '';
        var image = document.createElement("img");
        image.setAttribute("src", "./images/"+img);
        var imageParent = document.querySelector(".img-box");
        imageParent.appendChild(image);
    }
 });
