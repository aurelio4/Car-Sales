import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.ADD_FEATURE:
      const findFeatureToBeAdded = state.additionalFeatures.find(element => element.id === action.payload)
      // set only stores unique elements, but isn't an array, so array.from converts set to array. array -> set -> array
      const features = Array.from(new Set([...state.car.features, findFeatureToBeAdded]))
      const addedPrice = state.additionalPrice + findFeatureToBeAdded.price
      return {
        ...state,
        additionalPrice: addedPrice,
        car: {...state.car, features }
      }
    case actionTypes.REMOVE_FEATURE:
      const findFeatureToBeRemoved = state.additionalFeatures.find(element => element.id === action.payload)
      const removedFeature = state.car.features.filter(element => action.payload !== element.id)
      const removedPrice = state.additionalPrice - findFeatureToBeRemoved.price
      return {
        ...state,
        additionalPrice: removedPrice,
        car: {...state.car, features: removedFeature}
      }
    default:
      return state
  }
}