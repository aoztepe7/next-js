export default function WelcomeEmail() {
    return (
        <html>
            <section style={main}>
                <div className="container" style={container}>
                    <label style={heading}> Hi There !</label>
                    <label style={paragraph}> Welcome to our app!</label>
                </div>
            </section>

        </html>
    );
}

// Styles for the email template
const main = {
    backgroundColor: "#ffffff",
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
};

const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
};

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
};