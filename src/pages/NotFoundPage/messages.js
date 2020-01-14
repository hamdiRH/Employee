import { defineMessages } from "react-intl";
export const scope = "app.components.NotFoundPage";
export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "404 We Couldn't Find This Page"
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: "Back to home"
  }
});
