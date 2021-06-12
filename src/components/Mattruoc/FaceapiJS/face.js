import * as faceapi from 'face-api.js';

const maxDescriptorDistance = 0.5;

export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
  await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
  await faceapi.loadFaceRecognitionModel(MODEL_URL);
  await faceapi.loadFaceExpressionModel(MODEL_URL);
  await faceapi.loadAgeGenderModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
  // tiny_face_detector options
  let scoreThreshold = 0.5;
  const OPTION = new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
  const useTinyModel = true;

  // fetch image to api
  let img = await faceapi.fetchImage(blob);

  // detect all faces and generate full description from image including landmark
  // and descriptor of each face
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceExpressions()
    .withAgeAndGender()
    .withFaceDescriptors();
  return fullDesc;
}

export async function createMatcher(faceProfile) {
  // Create labeled descriptors of member from profile
  let members = Object.keys(faceProfile);
  let labeledDescriptors = await members.map(member => new faceapi.LabeledFaceDescriptors(faceProfile[member].name, faceProfile[member].descriptors.map(descriptor => new Float32Array(descriptor))));

  // Create face matcher (maximum descriptor distance is 0.5)
  let faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, maxDescriptorDistance);
  return faceMatcher;
}

export function isFaceDetectionModelLoaded() {
  return !!faceapi.nets.tinyFaceDetector.params;
}
export async function getDataBlink(blob, inputSize = 512) {
  try {
    // tiny_face_detector options
    let scoreThreshold = 0.3;
    const OPTION = new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
    const useTinyModel = true;

    // fetch image to api
    let img = await faceapi.fetchImage(blob);

    // detect all faces and generate full description from image detect blink
    let fullDesc = await faceapi
      .detectAllFaces(img, OPTION)
      .withFaceLandmarks(useTinyModel);
    const A = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getLeftEye()[1]
        ._x,
      fullDesc[0]
        .landmarks
        .getLeftEye()[1]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getLeftEye()[5]
          ._x,
        fullDesc[0]
          .landmarks
          .getLeftEye()[5]
          ._y
      ]);
    const B = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getLeftEye()[2]
        ._x,
      fullDesc[0]
        .landmarks
        .getLeftEye()[2]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getLeftEye()[4]
          ._x,
        fullDesc[0]
          .landmarks
          .getLeftEye()[4]
          ._y
      ]);
    const C = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getLeftEye()[0]
        ._x,
      fullDesc[0]
        .landmarks
        .getLeftEye()[0]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getLeftEye()[3]
          ._x,
        fullDesc[0]
          .landmarks
          .getLeftEye()[3]
          ._y
      ]);
    let EAR;
    EAR = (A + B) / (2 * C);
    return EAR;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataBlink2(blob, inputSize = 512) {
  try {
    // tiny_face_detector options
    let scoreThreshold = 0.3;
    const OPTION = new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
    const useTinyModel = true;

    // fetch image to api
    let img = await faceapi.fetchImage(blob);

    // detect all faces and generate full description from image detect blink
    let fullDesc = await faceapi
      .detectAllFaces(img, OPTION)
      .withFaceLandmarks(useTinyModel);
    const A = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getRightEye()[1]
        ._x,
      fullDesc[0]
        .landmarks
        .getRightEye()[1]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getRightEye()[5]
          ._x,
        fullDesc[0]
          .landmarks
          .getRightEye()[5]
          ._y
      ]);
    const B = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getRightEye()[2]
        ._x,
      fullDesc[0]
        .landmarks
        .getRightEye()[2]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getRightEye()[4]
          ._x,
        fullDesc[0]
          .landmarks
          .getRightEye()[4]
          ._y
      ]);
    const C = faceapi.euclideanDistance([
      fullDesc[0]
        .landmarks
        .getRightEye()[0]
        ._x,
      fullDesc[0]
        .landmarks
        .getRightEye()[0]
        ._y
    ], [
        fullDesc[0]
          .landmarks
          .getRightEye()[3]
          ._x,
        fullDesc[0]
          .landmarks
          .getRightEye()[3]
          ._y
      ]);
    let EAR;
    EAR = (A + B) / (2 * C);
    return EAR;
  } catch (error) {
    console.log(error);
  }
}