$(function() { 
  /* SETUP MULTI-LANGUAGE */
  var defaultLanguage = 'de';
  var lang = location.pathname.split("/")[1];
  var defaultClass = 'lang-'+defaultLanguage+'';
  var itemParent = "nav [class*='collection'],nav [class*='index'],nav [class*='group']";
  if (lang == "" || lang.length > 2 ){
    var lang = defaultLanguage;
  }

  /* ADD LANGUAGE CLASSES */
  $('a[href="/"]').addClass('lang-'+defaultLanguage+'').parents(itemParent).addClass('lang-'+defaultLanguage+'');
  $('nav a:link:not([href^="http://"]):not([href^="https://"])').each(function () {
    var langType = $(this).attr('href').split("/")[1];
    var multiLanguageClass = 'multilanguage lang-' + langType + '';
    if (undefined !== langType && langType.length <= 2) 
      $(this).addClass(multiLanguageClass).parents(itemParent).addClass(multiLanguageClass);
  });
  $('nav button').each(function () {
    var langTypeFolder = $(this).attr('data-controller-folder-toggle').split("/")[0];
    var multiLanguageClass = 'multilanguage lang-' + langTypeFolder + '';
    if (undefined !== langTypeFolder && langTypeFolder.length <= 2) 
      $(this).addClass(multiLanguageClass);
  });

  /* HOMEPAGE-LOGO LINKS TO PROPER LANGUAGE HOMEPAGE */
  if (lang == "en") {
    $('a[href="/"]').attr("href", "/en/home/");
    $('section[data-section-id="62e987fb82d80f6a17758622"], section[data-section-id="64386ccb98404827de512339"], section[data-section-id="64386ccdda6955528ae63b0e"]').remove();
     $('.header-nav-item--folder:not(".multilanguage") .header-nav-folder-title, .header-menu-nav-item:not(".multilanguage") span:not(".visually-hidden, .chevron")').text('English');
  }
  if (lang == "de") {
    $('a[href="/"]').attr("href", "/de/home/");
    $('section[data-section-id="64386ccb98404827de512339"], section[data-section-id="64386ccdda6955528ae63b0e"], section[data-section-id="64386cd085c3ce20f00f8259"]').remove();
    $('.header-nav-item--folder:not(".multilanguage") .header-nav-folder-title, .header-menu-nav-item:not(".multilanguage") span:not(".visually-hidden, .chevron")').text('Deutsch');
  }
  if (lang == "it") {
    $('a[href="/"]').attr("href", "/it/home/");
    $('section[data-section-id="62e987fb82d80f6a17758622"], section[data-section-id="64386ccb98404827de512339"], section[data-section-id="64386cd085c3ce20f00f8259"]').remove();
    $('.header-nav-item--folder:not(".multilanguage") .header-nav-folder-title, .header-menu-nav-item:not(".multilanguage") span:not(".visually-hidden, .chevron")').text('Italiano');
  }
  if (lang == "fr") {
    $('a[href="/"]').attr("href", "/fr/home/");
    $('section[data-section-id="62e987fb82d80f6a17758622"], section[data-section-id="64386ccdda6955528ae63b0e"], section[data-section-id="64386cd085c3ce20f00f8259"]').remove();
    $('.header-nav-item--folder:not(".multilanguage") .header-nav-folder-title, .header-menu-nav-item:not(".multilanguage") span:not(".visually-hidden, .chevron")').text('Français');
  }
  /* Language Switch Link*/
  var lanLink = window.location.href.replace(/^.*\/\/[^\/]+/, '');
  var lanSwt = $('.header-menu-nav-folder').last();
  $(lanSwt).find('.header-menu-nav-item a').addClass('exclude');
  console.log(lanSwt);
  if (lanLink != "/") {
  lanLink = lanLink.replace(/^.{4}/g, '');
 $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(0).attr('href', `/en/` + lanLink);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(1).attr('href', `/fr/` + lanLink);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(2).attr('href', `/de/` + lanLink);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(3).attr('href', `/it/` + lanLink);
 $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(0).attr('href', `/en/` + lanLink);
 $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(1).attr('href', `/fr/` + lanLink);
  $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(2).attr('href', `/de/` + lanLink);
  $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(3).attr('href', `/it/` + lanLink);
  }
  if (lanLink == "/") {
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(0).attr('href', `/en/home`);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(1).attr('href', `/fr/home`);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(2).attr('href', `/de/home`);
  $(`.header-nav-item--folder:not(".multilanguage") .header-nav-folder-item a`).eq(3).attr('href', `/it/home`);
 $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(0).attr('href', `/en/home`);
 $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(1).attr('href', `/fr/home`);
  $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(2).attr('href', `/de/home`);
  $(lanSwt).find(`.header-menu-nav-item:not(".header-menu-controls") a`).eq(3).attr('href', `/it/home`);
  }
  /* ADD EXCLUSION NAV ITEMS */
  $('.exclude-me,.exclude-me a').addClass('exclude');
  $('.sqs-svg-icon--list a,.SocialLinks-link, .header-nav-folder-item--external a').addClass('exclude');

  /* REMOVE OTHER LANGUAGES AND KEEP EXCLUDED ITEMS */
  $('.multilanguage:not(".lang-'+lang+',.exclude")').remove();
});
