import { getContact } from "@/lib/content";
import EnquirySection from "@/components/sections/EnquirySection";

export default async function ContactPage() {
  const contact = await getContact();

  return <EnquirySection contact={contact} showMap />;
}
