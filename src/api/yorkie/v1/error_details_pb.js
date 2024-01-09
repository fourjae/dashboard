// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// NOTE(chacha912): This code is based on the protobuf definitions from the file located at:
// https://buf.build/googleapis/googleapis/file/main:google/rpc/error_details.proto.
// The protobuf definitions are compiled into an SDK, which can be installed via npm.
// (SDK Source: https://buf.build/googleapis/googleapis/sdks/main)
//
// However, during testing, we encountered an error due to the use of ESM import/export syntax.
// To address this issue, we use the 'js_import_style=legacy_commonjs' option and manually build
// the protobuf, rather than using the SDK directly.
// (For more details, refer to: https://github.com/bufbuild/protobuf-es/issues/587)

// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts,js_import_style=legacy_commonjs"
// @generated from file src/api/yorkie/v1/error_details.proto (package google.rpc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");

/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 *
 * @generated from message google.rpc.BadRequest
 */
const BadRequest = proto3.makeMessageType(
  "google.rpc.BadRequest",
  () => [
    { no: 1, name: "field_violations", kind: "message", T: BadRequest_FieldViolation, repeated: true },
  ],
);

/**
 * A message type used to describe a single bad request field.
 *
 * @generated from message google.rpc.BadRequest.FieldViolation
 */
const BadRequest_FieldViolation = proto3.makeMessageType(
  "google.rpc.BadRequest.FieldViolation",
  () => [
    { no: 1, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "BadRequest_FieldViolation"},
);


exports.BadRequest = BadRequest;
exports.BadRequest_FieldViolation = BadRequest_FieldViolation;
