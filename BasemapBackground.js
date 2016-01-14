import React from 'react'

// REFERENCE: keys taken from Object.keys(window.esri.basemaps) and configured with hand-picked values
export let colorDict = {
  'streets': '#B5DAED',
  'satellite': '#06193A',
  'hybrid': '#06193A',
  'terrain': '#7ADCDB',
  'topo': '#B7E3FE',
  'gray': '#D0CFD4',
  'dark-gray': '#222327',
  'oceans': '#87ACD9',
  'national-geographic': '#83B6E1',
  'osm': '#B5D0D0'
}

export let defaultStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  transition: '.5s background-color'
}

export const BasemapBackground = ({ defaultBasemap, map }) => {
  let basemap = map !== undefined ? map.getBasemap() : defaultBasemap || 'topo'
  let backgroundColor = colorDict[basemap]
  if (backgroundColor === undefined) { throw new Error(`Specified basemap '${basemap}' could not be matched in colorDict, if this is a custom basemap please add its name and color to the colorDict before initializing this component.`) }
  let style = Object.assign({ backgroundColor }, defaultStyle)

  return (
    <div className='basemap-background' style={style} />
  )
}

BasemapBackground.propTypes = {
  defaultBasemap: React.PropTypes.string,
  map: React.PropTypes.object
}

export { BasemapBackground as default }
