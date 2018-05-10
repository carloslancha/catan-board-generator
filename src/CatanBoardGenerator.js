'use strict';

import {Config} from 'metal-state';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './CatanBoardGenerator.soy.js';

import './components/LandTile';
import './components/Ship';

import './catan-board-generator.scss';

class CatanBoardGenerator extends Component {
    _handleShipSelectedMaterialChange(event, facade) {
        const id = facade.target.id;
        const value = event.delegateTarget.value;

        this.ships[id] = value;

        this.ships = this.ships;
    }

    _handleTileSelectedProbabilityChange(event, facade) {
        const id = facade.target.id;
        let value = event.delegateTarget.value;

        if (value != '') {
            value = parseInt(value);
        }
        else {
            value = null;
        }

        if (!this.tiles[id]) {
            this.tiles[id] = {};
        }

        this.tiles[id].probability = value;

        this.tiles = this.tiles;
    }

    _handleTileSelectedTypeChange(event, facade) {
        const id = facade.target.id;
        const value = event.delegateTarget.value;

        if (!this.tiles[id]) {
            this.tiles[id] = {};
        }

        this.tiles[id].type = value;

        this.tiles = this.tiles;
    }
}

CatanBoardGenerator.STATE = {
    ships: Config.array().value([]),

    tiles: Config.object().value({}),
};

Soy.register(CatanBoardGenerator, templates);

export { CatanBoardGenerator };
export default CatanBoardGenerator;
