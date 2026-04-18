/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
import axios from "axios";

async function fetchModel(url) {
  try {
    const response = await axios.get(url);
    console.log(">> check response", response);

    const models = response.data.data;
    return models;
  } catch (error) {
    throw error;
  }
}

export default fetchModel;
