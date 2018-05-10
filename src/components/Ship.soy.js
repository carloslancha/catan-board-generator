/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from Ship.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Ship.
 * @public
 */

goog.module('Ship.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  material: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  var $$temp;
  opt_data = opt_data || {};
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var material = soy.asserts.assertType(opt_data.material == null || (goog.isString(opt_data.material) || opt_data.material instanceof goog.soy.data.SanitizedContent), 'material', opt_data.material, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var shipClasses__soy249 = '';
  shipClasses__soy249 += 'ship';
  shipClasses__soy249 += elementClasses ? ' ' + elementClasses : '';
  incrementalDom.elementOpenStart('div');
      incrementalDom.attr('class', shipClasses__soy249);
  incrementalDom.elementOpenEnd();
    incrementalDom.elementOpenStart('select');
        incrementalDom.attr('data-onchange', '_handleMaterialChange');
    incrementalDom.elementOpenEnd();
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'any');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('3:1');
      incrementalDom.elementClose('option');
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'brick');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Brick');
      incrementalDom.elementClose('option');
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'lumber');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Lumber');
      incrementalDom.elementClose('option');
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'ore');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Ore');
      incrementalDom.elementClose('option');
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'sheep');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Sheep');
      incrementalDom.elementClose('option');
      incrementalDom.elementOpenStart('option');
          incrementalDom.attr('value', 'wheat');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Wheat');
      incrementalDom.elementClose('option');
    incrementalDom.elementClose('select');
    incrementalDom.elementOpenStart('span');
        incrementalDom.attr('class', ($$temp = material) == null ? 'any' : $$temp);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('span');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  material: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Ship.render';
}

exports.render.params = ["elementClasses","material"];
exports.render.types = {"elementClasses":"string","material":"string"};
templates = exports;
return exports;

});

class Ship extends Component {}
Soy.register(Ship, templates);
export { Ship, templates };
export default templates;
/* jshint ignore:end */
