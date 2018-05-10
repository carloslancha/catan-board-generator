/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from CatanBoardGenerator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CatanBoardGenerator.
 * @public
 */

goog.module('CatanBoardGenerator.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('LandTile.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('Ship.incrementaldom', 'render');


/**
 * @param {{
 *  _handleShipSelectedMaterialChange: *,
 *  _handleTileSelectedProbabilityChange: *,
 *  _handleTileSelectedTypeChange: *,
 *  ships: (!Array<!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  tiles: (?)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {*} */
  var _handleShipSelectedMaterialChange = opt_data._handleShipSelectedMaterialChange;
  /** @type {*} */
  var _handleTileSelectedProbabilityChange = opt_data._handleTileSelectedProbabilityChange;
  /** @type {*} */
  var _handleTileSelectedTypeChange = opt_data._handleTileSelectedTypeChange;
  /** @type {!Array<!goog.soy.data.SanitizedContent|string>|null|undefined} */
  var ships = soy.asserts.assertType(opt_data.ships == null || goog.isArray(opt_data.ships), 'ships', opt_data.ships, '!Array<!goog.soy.data.SanitizedContent|string>|null|undefined');
  /** @type {?} */
  var tiles = opt_data.tiles;
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'logo');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('img');
          incrementalDom.attr('src', '/images/catanlogo.png');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('img');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'board');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('img');
          incrementalDom.attr('class', 'background');
          incrementalDom.attr('src', '/images/background.png');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('img');
      for (var rowNumber10 = 1; rowNumber10 < 6; rowNumber10++) {
        incrementalDom.elementOpenStart('div');
            incrementalDom.attr('class', 'row');
        incrementalDom.elementOpenEnd();
          var totalTiles__soy12 = rowNumber10 == 1 || rowNumber10 == 5 ? 3 : rowNumber10 == 2 || rowNumber10 == 4 ? 4 : 5;
          var tileNumber14Limit = totalTiles__soy12 + 1;
          for (var tileNumber14 = 1; tileNumber14 < tileNumber14Limit; tileNumber14++) {
            $templateAlias1({eligible: true, events: {selectedProbabilityChanged: _handleTileSelectedProbabilityChange, selectedTypeChanged: _handleTileSelectedTypeChange}, id: rowNumber10 + '-' + tileNumber14, probability: tiles[rowNumber10 + '-' + tileNumber14] ? tiles[rowNumber10 + '-' + tileNumber14].probability : null, type: tiles[rowNumber10 + '-' + tileNumber14] ? tiles[rowNumber10 + '-' + tileNumber14].type : null}, null, opt_ijData);
          }
        incrementalDom.elementClose('div');
      }
      for (var shipNumber25 = 0; shipNumber25 < 9; shipNumber25++) {
        $templateAlias2({elementClasses: 'ship-' + shipNumber25, events: {selectedMaterialChanged: _handleShipSelectedMaterialChange}, id: '' + shipNumber25, material: ships ? ships[shipNumber25] : null}, null, opt_ijData);
      }
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('class', 'name');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('textarea');
          incrementalDom.attr('placeholder', 'Board name');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('textarea');
    incrementalDom.elementClose('div');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  _handleShipSelectedMaterialChange: *,
 *  _handleTileSelectedProbabilityChange: *,
 *  _handleTileSelectedTypeChange: *,
 *  ships: (!Array<!goog.soy.data.SanitizedContent|string>|null|undefined),
 *  tiles: (?)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'CatanBoardGenerator.render';
}

exports.render.params = ["_handleShipSelectedMaterialChange","_handleTileSelectedProbabilityChange","_handleTileSelectedTypeChange","ships","tiles"];
exports.render.types = {"_handleShipSelectedMaterialChange":"any","_handleTileSelectedProbabilityChange":"any","_handleTileSelectedTypeChange":"any","ships":"list<string>","tiles":"?"};
templates = exports;
return exports;

});

class CatanBoardGenerator extends Component {}
Soy.register(CatanBoardGenerator, templates);
export { CatanBoardGenerator, templates };
export default templates;
/* jshint ignore:end */
