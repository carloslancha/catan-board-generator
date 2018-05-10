'use strict';

import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Ship.soy.js';

import './ship.scss';

class Ship extends Component {
    _handleMaterialChange(event) {
        this.emit('selectedMaterialChanged', event);
    }
}

Ship.STATE = {
    id: Config.string().required(),

    material: Config.oneOf([
        'any', 'brick', 'grain', 'lumber', 'ore', 'wool',
    ]),
};

Soy.register(Ship, templates);

export { Ship };
export default Ship;
