var count = 0;

$(document).ready(function () {

  $('.create').on ("click", createbuttons)
  $('.container').on('click', '.delete', deleteClick);
  $('.container').on("click", '.change', change);
  totalClick();
});

function createbuttons () {
  count++;
  $('.container').append('<div class = "new-container" ></div>');
  var $el = $('.container').children().last();
  $el.append('<button class = "delete">Delete</button>');
  $el.append('<button class = "change">Change</button>');
  totalClick();

console.log(count);
}

function deleteClick () {
  $(this).parent().children().remove();
}

function totalClick () {
  $(".clicked").text("You have clicked: "+ count);
}


function change() {
  $(this).parent().toggleClass("highlight");
}
