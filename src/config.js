const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51ITldEAXNIqYFT6p98NGr6s8dBD7cw1s8OzkGlv7OxqxehInJ7mImX9jUjiH8TXL8cXCI6zZhNFjTDhZE7kEmpZk00ch6A8pkI",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-hwsu",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://uh9r51iywc.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eweYhIQS8",
    APP_CLIENT_ID: "4schq3aqsrqm8viurj8q89f91b",
    IDENTITY_POOL_ID: "us-east-1:e15fbae2-d897-4c32-9d0c-5f70e1e00da9",
  },
};

export default config;
