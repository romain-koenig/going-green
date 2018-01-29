/**
 * Created by ninie on 18/12/2017.
 */
/**
 * PagesController
 *
 * @description :: Controller description
 */


var settingsTable = {
  selectedLang :  'en',
  selectedSystem : 'metric',
  selectedTheme:  'default'
};

// ---- helpers for changing languages

function saveLanguage(req, res) { // when called via route.js, save the new language in the object
  settingsTable.selectedLang = req.session.newLanguage
}

function updateLanguage(req) {
  if(req.query.newLanguage) { // a new language value has been passed via javascript client side then routes, then here
    //console.log('new lang: ', req.query.newLanguage);
    settingsTable.selectedLang = req.query.newLanguage
  }
  req.setLocale(settingsTable.selectedLang); // overrides so update the lang attribute for the html tag
}

// ---- rendering the pages

function index(req, res) {
  updateLanguage(req);
  res.view('pages/index', {settingsTable: settingsTable});
}

function design(req, res) {
  updateLanguage(req);
  res.view('pages/design', {settingsTable: settingsTable});
}

function about(req, res) {
  updateLanguage(req);
  res.view('pages/about', {settingsTable: settingsTable});
}


function empty(req, res) {
  updateLanguage(req);
  res.view('pages/empty_page' , {settingsTable: settingsTable});
}

function settings(req, res) {
  updateLanguage(req);
  res.view('pages/settings', {settingsTable: settingsTable});
}


module.exports = { // only those who can be called from route.js
  index: index,
  about: about,
  design: design,
  empty: empty,
  settings: settings
};
