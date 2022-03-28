import React from 'react';
import "../scss/flight.scss";

const PageTitle = (props) => {
  return (
    <h2 className="display-6 text-center pad-b">
        {props.pageTitle}
    </h2>
  )
}

export default PageTitle;
