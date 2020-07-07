import React from 'react';

export default function Story({ children, actor }) {
  return (
    <div>
      <p style={{marginBottom: '4px'}}>
        <span className="story-actor">{actor}:</span>
        {children}
      </p>
    </div>
  );
}
