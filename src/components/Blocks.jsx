import React from 'react';

// Single unit cube
export const OneBlock = ({ size = 20, color = '#4a90e2' }) => {
  return (
    <div 
      className="one-block"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.2)',
        display: 'inline-block',
        position: 'relative',
        marginRight: `${size * 0.3}px`,
        marginTop: `${size * 0.3}px`
      }}
    >
      {/* Top face */}
      <div style={{
        position: 'absolute',
        top: `-${size * 0.35}px`,
        left: '-1px',
        width: `${size}px`,
        height: `${size * 0.3}px`,
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.2)',
        transform: 'skewX(-45deg)',
        transformOrigin: 'bottom left',
        filter: 'brightness(1.2)'
      }} />
      {/* Right face */}
      <div style={{
        position: 'absolute',
        top: '-1.1px',
        right: `-${size * 0.35}px`,
        width: `${size * 0.3}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.2)',
        transform: 'skewY(-45deg)',
        transformOrigin: 'bottom left',
        filter: 'brightness(0.8)'
      }} />
    </div>
  );
};

// Rod of 10 unit cubes
export const TenBlock = ({ size = 20, color = '#e74c3c' }) => {
  const cubes = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className="cube-in-rod"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.2)',
        display: 'block',
        position: 'relative'
      }}
    >
      {/* Top face - only on the top cube (first cube) */}
      {i === 0 && (
        <div style={{
          position: 'absolute',
          top: `-${size * 0.35}px`,
          left: '-1px',
          width: `${size}px`,
          height: `${size * 0.3}px`,
          backgroundColor: color,
          border: '1px solid rgba(0,0,0,0.2)',
          transform: 'skewX(-45deg)',
          transformOrigin: 'bottom left',
          filter: 'brightness(1.2)'
        }} />
      )}
      {/* Right face - on all cubes */}
      <div style={{
        position: 'absolute',
        top: '-1.1px',
        right: `-${size * 0.35}px`,
        width: `${size * 0.3}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: '1px solid rgba(0,0,0,0.2)',
        transform: 'skewY(-45deg)',
        transformOrigin: 'bottom left',
        filter: 'brightness(0.8)'
      }} />
    </div>
  ));

  return (
    <div 
      className="ten-block"
      style={{
        display: 'inline-block',
        position: 'relative',
        marginRight: `${size * 0.3}px`,
        marginTop: `${size * 0.3}px`
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {cubes}
      </div>
    </div>
  );
};

// Flat square of 100 unit cubes (10x10)
export const HundredBlock = ({ size = 20, color = '#27ae60' }) => {
  const rows = Array.from({ length: 10 }, (_, rowIndex) => (
    <div key={rowIndex} style={{ display: 'flex' }}>
      {Array.from({ length: 10 }, (_, colIndex) => (
        <div
          key={colIndex}
          className="cube-in-hundred"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            border: '1px solid rgba(0,0,0,0.2)',
            position: 'relative'
          }}
        >
          {/* Top face - only on top row */}
          {rowIndex === 0 && (
            <div style={{
              position: 'absolute',
              top: `-${size * 0.35}px`,
              left: '-1px',
              width: `${size}px`,
              height: `${size * 0.3}px`,
              backgroundColor: color,
              border: '1px solid rgba(0,0,0,0.2)',
              transform: 'skewX(-45deg)',
              transformOrigin: 'bottom left',
              filter: 'brightness(1.2)'
            }} />
          )}
          {/* Right face - only on rightmost column */}
          {colIndex === 9 && (
            <div style={{
              position: 'absolute',
              top: '-1.1px',
              right: `-${size * 0.35}px`,
              width: `${size * 0.3}px`,
              height: `${size}px`,
              backgroundColor: color,
              border: '1px solid rgba(0,0,0,0.2)',
              transform: 'skewY(-45deg)',
              transformOrigin: 'bottom left',
              filter: 'brightness(0.8)'
            }} />
          )}
        </div>
      ))}
    </div>
  ));

  return (
    <div 
      className="hundred-block"
      style={{
        display: 'inline-block',
        position: 'relative',
        marginRight: `${size * 3}px`,
        marginTop: `${size * 0.3}px`
      }}
    >
      {rows}
    </div>
  );
};
