import React, {Component} from 'react';
import globalFestivalData from '../../util/data.js';

class FestivalCarrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      festivals: ["wacken", "hellfest", "metaldays", "partysan", "graspop"],
      currentFestival: 0
    };
  }

  render() {
    let festivalData = globalFestivalData[this.state.festivals[this.state.currentFestival]];
    let poster = require(`../../assets/img/posters/${festivalData.poster}`);
    return (
      <div>
        <h1>
          {festivalData.name}
        </h1>
        <img src={poster} alt={festivalData.name} />
      </div>
    );
  }

  setupCarrousel(event) {
    var nextFestival = 0;
    switch( event.keyCode ) {
      case 37:
        nextFestival = this.state.currentFestival > 0 ? this.state.currentFestival - 1 : this.state.festivals.length - 1;
        this.setState({currentFestival: nextFestival});
        break;
      case 39:
        nextFestival = this.state.currentFestival === this.state.festivals.length - 1 ? 0 : this.state.currentFestival + 1;
        this.setState({currentFestival: nextFestival});
        break;
      default:
        break;
    }
  }

  componentWillMount() {
    //BannerDataStore.addChangeListener(this._onchange);
    document.addEventListener("keydown", this.setupCarrousel.bind(this));
  }

  componentWillUnmount() {
    //BannerDataStore.removeChangeListener(this._onchange);
    document.removeEventListener("keydown", this.setupCarrousel.bind(this));
  }
}

export default FestivalCarrousel;
