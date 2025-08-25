import React from 'react';
import './Blocks.css';

const size = 12;

// Single unit cube; adjustable via CSS variables
export const OneBlock = ({ color = '#0290ee', count = 1, border = 1 }) => {
  const wrapperClass = count > 1 ? 'blocks-column' : 'blocks-row';
  return (
    <div className={`${wrapperClass} mr-2 z-3 one-group`} style={{ '--size': `${size}px`, '--color': color }}>
      {Array.from({ length: count }, (_, idx) => (
        <div
          key={idx}
          className="one-block mb-1"
          style={{
            '--size': `${size}px`,
            '--color': color,
            '--border': `${border}px`,
            '--border-radius': `${0.5}px`,
            '--z': 100 - idx,
            ...(count > 1
              ? { '--margin-top': '0px', '--margin-right': '0px' }
              : { '--margin-top': '2px', '--margin-right': '20px' }),
          }}
        >
          {null}
        </div>
      ))}
    </div>
  );
};

// Column of ten unit cubes; zero spacing between cubes
export const TenBlock = ({ color = '#ee021a', border = 1, count = 1 }) => {
  return (
    <div className="blocks-row blocks-row--nowrap z-2">
      {Array.from({ length: count }, (_, col) => (
        <div
          key={col}
          className="blocks-column mr-1 ten-column"
          style={{ '--size': `${size}px`, '--color': color }}
        >
          {Array.from({ length: 10 }, (_, row) => (
            <div
              key={row}
              className="one-block"
              style={{
                '--size': `${size}px`,
                '--color': color,
                '--border': `${border}px`,
                '--border-radius': `${0.5}px`,
                '--z': 100 - row,
                '--margin-top': '0px',
                '--margin-right': '0px',
              }}
            >
              {null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// 10x10 grid of unit cubes; zero spacing; composed of 10 TenBlocks side by side
export const HundredBlock = ({ color = '#00cd00', border = 1, count = 1 }) => {
  const layerOffsetX = Math.round(size * 0.5); // shift right per layer
  const layerOffsetY = Math.round(size * -0.5); // shift up per layer
  return (
    <div className="hundreds-stack">
      {Array.from({ length: count }, (_, layerIdx) => (
        <div
          key={layerIdx}
          className={layerIdx === 0 ? 'hundred-layer hundred-layer--base' : 'hundred-layer'}
          style={{
            '--dx': `${layerIdx * layerOffsetX}px`,
            '--dy': `${layerIdx * layerOffsetY}px`,
            zIndex: 1000 - layerIdx,
            '--size': `${size}px`,
            '--color': color,
          }}
        >
          <div className="blocks-grid">
            {Array.from({ length: 10 }, (_, rowIdx) => (
              <div key={rowIdx} className="blocks-row blocks-row--nowrap">
                {Array.from({ length: 10 }, (_, colIdx) => (
                  <div
                    key={colIdx}
                    className="one-block"
                    style={{
                      '--size': `${size}px`,
                      '--color': color,
                      '--border': `${border}px`,
                      '--border-radius': `${0.5}px`,
                      '--z': `${(9 - rowIdx) * 10 + colIdx}`,
                      '--margin-top': '0px',
                      '--margin-right': '0px',
                    }}
                  >
                    {null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
