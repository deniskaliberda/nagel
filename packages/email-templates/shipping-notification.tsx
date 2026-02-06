import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Hr,
} from "@react-email/components"

interface ShippingNotificationProps {
  orderNumber: string
  customerName: string
  trackingNumber: string
  trackingUrl: string
  carrier: string
}

export default function ShippingNotification({
  orderNumber = "NP-2024-001",
  customerName = "Max Mustermann",
  trackingNumber = "123456789",
  trackingUrl = "https://www.dhl.de/de/privatkunden/pakete-empfangen/verfolgen.html",
  carrier = "DHL",
}: ShippingNotificationProps) {
  return (
    <Html lang="de">
      <Head />
      <Body style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#f5f5f7" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Heading as="h1">Ihre Bestellung ist unterwegs!</Heading>
          <Text>Hallo {customerName},</Text>
          <Text>
            Ihre Bestellung <strong>{orderNumber}</strong> wurde versandt.
          </Text>
          <Section>
            <Heading as="h2">Sendungsverfolgung</Heading>
            <Text>
              Versanddienstleister: {carrier}
              <br />
              Sendungsnummer: {trackingNumber}
            </Text>
            <Link href={trackingUrl}>Sendung verfolgen</Link>
          </Section>
          <Hr />
          <Text style={{ color: "#6b7280", fontSize: "12px" }}>
            Nagel Paul – JPS GmbH &amp; Co. KG | Ihr Fachhandel für Befestigungstechnik
          </Text>
        </Container>
      </Body>
    </Html>
  )
}
