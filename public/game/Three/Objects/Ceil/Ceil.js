import threeFactory from '../../ThreeFactory/ThreeFactory';
import Objects from '../Objects/Objects';
import textureLoader from '../../../Manager/LoaderManager/LoaderManager';

export default class Ceil extends Objects {
  constructor(length) {
    super();

    this._length = length;

    this._initGeometry();
  }

  _setGeometry(...settings) {
    this._geometry = threeFactory.cubeGeometry(this._length, 10, this._length);
  }

  _setMaterial() {
    this._material = threeFactory.meshBasicMaterial({
      map: textureLoader.load('/static/gameSource/ceil.jpeg')
    });
  }
}
