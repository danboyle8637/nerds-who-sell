import { ContactView } from "../src/views/Contact";
import { Seo } from "../src/Seo";
import { seo } from "../src/Seo/data";

const Contact = () => (
  <>
    <Seo title={seo.contact.title} description={seo.contact.description} />
    <ContactView />
  </>
);

export default Contact;
