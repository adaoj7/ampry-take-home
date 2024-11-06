import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="">
          <h1 className="">Submit your information!</h1>
          <h3 className="">
            Please fill out the form below to submit your information.
          </h3>
        </div>
        {/* Form */}
        <div className="">
          <InputForm />
        </div>
      </Container>
    </Section>
  );
}
