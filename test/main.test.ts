import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { CdkEc2WebStack } from '../src/cdk-ec2-web-stack';

test('Snapshot', () => {
  const app = new App();
  const env = { region: 'us-east-1', account: '123456789012' };
  const stack = new CdkEc2WebStack(app, 'test', { env });

  expect(app.synth().getStackArtifact(stack.artifactId).template).toMatchSnapshot();
});