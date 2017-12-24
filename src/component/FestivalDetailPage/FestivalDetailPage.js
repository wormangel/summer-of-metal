import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const FestivalDetailPage = (props) => {
  const festivalId = props.match.params.festivalId;

  // TODO Move this!
  const globalFestivalData = {
    "wacken": {
      "name": "Wacken Open Air",
      "poster": "csm_woa_18_poster_bands_logos_23122017_72dpi_288bf5e98f.jpg"
    }
  };

  const festivalData = globalFestivalData[festivalId];
  const poster = require(`../../assets/img/posters/${festivalData.poster}`)

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography>
          {festivalData.name}
        </Typography>
        <img src={poster} alt={festivalData.name} />
      </Grid>
    </Grid>
  );
}

export default FestivalDetailPage;
