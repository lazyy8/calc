window.onload = function() {
    let form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
      let controls = this.querySelectorAll('.form-control');
      let isValid = true;
      controls.forEach(control => {
        control.classList.remove('invalid-control');
        if (control.classList.contains('required') && !control.value) {
          control.classList.add('invalid-control');
          isValid = false;
        }
      });
      
      if (!isValid) {
        event.preventDefault();
      }
    });
  }


  function calc() {
    //получаем ссылку на элемент Select
    var type_design = document.getElementById("type_design");
    //получаем ссылку на чекбокс
    var is_html = document.getElementById("is_html");
    //получаем ссылку на элемент input
    var count = document.getElementById("count");
    //получаем ссылку на элемент span, в него будем писать стоимость дизайна
    var result = document.getElementById("result"); 
    var price = 0;
    price += parseInt(type_design.options[type_design.selectedIndex].value);
    price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
    price = parseInt(count.value) * price;

    result.innerHTML = price;
}