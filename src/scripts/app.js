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

  let select = state.element.parentNode;
  let placeholderText = select.getAttribute('data-placeholder');

  console.log(select);

  let $state = $(
    `<span class="Select_iconWrapper"><span class="Select_placeholderText">${placeholderText}</span><img src="${state.element.dataset.icon}" class="Select_icon" /><span class="Select_text">${state.text}</span></span>`
  );

  return $state;
}

$(() => {
  select2($);

  $('.Select-languages').select2({
    dropdownCssClass: 'Select Select-dropdownLanguages',
    selectionCssClass: 'Select Select-selection',
    theme: 'languages',
    templateResult: formatStateResult,
    templateSelection: formatStateSelection,
    // dropdownAutoWidth: true,
    minimumResultsForSearch: -1
  });

  $('.Select-currencies').select2({
    dropdownCssClass: 'Select Select-dropdownCurrencies',
    selectionCssClass: 'Select Select-selection Select-currenciesSelection',
    theme: 'currencies',
    templateResult: formatStateResult,
    templateSelection: formatStateSelection,
    // dropdownAutoWidth: true,
    minimumResultsForSearch: -1
  });

  const currencySwiper = new Swiper('.CurrencySwiper', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    spaceBetween: 30,

    breakpoints: {
      768: {
        spaceBetween: 39
      }
    }
  });

  const advantagesSwiper = new Swiper('.AdvantagesSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,

    breakpoints: {
      768: {
        spaceBetween: 36
      }
    }
  });

  const statisticsSwiper = new Swiper('.StatisticsSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,

    breakpoints: {
      768: {
        spaceBetween: 34
      }
    }
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
