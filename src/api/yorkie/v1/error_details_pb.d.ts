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

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 *
 * @generated from message google.rpc.BadRequest
 */
export declare class BadRequest extends Message<BadRequest> {
  /**
   * Describes all violations in a client request.
   *
   * @generated from field: repeated google.rpc.BadRequest.FieldViolation field_violations = 1;
   */
  fieldViolations: BadRequest_FieldViolation[];

  constructor(data?: PartialMessage<BadRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.rpc.BadRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BadRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BadRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BadRequest;

  static equals(a: BadRequest | PlainMessage<BadRequest> | undefined, b: BadRequest | PlainMessage<BadRequest> | undefined): boolean;
}

/**
 * A message type used to describe a single bad request field.
 *
 * @generated from message google.rpc.BadRequest.FieldViolation
 */
export declare class BadRequest_FieldViolation extends Message<BadRequest_FieldViolation> {
  /**
   * A path that leads to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field.
   *
   * Consider the following:
   *
   *     message CreateContactRequest {
   *       message EmailAddress {
   *         enum Type {
   *           TYPE_UNSPECIFIED = 0;
   *           HOME = 1;
   *           WORK = 2;
   *         }
   *
   *         optional string email = 1;
   *         repeated EmailType type = 2;
   *       }
   *
   *       string full_name = 1;
   *       repeated EmailAddress email_addresses = 2;
   *     }
   *
   * In this example, in proto `field` could take one of the following values:
   *
   * * `full_name` for a violation in the `full_name` value
   * * `email_addresses[1].email` for a violation in the `email` field of the
   *   first `email_addresses` message
   * * `email_addresses[3].type[2]` for a violation in the second `type`
   *   value in the third `email_addresses` message.
   *
   * In JSON, the same values are represented as:
   *
   * * `fullName` for a violation in the `fullName` value
   * * `emailAddresses[1].email` for a violation in the `email` field of the
   *   first `emailAddresses` message
   * * `emailAddresses[3].type[2]` for a violation in the second `type`
   *   value in the third `emailAddresses` message.
   *
   * @generated from field: string field = 1;
   */
  field: string;

  /**
   * A description of why the request element is bad.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  constructor(data?: PartialMessage<BadRequest_FieldViolation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.rpc.BadRequest.FieldViolation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BadRequest_FieldViolation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BadRequest_FieldViolation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BadRequest_FieldViolation;

  static equals(a: BadRequest_FieldViolation | PlainMessage<BadRequest_FieldViolation> | undefined, b: BadRequest_FieldViolation | PlainMessage<BadRequest_FieldViolation> | undefined): boolean;
}

