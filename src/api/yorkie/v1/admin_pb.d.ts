//
// Copyright 2022 The Yorkie Authors. All rights reserved.
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

// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts,js_import_style=legacy_commonjs"
// @generated from file src/api/yorkie/v1/admin.proto (package yorkie.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Change, DocumentSummary, Project, UpdatableProjectFields, User } from "./resources_pb.js";

/**
 * @generated from message yorkie.v1.SignUpRequest
 */
export declare class SignUpRequest extends Message<SignUpRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<SignUpRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.SignUpRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpRequest;

  static equals(a: SignUpRequest | PlainMessage<SignUpRequest> | undefined, b: SignUpRequest | PlainMessage<SignUpRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.SignUpResponse
 */
export declare class SignUpResponse extends Message<SignUpResponse> {
  /**
   * @generated from field: yorkie.v1.User user = 1;
   */
  user?: User;

  constructor(data?: PartialMessage<SignUpResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.SignUpResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignUpResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignUpResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignUpResponse;

  static equals(a: SignUpResponse | PlainMessage<SignUpResponse> | undefined, b: SignUpResponse | PlainMessage<SignUpResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.LogInRequest
 */
export declare class LogInRequest extends Message<LogInRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<LogInRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.LogInRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogInRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogInRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogInRequest;

  static equals(a: LogInRequest | PlainMessage<LogInRequest> | undefined, b: LogInRequest | PlainMessage<LogInRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.LogInResponse
 */
export declare class LogInResponse extends Message<LogInResponse> {
  /**
   * @generated from field: string token = 1;
   */
  token: string;

  constructor(data?: PartialMessage<LogInResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.LogInResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogInResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogInResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogInResponse;

  static equals(a: LogInResponse | PlainMessage<LogInResponse> | undefined, b: LogInResponse | PlainMessage<LogInResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.CreateProjectRequest
 */
export declare class CreateProjectRequest extends Message<CreateProjectRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<CreateProjectRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.CreateProjectRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectRequest;

  static equals(a: CreateProjectRequest | PlainMessage<CreateProjectRequest> | undefined, b: CreateProjectRequest | PlainMessage<CreateProjectRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.CreateProjectResponse
 */
export declare class CreateProjectResponse extends Message<CreateProjectResponse> {
  /**
   * @generated from field: yorkie.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<CreateProjectResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.CreateProjectResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProjectResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProjectResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProjectResponse;

  static equals(a: CreateProjectResponse | PlainMessage<CreateProjectResponse> | undefined, b: CreateProjectResponse | PlainMessage<CreateProjectResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetProjectRequest
 */
export declare class GetProjectRequest extends Message<GetProjectRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<GetProjectRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetProjectRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProjectRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProjectRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProjectRequest;

  static equals(a: GetProjectRequest | PlainMessage<GetProjectRequest> | undefined, b: GetProjectRequest | PlainMessage<GetProjectRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetProjectResponse
 */
export declare class GetProjectResponse extends Message<GetProjectResponse> {
  /**
   * @generated from field: yorkie.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<GetProjectResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetProjectResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProjectResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProjectResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProjectResponse;

  static equals(a: GetProjectResponse | PlainMessage<GetProjectResponse> | undefined, b: GetProjectResponse | PlainMessage<GetProjectResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListProjectsRequest
 */
export declare class ListProjectsRequest extends Message<ListProjectsRequest> {
  constructor(data?: PartialMessage<ListProjectsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListProjectsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectsRequest;

  static equals(a: ListProjectsRequest | PlainMessage<ListProjectsRequest> | undefined, b: ListProjectsRequest | PlainMessage<ListProjectsRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListProjectsResponse
 */
export declare class ListProjectsResponse extends Message<ListProjectsResponse> {
  /**
   * @generated from field: repeated yorkie.v1.Project projects = 1;
   */
  projects: Project[];

  constructor(data?: PartialMessage<ListProjectsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListProjectsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListProjectsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListProjectsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListProjectsResponse;

  static equals(a: ListProjectsResponse | PlainMessage<ListProjectsResponse> | undefined, b: ListProjectsResponse | PlainMessage<ListProjectsResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.UpdateProjectRequest
 */
export declare class UpdateProjectRequest extends Message<UpdateProjectRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: yorkie.v1.UpdatableProjectFields fields = 2;
   */
  fields?: UpdatableProjectFields;

  constructor(data?: PartialMessage<UpdateProjectRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.UpdateProjectRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectRequest;

  static equals(a: UpdateProjectRequest | PlainMessage<UpdateProjectRequest> | undefined, b: UpdateProjectRequest | PlainMessage<UpdateProjectRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.UpdateProjectResponse
 */
export declare class UpdateProjectResponse extends Message<UpdateProjectResponse> {
  /**
   * @generated from field: yorkie.v1.Project project = 1;
   */
  project?: Project;

  constructor(data?: PartialMessage<UpdateProjectResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.UpdateProjectResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateProjectResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateProjectResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateProjectResponse;

  static equals(a: UpdateProjectResponse | PlainMessage<UpdateProjectResponse> | undefined, b: UpdateProjectResponse | PlainMessage<UpdateProjectResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListDocumentsRequest
 */
export declare class ListDocumentsRequest extends Message<ListDocumentsRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string previous_id = 2;
   */
  previousId: string;

  /**
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  /**
   * @generated from field: bool is_forward = 4;
   */
  isForward: boolean;

  /**
   * @generated from field: bool include_snapshot = 5;
   */
  includeSnapshot: boolean;

  constructor(data?: PartialMessage<ListDocumentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListDocumentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDocumentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDocumentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDocumentsRequest;

  static equals(a: ListDocumentsRequest | PlainMessage<ListDocumentsRequest> | undefined, b: ListDocumentsRequest | PlainMessage<ListDocumentsRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListDocumentsResponse
 */
export declare class ListDocumentsResponse extends Message<ListDocumentsResponse> {
  /**
   * @generated from field: repeated yorkie.v1.DocumentSummary documents = 1;
   */
  documents: DocumentSummary[];

  constructor(data?: PartialMessage<ListDocumentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListDocumentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListDocumentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListDocumentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListDocumentsResponse;

  static equals(a: ListDocumentsResponse | PlainMessage<ListDocumentsResponse> | undefined, b: ListDocumentsResponse | PlainMessage<ListDocumentsResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetDocumentRequest
 */
export declare class GetDocumentRequest extends Message<GetDocumentRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string document_key = 2;
   */
  documentKey: string;

  constructor(data?: PartialMessage<GetDocumentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetDocumentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDocumentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDocumentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDocumentRequest;

  static equals(a: GetDocumentRequest | PlainMessage<GetDocumentRequest> | undefined, b: GetDocumentRequest | PlainMessage<GetDocumentRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetDocumentResponse
 */
export declare class GetDocumentResponse extends Message<GetDocumentResponse> {
  /**
   * @generated from field: yorkie.v1.DocumentSummary document = 1;
   */
  document?: DocumentSummary;

  constructor(data?: PartialMessage<GetDocumentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetDocumentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDocumentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDocumentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDocumentResponse;

  static equals(a: GetDocumentResponse | PlainMessage<GetDocumentResponse> | undefined, b: GetDocumentResponse | PlainMessage<GetDocumentResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.RemoveDocumentByAdminRequest
 */
export declare class RemoveDocumentByAdminRequest extends Message<RemoveDocumentByAdminRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string document_key = 2;
   */
  documentKey: string;

  /**
   * @generated from field: bool force = 3;
   */
  force: boolean;

  constructor(data?: PartialMessage<RemoveDocumentByAdminRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.RemoveDocumentByAdminRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDocumentByAdminRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDocumentByAdminRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDocumentByAdminRequest;

  static equals(a: RemoveDocumentByAdminRequest | PlainMessage<RemoveDocumentByAdminRequest> | undefined, b: RemoveDocumentByAdminRequest | PlainMessage<RemoveDocumentByAdminRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.RemoveDocumentByAdminResponse
 */
export declare class RemoveDocumentByAdminResponse extends Message<RemoveDocumentByAdminResponse> {
  constructor(data?: PartialMessage<RemoveDocumentByAdminResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.RemoveDocumentByAdminResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDocumentByAdminResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDocumentByAdminResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDocumentByAdminResponse;

  static equals(a: RemoveDocumentByAdminResponse | PlainMessage<RemoveDocumentByAdminResponse> | undefined, b: RemoveDocumentByAdminResponse | PlainMessage<RemoveDocumentByAdminResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetSnapshotMetaRequest
 */
export declare class GetSnapshotMetaRequest extends Message<GetSnapshotMetaRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string document_key = 2;
   */
  documentKey: string;

  /**
   * @generated from field: int64 server_seq = 3 [jstype = JS_STRING];
   */
  serverSeq: string;

  constructor(data?: PartialMessage<GetSnapshotMetaRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetSnapshotMetaRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSnapshotMetaRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSnapshotMetaRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSnapshotMetaRequest;

  static equals(a: GetSnapshotMetaRequest | PlainMessage<GetSnapshotMetaRequest> | undefined, b: GetSnapshotMetaRequest | PlainMessage<GetSnapshotMetaRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.GetSnapshotMetaResponse
 */
export declare class GetSnapshotMetaResponse extends Message<GetSnapshotMetaResponse> {
  /**
   * @generated from field: bytes snapshot = 1;
   */
  snapshot: Uint8Array;

  /**
   * @generated from field: int64 lamport = 2 [jstype = JS_STRING];
   */
  lamport: string;

  constructor(data?: PartialMessage<GetSnapshotMetaResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.GetSnapshotMetaResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSnapshotMetaResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSnapshotMetaResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSnapshotMetaResponse;

  static equals(a: GetSnapshotMetaResponse | PlainMessage<GetSnapshotMetaResponse> | undefined, b: GetSnapshotMetaResponse | PlainMessage<GetSnapshotMetaResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.SearchDocumentsRequest
 */
export declare class SearchDocumentsRequest extends Message<SearchDocumentsRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string query = 2;
   */
  query: string;

  /**
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  constructor(data?: PartialMessage<SearchDocumentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.SearchDocumentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchDocumentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchDocumentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchDocumentsRequest;

  static equals(a: SearchDocumentsRequest | PlainMessage<SearchDocumentsRequest> | undefined, b: SearchDocumentsRequest | PlainMessage<SearchDocumentsRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.SearchDocumentsResponse
 */
export declare class SearchDocumentsResponse extends Message<SearchDocumentsResponse> {
  /**
   * @generated from field: int32 total_count = 1;
   */
  totalCount: number;

  /**
   * @generated from field: repeated yorkie.v1.DocumentSummary documents = 2;
   */
  documents: DocumentSummary[];

  constructor(data?: PartialMessage<SearchDocumentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.SearchDocumentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchDocumentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchDocumentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchDocumentsResponse;

  static equals(a: SearchDocumentsResponse | PlainMessage<SearchDocumentsResponse> | undefined, b: SearchDocumentsResponse | PlainMessage<SearchDocumentsResponse> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListChangesRequest
 */
export declare class ListChangesRequest extends Message<ListChangesRequest> {
  /**
   * @generated from field: string project_name = 1;
   */
  projectName: string;

  /**
   * @generated from field: string document_key = 2;
   */
  documentKey: string;

  /**
   * @generated from field: int64 previous_seq = 3 [jstype = JS_STRING];
   */
  previousSeq: string;

  /**
   * @generated from field: int32 page_size = 4;
   */
  pageSize: number;

  /**
   * @generated from field: bool is_forward = 5;
   */
  isForward: boolean;

  constructor(data?: PartialMessage<ListChangesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListChangesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListChangesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListChangesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListChangesRequest;

  static equals(a: ListChangesRequest | PlainMessage<ListChangesRequest> | undefined, b: ListChangesRequest | PlainMessage<ListChangesRequest> | undefined): boolean;
}

/**
 * @generated from message yorkie.v1.ListChangesResponse
 */
export declare class ListChangesResponse extends Message<ListChangesResponse> {
  /**
   * @generated from field: repeated yorkie.v1.Change changes = 1;
   */
  changes: Change[];

  constructor(data?: PartialMessage<ListChangesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "yorkie.v1.ListChangesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListChangesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListChangesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListChangesResponse;

  static equals(a: ListChangesResponse | PlainMessage<ListChangesResponse> | undefined, b: ListChangesResponse | PlainMessage<ListChangesResponse> | undefined): boolean;
}

