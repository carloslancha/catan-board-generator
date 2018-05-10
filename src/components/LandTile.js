'use strict';

import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './LandTile.soy.js';

import './land-tile.scss';

class LandTile extends Component {
    _handleProbabilityChange(event) {
        this.emit('selectedProbabilityChanged', event);
    }

    _handleTypeChange(event) {
        this.emit('selectedTypeChanged', event);
    }
}

LandTile.STATE = {
    eligible: Config.bool().value(false),

    id: Config.string().required(),

    probability: Config.number(),

    type: Config.oneOf([
        'desert', 'fields', 'forest', 'hills', 'mountains', 'pasture'
    ]),
};

Soy.register(LandTile, templates);

export { LandTile };
export default LandTile;
