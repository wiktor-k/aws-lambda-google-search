Google Search in AWS Lambda
===========================

A simple example of using [Web Platform APIs](https://github.com/wiktor-k/aws-lambda-web) to do a Google Search in AWS Lambda.

To do a local test use:

    npm install
	npm run event

The input data is in `event.json` file.

Slack slash command
-------------------

This lambda function can also be used as a Slack [Slash command](https://api.slack.com/slash-commands) but because
Slack sends URL-encoded data in HTTP requests an [additional configuration](https://gist.githubusercontent.com/ryanray/668022ad2432e38493df/raw/a3b8c765791ac6cfc15811a5dcb2d97056adc107/aws-api-gateway-form-to-json.ftl)
in [API Gateway](https://aws.amazon.com/api-gateway/) is needed.

See [Serverless Slack Integrations with node.js, AWS Lambda, and AWS API Gateway](http://www.ryanray.me/serverless-slack-integrations) for details.
