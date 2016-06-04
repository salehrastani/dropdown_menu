var listOfCampgrounds = [
  {
    'title': 'Tahoe',
    'submenu': null
  },
  {
    'title': 'Death Valley',
    'submenu': null
  },
  {
    'title': 'Yosemite',
    'submenu': [
      {
        'title': 'Curry Village',
        'submenu': null
      },
      {
        'title': 'Redbud',
        'submenu': null
      },
      {
        'title': 'North Pines',
        'submenu': [
          {
            'title': '101',
            'submenu': null
          },
          {
            'title': '137',
            'submenu': null
          },
          {
            'title': '290',
            'submenu': null
          }
        ]
      }
    ]
  }
];



var source   = $("#dropdown-menu").html();
var template = Handlebars.compile(source);

$('body').append(template(listOfCampgrounds));

$('.menu-item').click(function(event){
  event.stopPropagation();
  alert(event.currentTarget.firstElementChild.innerHTML)
});


//$( ".menu-item" ).hover(
//  function() {
//    $(this).children("ul:first").css('display', 'inline-block')
//  }, function(){
//    $(this).children("ul:first").css('display', 'none')
//  }
//);