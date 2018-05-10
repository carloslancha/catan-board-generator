/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from LandTile.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace LandTile.
 * @public
 */

goog.module('LandTile.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  eligible: (boolean|null|undefined),
 *  probability: (null|number|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  opt_data = opt_data || {};
  /** @type {boolean|null|undefined} */
  var eligible = soy.asserts.assertType(opt_data.eligible == null || (goog.isBoolean(opt_data.eligible) || opt_data.eligible === 1 || opt_data.eligible === 0), 'eligible', opt_data.eligible, 'boolean|null|undefined');
  /** @type {null|number|undefined} */
  var probability = soy.asserts.assertType(opt_data.probability == null || goog.isNumber(opt_data.probability), 'probability', opt_data.probability, 'null|number|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var tileAttributes__soy100 = function() {
    incrementalDom.attr('class', 'land-tile' + (type ? ' ' + type : ''));
    if (probability) {
      incrementalDom.attr('prob', probability);
    }
  };
  incrementalDom.elementOpenStart('span');
      tileAttributes__soy100();
  incrementalDom.elementOpenEnd();
    if (eligible) {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('class', 'selectors');
      incrementalDom.elementOpenEnd();
        incrementalDom.elementOpenStart('select');
            incrementalDom.attr('data-onchange', '_handleTypeChange');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', '');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('None');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'desert');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Desert');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'fields');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Fields');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'forest');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Forest');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'hills');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Hills');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'mountains');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Mountains');
          incrementalDom.elementClose('option');
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', 'pasture');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('Pasture');
          incrementalDom.elementClose('option');
        incrementalDom.elementClose('select');
        incrementalDom.elementOpen('br');
        incrementalDom.elementClose('br');
        incrementalDom.elementOpenStart('select');
            incrementalDom.attr('data-onchange', '_handleProbabilityChange');
        incrementalDom.elementOpenEnd();
          incrementalDom.elementOpenStart('option');
              incrementalDom.attr('value', '');
          incrementalDom.elementOpenEnd();
            incrementalDom.text('None');
          incrementalDom.elementClose('option');
          for (var index120 = 1; index120 < 13; index120++) {
            incrementalDom.elementOpenStart('option');
                incrementalDom.attr('value', index120);
            incrementalDom.elementOpenEnd();
              soyIdom.print(index120);
            incrementalDom.elementClose('option');
          }
        incrementalDom.elementClose('select');
      incrementalDom.elementClose('div');
    }
  incrementalDom.elementClose('span');
}
exports.render = $render;
/**
 * @typedef {{
 *  eligible: (boolean|null|undefined),
 *  probability: (null|number|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'LandTile.render';
}

exports.render.params = ["eligible","probability","type"];
exports.render.types = {"eligible":"bool","probability":"number","type":"string"};
templates = exports;
return exports;

});

class LandTile extends Component {}
Soy.register(LandTile, templates);
export { LandTile, templates };
export default templates;
/* jshint ignore:end */
