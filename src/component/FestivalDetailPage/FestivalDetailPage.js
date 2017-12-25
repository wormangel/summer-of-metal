import React from 'react';
import globalFestivalData from '../../util/data.js';

const FestivalDetailPage = (props) => {
  const festivalId = props.match.params.festivalId;

  const festivalData = globalFestivalData[festivalId];
  const poster = require(`../../assets/img/posters/${festivalData.poster}`)

  return (
    <div>
      <h1>
        {festivalData.name}
      </h1>
      <img src={poster} alt={festivalData.name} />
    </div>
  );
}

export default FestivalDetailPage;
