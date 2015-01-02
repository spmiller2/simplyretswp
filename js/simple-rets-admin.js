/*
 * 
 * simple-rets-admin.js
 * Javascript for the admin functionality of the Simple Rets plugin.
 * Copyright (c) Reichert Brothers 2014
 * 
 */


jQuery(function() {

  console.log("This is simple-rets-admin.js");

  // create jquery objects for all of our different input boxes
  var minPriceFilterInput = jQuery('#sr-min-price-span');
  var maxPriceFilterInput = jQuery('#sr-max-price-span');
  var minBedFilterInput   = jQuery('#sr-min-bed-span');
  var maxBedFilterInput   = jQuery('#sr-max-bed-span');
  var minBathFilterInput  = jQuery('#sr-min-bath-span');
  var maxBathFilterInput  = jQuery('#sr-max-bath-span');
  var agentFilterInput    = jQuery('#sr-listing-agent-span');

  var filterArea      = jQuery('.current-filters');
  var filterSelectBox = jQuery('#sr-filter-select');
  filterSelectBox.change(function() {

    console.log('filter select box changed');
    var filterVal = filterSelectBox.val();

    // when a new filter is selected, show the input box and remove the
    // option from the dropdown menu
    switch(filterVal) {
      case "Minimum Price":
          filterArea.append(minPriceFilterInput);
          minPriceFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Maximum Price":
          filterArea.append(maxPriceFilterInput);
          maxPriceFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Minimum Beds":
          filterArea.append(minBedFilterInput);
          minBedFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Maximum Beds":
          filterArea.append(maxBedFilterInput);
          maxBedFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Minimum Bathrooms":
          filterArea.append(minBathFilterInput);
          minBathFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Maximum Bathrooms":
          filterArea.append(maxBathFilterInput);
          maxBathFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      case "Listing Agent":
          filterArea.append(agentFilterInput);
          agentFilterInput.show();
          jQuery(this).find("option:selected").remove();
          break;
      default:
          break;
    }

    console.log(filterVal);

  });

  jQuery('.sr-remove-filter').click(function() {
      console.log('remove button cliked');
      jQuery(this).parent('.sr-filter-input').hide();
      jQuery(this).prev('input').val("");
  });

});
