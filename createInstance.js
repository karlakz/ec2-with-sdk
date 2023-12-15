const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "AKIATOD7HUZYCAISWOF3",
  secretAccessKey: "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",
  region: "us-east-1",
});

const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

const instanceParams = {
  ImageId: "ami-0c7217cdde317cfec", // Ubuntu Jammy 22.04
  InstanceType: "t2.micro",
  KeyName: "demo-key",
  MinCount: 1,
  MaxCount: 1,
};

const instancePromise = ec2.runInstances(instanceParams).promise();

// Handle promise's fulfilled and rejected states

instancePromise
  .then(function (data) {
    console.log(data);
    const instanceId = data.Instances[0].InstanceId;
    console.log("Created instance: ", instanceId);
  })
  .catch(function (err) {
    console.log(err, err.stack);
  });
