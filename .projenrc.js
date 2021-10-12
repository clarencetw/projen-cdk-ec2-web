const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.120.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-ec2-web',
  minNodeVersion: '14.17.6',

  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
  },

  cdkDependencies: [
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-autoscaling',
    '@aws-cdk/aws-s3-assets',
  ],
  deps: [
    'source-map-support',
  ],
});
const common_exclude = ['cdk.context.json'];
project.gitignore.exclude(...common_exclude);
project.synth();
