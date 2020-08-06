import actionTypes from "./image-action-types"

const loadImage = () => ({
    type: actionTypes.LOAD,
})

const setImages = (images) => ({
    type: actionTypes.LOAD_SUCCESS,
    payload:images
})

const setError = (error) => ({
    type: actionTypes.LOAD_FAIL,
    payload:error
})
export default { loadImage, setImages, setError }