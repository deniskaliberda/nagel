import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components"

interface OrderConfirmationProps {
  orderNumber: string
  customerName: string
  items: {
    name: string
    quantity: number
    price: string
  }[]
  total: string
  shippingAddress: string
}

export default function OrderConfirmation({
  orderNumber = "NP-2024-001",
  customerName = "Max Mustermann",
  items = [{ name: "HiKOKI NR1890DBCL", quantity: 1, price: "599,00 €" }],
  total = "599,00 €",
  shippingAddress = "Musterstraße 1, 80331 München",
}: OrderConfirmationProps) {
  return (
    <Html lang="de">
      <Head />
      <Body style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#f5f5f7" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Heading as="h1">Bestellbestätigung</Heading>
          <Text>Hallo {customerName},</Text>
          <Text>
            vielen Dank für Ihre Bestellung bei Nagel Paul! Ihre Bestellnummer
            lautet: <strong>{orderNumber}</strong>
          </Text>
          <Hr />
          <Section>
            <Heading as="h2">Ihre Bestellung</Heading>
            {items.map((item, i) => (
              <Text key={i}>
                {item.quantity}x {item.name} – {item.price}
              </Text>
            ))}
            <Hr />
            <Text>
              <strong>Gesamt: {total}</strong> (inkl. MwSt.)
            </Text>
          </Section>
          <Section>
            <Heading as="h2">Lieferadresse</Heading>
            <Text>{shippingAddress}</Text>
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
