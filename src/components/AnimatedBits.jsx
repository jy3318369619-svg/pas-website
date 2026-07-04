import React, { useCallback } from 'react';

export const SplitRevealText = ({
  as: Tag = 'span',
  text,
  className = '',
  style,
  delay = 0,
  step = 0.045
}) => {
  const words = text.split(' ');

  return (
    <Tag
      className={`split-reveal-text ${className}`.trim()}
      style={style}
      aria-label={text}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span
            aria-hidden="true"
            className="split-reveal-word"
            style={{
              animationDelay: `${delay + index * step}s`
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export const SpotlightCard = ({
  as: Tag = 'div',
  children,
  className = '',
  spotlightColor = 'rgba(0, 123, 255, 0.18)',
  style,
  onPointerMove,
  onPointerLeave,
  ...props
}) => {
  const handlePointerMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
    onPointerMove?.(event);
  }, [onPointerMove]);

  const handlePointerLeave = useCallback((event) => {
    event.currentTarget.style.setProperty('--spotlight-x', '50%');
    event.currentTarget.style.setProperty('--spotlight-y', '50%');
    onPointerLeave?.(event);
  }, [onPointerLeave]);

  return (
    <Tag
      className={`spotlight-card ${className}`.trim()}
      style={{
        '--spotlight-color': spotlightColor,
        ...style
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </Tag>
  );
};
