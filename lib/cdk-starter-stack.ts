import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 lambda function definition
    const lambdaFunction = new lambda.Function(this, 'lambda-function', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.main',
      code: lambda.Code.fromAsset(path.join(__dirname, '/../src/my-lambda')),
      // 👇 set Log Retention in Days
      logRetention: logs.RetentionDays.ONE_DAY,
    });
  }
}
