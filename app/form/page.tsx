import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
    return (
        <Section>
            <Container>
                {/* Header */}
                <div className="flex flex-col gap-2 text-center mb-8">
                    <h1 className="text-2xl font-semibold">
                        Submit your information!
                    </h1>
                    <h3 className="text-xl">
                        Please fill out the form below to submit your
                        information.
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
