import React from 'react';

const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    height: 25,
    width: '100%',
    zIndex: 10000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    color: '#c8102e',
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
  unclassified: {
    color: '#ffffff',
    backgroundColor: '#000000',
  },
  confidential: {
    color: '#ffffff',
    backgroundColor: '#0033a0',
  },
  cui: {
    color: '#ffffff',
    backgroundColor: '#06a94d',
  },
  secret: {
    color: '#ffffff',
    backgroundColor: '#c8102e',
  },
  topsecret: {
    color: '#ffffff',
    backgroundColor: '#ff671f',
  },
  topsecret_sci: {
    color: '#000000',
    backgroundColor: '#f7ea48',
  },
}

const ClassificationBanner = (props) => {
  const { classification } = props
  const spaceRegex = / /g
  const slashRegex = /\/\//g
  const transformedClassification = classification.replace(spaceRegex, '').replace(slashRegex, '_').toLowerCase()

  let classificationStyle = ''
  if (transformedClassification.startsWith('unclassified')) {
    classificationStyle = 'unclassified'
  } else if (transformedClassification.startsWith('confidential')) {
    classificationStyle = 'confidential'
  } else if (transformedClassification.startsWith('cui')) {
    classificationStyle = 'cui'
  } else if (transformedClassification.startsWith('secret')) {
    classificationStyle = 'secret'
  } else if (transformedClassification.startsWith('topsecret_sci')) {
    classificationStyle = 'topsecret_sci'
  } else if (transformedClassification.startsWith('topsecret')) {
    classificationStyle = 'topsecret'
  }

  const topStyle = { ...styles.container, ...styles.top, ...styles[classificationStyle] }
  const bottomStyle = { ...styles.container, ...styles.bottom, ...styles[classificationStyle] }

  return (
    <div>
      <div style={topStyle}>{classification.toUpperCase()}</div>
      <div style={bottomStyle}>{classification.toUpperCase()}</div>
    </div>
  )
}

export default ClassificationBanner
