import React from 'react';

const FestivalDetailPage = (props) => {
  const festivalId = props.match.params.festivalId;
  return (
    <div>
      This is the festival <strong>{festivalId}</strong>
    </div>
  );
}

export default FestivalDetailPage;
