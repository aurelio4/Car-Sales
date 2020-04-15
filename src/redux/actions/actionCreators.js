import actionTypes from './actionTypes'

export const removeFeature = (featureId) => ({ type: actionTypes.REMOVE_FEATURE, payload: featureId })
export const addFeature = (featureId) => ({ type: actionTypes.ADD_FEATURE, payload: featureId })