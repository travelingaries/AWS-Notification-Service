import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "ap-northeast-2" });

async function sendMail(event, context) {
  const params = {
    Source: "aries@travelingaries.com",
    Destination: {
      ToAddresses: ["aries@travelingaries.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Codingly!",
        },
      },
      Subject: {
        Data: "Test Mail",
      },
    },
  };
  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
