import React from 'react';

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <span>{props.root}</span>
      <span>{props.slash}</span>
      <span>{props.parent}</span>
      <span>{props.slash}</span>
      <span>{props.children}</span>
    </div>
  )
}

export default Breadcrumb;
