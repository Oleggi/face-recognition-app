import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "c69e928a6db04595b20c5558cc601034",
});

export const clarifaiAPI = {
  getRecognitionData(imageUrl) {
    return app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
      .then((response) => {
        return response.outputs[0].data.regions[0].region_info.bounding_box;
      },

      function (err) {
        console.log(err);
      }
    );
  },
};
