import React from 'react';

const FestivalDetailPage = (props) => {
  const festivalId = props.match.params.festivalId;

  // TODO Move this!
  const globalFestivalData = {
    "wacken": {
      "poster": "csm_woa_18_poster_bands_logos_23122017_72dpi_288bf5e98f.jpg"
    }
  };

  const festivalData = globalFestivalData[festivalId];
  const poster = require(`../../assets/img/posters/${festivalData.poster}`)

  return (
    <div>
      This is the festival <strong>{festivalId}</strong>
      <img src={poster} />
    </div>
  );
}

export default FestivalDetailPage;
