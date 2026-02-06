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

interface WelcomeProps {
  customerName: string
}

export default function Welcome({
  customerName = "Max Mustermann",
}: WelcomeProps) {
  return (
    <Html lang="de">
      <Head />
      <Body style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#f5f5f7" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Heading as="h1">Willkommen bei Nagel Paul!</Heading>
          <Text>Hallo {customerName},</Text>
          <Text>
            herzlich willkommen bei Nagel Paul – Ihrem Fachhändler für
            Befestigungstechnik seit über 40 Jahren.
          </Text>
          <Section>
            <Heading as="h2">Was wir für Sie tun können</Heading>
            <Text>
              Ob Sie Zimmerer, Dachdecker, Trockenbauer oder ambitionierter
              Heimwerker sind – wir haben das passende Werkzeug und die richtigen
              Befestigungsmittel für Ihr Projekt.
            </Text>
            <Text>
              Entdecken Sie auch unser{" "}
              <Link href="https://nagel-paul.de/lignoloc">
                LignoLoc Holznagel-Sortiment
              </Link>{" "}
              – die nachhaltige Alternative zu Stahlnägeln.
            </Text>
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
