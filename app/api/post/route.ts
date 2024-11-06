export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!process.env.SLACK_WEBHOOK) {
            return new Response("Slack webhook URL is not defined", {
                status: 500,
            });
        }

        const response = await fetch(process.env.SLACK_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            return new Response("Slack API error", { status: response.status });
        }

        return new Response("Message sent", { status: 200 });
    } catch (error) {
        return new Response("Error sending message", { status: 500 });
    }
}

export async function GET(request: Request) {
    return new Response("GET request");
}
