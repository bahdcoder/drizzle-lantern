import Express from "express";
import {
  lantern,
  number,
  text,
  json,
  date,
} from "@repo/drizzle-lantern";
import { lanternExpressAdapter } from "@repo/drizzle-lantern/express";
const app = Express();

import { contacts, emailContents } from "./schema";

lanternExpressAdapter(app, {
  lantern: lantern()
    .resource(contacts, {
      label: "Contacts",
      fields: {
        id: number().readOnly(),
        firstName: text()
          .label("First Name")
          .default(() => "Mr Man")
          .sortable(),
        lastName: text().label("Last Name").sortable(),
        email: text().label("Email Address").readOnly(),
        subscribedAt: date()
          .label("Subscribed At")
          .format("YYYY-MM-DD"),
        attributes: json().hidden(),
      },
      async beforeCreate(ctx) {},
      async beforeUpdate(ctx) {},
    })
    .resource(emailContents, {
      label: "Email Contents",
      fields: {
        id: number().readOnly(),
        fromName: text().label("From Name"),
        fromEmail: text().label("From Email Address"),
        subject: text()
          .label("Email Subject")
          .maxLength(100),
      },
      async beforeCreate(ctx) {},
    })
    .generate(),
});

const PORT =
  process.env.ADAPTER_EXPRESS_EXAMPLE_PORT || 3111;

app.listen(PORT, () => {
  console.log(
    `Listening to port ${PORT} for adapter express example.`
  );
});
