import { contacts, emailContents } from "./schema";
import { lantern, number, text, date, json } from ".";

const admin = lantern()
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
      subject: text().label("Email Subject").maxLength(100),
    },
    async beforeCreate(ctx) {},
  })
  .generate();

console.log(admin);
