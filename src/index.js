/**
 *  Application starting point.
 *
 */
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/** To remove console logs from Production build */
if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
  console.trace = () => {};
}

/**
 *  React dom gets the root element from  /public/index.js file
 *  and renders the react UI.
 *
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

const Base = () => {
  return <App />;
};

root.render(<Base />);

/**
 *
 *  To measure any of the supported metrics, you only need to pass a function
 *  into the reportWebVitals function reportWebVitals(console.log);
 *
 *  Example:
 *  ```function sendToAnalytics({ id, name, value }) {
 *         //Send email implementation
 *     }
 *
 *     reportWebVitals(sendToAnalytics); ```
 *
 *  This function is fired when the final values for any of the metrics
 *  have finished calculating on the page. You can use it to log any of the
 *  results to the console or send to a particular endpoint.
 *
 */
reportWebVitals();
