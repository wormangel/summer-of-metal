import React, {Component} from 'react';
import globalFestivalData from '../../util/data.js';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class FestivalCarrousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      festivals: ["wacken", "hellfest", "metaldays", "partysan", "graspop"],
      currentFestival: 0
    };
    this.goToNextFestival = this.goToNextFestival.bind(this);
    this.goToPreviousFestival = this.goToPreviousFestival.bind(this);
  }

  render() {
    let festivalData = globalFestivalData[this.state.festivals[this.state.currentFestival]];
    let poster = require(`../../assets/img/posters/${festivalData.poster}`);
    return (
      <Grid fluid={true} style={{backgroundColor: festivalData.bgColor}}>
        <Row>
          <Col xs={12}>
            <h1 style={{color: "white"}}>
              {festivalData.name}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <div className="left-nav-section">
              <span className="left-nav-button" onClick={this.goToPreviousFestival} style={{verticalAlign: "center"}}>◀</span>
            </div>
          </Col>
          <Col xs={10}>
            <div className="carrousel-contents">
              <img src={poster} alt={festivalData.name}  style={{maxWidth: "100%", height: "auto"}} />
            </div>
          </Col>
          <Col xs={1}>
            <div className="right-nav-section">
              <span className="right-nav-button" onClick={this.goToNextFestival}>▶</span>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

  setupCarrousel(event) {
    switch( event.keyCode ) {
      case 37:
        this.goToPreviousFestival();
        break;
      case 39:
        this.goToNextFestival();
        break;
      default:
        break;
    }
  }

  goToNextFestival() {
    const nextFestival = this.state.currentFestival === this.state.festivals.length - 1 ? 0 : this.state.currentFestival + 1;
    this.setState({currentFestival: nextFestival});
  }

  goToPreviousFestival() {
    const nextFestival = this.state.currentFestival > 0 ? this.state.currentFestival - 1 : this.state.festivals.length - 1;
    this.setState({currentFestival: nextFestival});
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
