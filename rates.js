$("#calc").click(function() {
  var data = $('form').serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});
  var totalPremium;
  if (data['borough'] == 'Bronx') {
  totalPremium = getPremiumBronx(data)
  } else {
  totalPremium = getPremiumOther(data)
  }
  hideForm();
  showSheet(totalPremium);
});

var getPremiumBronx = function(data) {
  var propertyPremium = (data['building-value'] / 100) * .19
  var liabilityPremium = (data['units'] * 550)
  return propertyPremium + liabilityPremium
}

var getPremiumOther = function(data) {
  var propertyPremium = (data['building-value'] / 100) * .16
  var liabilityPremium = (data['units'] * 350)
  return propertyPremium + liabilityPremium
}

var hideForm = function() {
$('.rate-form').hide();
}

var showSheet = function(totalPremium) {
$('.rate-sheet').show();
$('#premium').html('$' + totalPremium);
}
