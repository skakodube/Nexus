import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "637c816a851a495ba3109f2b9cf14e4c",
  },
});
