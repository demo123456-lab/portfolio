import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.progressText}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f1f1f1',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '4px solid #ccc',
    borderTop: '4px solid #f1f1f1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  progressText: {
    fontSize: 14,
    fontWeight: 800,
    marginTop: 20,
  },
};

// Add CSS animation for spinner
const spinnerStyle = document.createElement('style');
spinnerStyle.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(spinnerStyle);

export default Loader;
