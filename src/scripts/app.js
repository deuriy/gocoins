// import { Example } from "./modules/example.js";

// new Example();

import $ from "jquery";
import select2 from 'select2';
import Swiper from 'swiper';

function formatStateResult(state) {
  if (!state.element || !state.element.dataset.icon) {
    return state.text;
  }

  console.log(state.element);

  let $state = $(
    `<span class="Select_iconWrapper"><img src="${state.element.dataset.icon}" class="Select_icon" /><span class="Select_text">${state.text}</span></span>`
  );

  return $state;
}

function formatStateSelection(state) {
  if (!state.element || !state.element.dataset.icon) {
    return state.text;
  }

  console.log(state.element);

  let $state = $(
    `<span class="Select_iconWrapper"><img src="${state.element.dataset.icon}" class="Select_icon" /></span>`
  );

  return $state;
}

$(() => {
  select2($);

  $('.Select').select2({
    dropdownCssClass: ':all:',
    selectionCssClass: ':all:',
    theme: 'custom',
    templateResult: formatStateResult,
    templateSelection: formatStateSelection,
    // dropdownAutoWidth: true,
    minimumResultsForSearch: -1
  });

  const currencySwiper = new Swiper('.CurrencySwiper', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    spaceBetween: 30,
  });

  const advantagesSwiper = new Swiper('.AdvantagesSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
  });

  const statisticsSwiper = new Swiper('.StatisticsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
  });

  $('.MenuHamburger').click(function(event) {
    $('.MobileNavigation').addClass('MobileNavigation-visible');
    $('body').css('overflow', 'hidden');

    event.preventDefault();
  });

  $('.MobileNavigation_closeBtn').click(function(event) {
    $(this).closest('.MobileNavigation').removeClass('MobileNavigation-visible');
    $('body').css('overflow', '');
    
    event.preventDefault();
  });

  $('.Tabs_list').each(function() {
    $(this).find('.Tabs_item').each(function(i) {
      $(this).click(function(e) {
        e.preventDefault();

        $(this).addClass('Tabs_item-active');
        $(this).siblings().removeClass('Tabs_item-active');

        const parent = $(this).parents('.Tabs');
        parent.find('.Tabs_content').hide();
        parent.find('.Tabs_content:eq(' + i + ')').show();
      });
    });
  });
});
