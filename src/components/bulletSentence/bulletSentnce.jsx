import React from 'react';

export default function BulletSentence({ children, keyword }) {
  return (
    <p style={{ fontSize: '22px', margin: '0' }}>
      <span
        style={{
          backgroundColor: '#0090d9',
          borderRadius: '6px',
          margin: '0',
          paddingLeft: '6px',
          paddingRight: '6px',
          color: 'white',
          paddingBottom: '2px',
        }}
      >
        {keyword}:
      </span>{' '}
      {children}
    </p>
  );
}
