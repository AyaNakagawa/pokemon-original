// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
 
// snippet-start:[s3.JavaScript.buckets.createclientv3]
import { S3Client } from "@aws-sdk/client-s3";
// This relies on a Region being set up in your local AWS config.
 
import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import { ProxyAgent } from "proxy-agent";
 
const agent = new ProxyAgent();
const s3Client = new S3Client({
  requestHandler: new NodeHttpHandler({
    httpAgent: agent,
    httpsAgent: agent,
  }),
});
 
//const client = new S3Client({});
export default s3Client;
// snippet-end:[s3.JavaScript.buckets.createclientv3]
 
 