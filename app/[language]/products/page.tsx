import sendgrid from "@sendgrid/mail";


async function Products() {
    const { SG_API_KEY, FROM_MAIL, TO_MAIL } = process.env;
    if (process.env.SG_API_KEY) {
        sendgrid.setApiKey(process.env.SG_API_KEY);
        console.log("setted api key");
        if (process.env.TO_MAIL && process.env.FROM_MAIL) {
            console.log("deeper");
            try {
                await sendgrid.send({
                    to: process.env.TO_MAIL,
                    from: process.env.FROM_MAIL, // your website email address here
                    subject: `Test`,
                    html: `<div>You've got a mail</div>`,
                });
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <>
            <span> Mail Send </span>
        </>
    )
}

export default Products;