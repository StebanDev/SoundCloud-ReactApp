import React from 'react';
import ExternalIcon from '../../icons/external-link';
import './external-link.css';

const ExternalLink = props => (
  <div className="ExternalLink">
    <a href={props.url} target="_blank">
      <ExternalIcon
        color="white"
        size={40}
        viewBox="0 0 511.626 511.627"
      />
    </a>
  </div>
);

export default ExternalLink;
