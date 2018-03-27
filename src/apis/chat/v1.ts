/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Hangouts Chat API
 *
 * Create bots and extend the new Hangouts Chat.
 *
 * @example
 * const google = require('googleapis');
 * const chat = google.chat('v1');
 *
 * @namespace chat
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Chat
 */
export class Chat {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  dms: Resource$Dms;
  rooms: Resource$Rooms;
  spaces: Resource$Spaces;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.dms = new Resource$Dms(this);
    this.rooms = new Resource$Rooms(this);
    this.spaces = new Resource$Spaces(this);
  }
}

/**
 * List of string parameters to supply when the action method is invoked. For
 * example, consider three snooze buttons: snooze now, snooze 1 day, snooze next
 * week. You might use action method = snooze(), passing the snooze type and
 * snooze time in the list of string parameters.
 */
export interface Schema$ActionParameter {
  /**
   * The name of the parameter for the action script.
   */
  key: string;
  /**
   * The value of the parameter.
   */
  value: string;
}
/**
 * Parameters that a bot can use to configure how it&#39;s response is posted.
 */
export interface Schema$ActionResponse {
  /**
   * The type of bot response.
   */
  type: string;
  /**
   * URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
   */
  url: string;
}
/**
 * Annotations associated with the plain-text body of the message.  Example
 * plain-text message body: ``` Hello @FooBot how are you!&quot; ```  The
 * corresponding annotations metadata: ``` &quot;annotations&quot;:[{
 * &quot;type&quot;:&quot;USER_MENTION&quot;,   &quot;startIndex&quot;:6,
 * &quot;length&quot;:7,   &quot;userMention&quot;: {     &quot;user&quot;: {
 * &quot;name&quot;:&quot;users/107946847022116401880&quot;,
 * &quot;displayName&quot;:&quot;FooBot&quot;,
 * &quot;avatarUrl&quot;:&quot;https://goo.gl/aeDtrS&quot;,
 * &quot;type&quot;:&quot;BOT&quot;     },
 * &quot;type&quot;:&quot;MENTION&quot;    } }] ```
 */
export interface Schema$Annotation {
  /**
   * Length of the substring in the plain-text message body this annotation
   * corresponds to.
   */
  length: number;
  /**
   * Start index (0-based, inclusive) in the plain-text message body this
   * annotation corresponds to.
   */
  startIndex: number;
  /**
   * The type of this annotation.
   */
  type: string;
  /**
   * The metadata of user mention.
   */
  userMention: Schema$UserMentionMetadata;
}
/**
 * A button. Can be a text button or an image button.
 */
export interface Schema$Button {
  /**
   * A button with image and onclick action.
   */
  imageButton: Schema$ImageButton;
  /**
   * A button with text and onclick action.
   */
  textButton: Schema$TextButton;
}
/**
 * A card is a UI element that can contain UI widgets such as texts, images.
 */
export interface Schema$Card {
  /**
   * The actions of this card.
   */
  cardActions: Schema$CardAction[];
  /**
   * The header of the card. A header usually contains a title and an image.
   */
  header: Schema$CardHeader;
  /**
   * Name of the card.
   */
  name: string;
  /**
   * Sections are separated by a line divider.
   */
  sections: Schema$Section[];
}
/**
 * A card action is the action associated with the card. For an invoice card, a
 * typical action would be: delete invoice, email invoice or open the invoice in
 * browser.
 */
export interface Schema$CardAction {
  /**
   * The label used to be displayed in the action menu item.
   */
  actionLabel: string;
  /**
   * The onclick action for this action item.
   */
  onClick: Schema$OnClick;
}
export interface Schema$CardHeader {
  /**
   * The image&#39;s type (e.g. square border or circular border).
   */
  imageStyle: string;
  /**
   * The URL of the image in the card header.
   */
  imageUrl: string;
  /**
   * The subtitle of the card header.
   */
  subtitle: string;
  /**
   * The title must be specified. The header has a fixed height: if both a title
   * and subtitle is specified, each will take up 1 line. If only the title is
   * specified, it will take up both lines.
   */
  title: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo {
 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The
 * JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * A form action describes the behavior when the form is submitted. For example,
 * an Apps Script can be invoked to handle the form.
 */
export interface Schema$FormAction {
  /**
   * Apps Script function to invoke when the containing element is
   * clicked/activated.
   */
  actionMethodName: string;
  /**
   * List of action parameters.
   */
  parameters: Schema$ActionParameter[];
}
/**
 * An image that is specified by a URL and can have an onclick action.
 */
export interface Schema$Image {
  /**
   * The aspect ratio of this image (width/height).
   */
  aspectRatio: number;
  /**
   * The URL of the image.
   */
  imageUrl: string;
  /**
   * The onclick action.
   */
  onClick: Schema$OnClick;
}
/**
 * An image button with an onclick action.
 */
export interface Schema$ImageButton {
  /**
   * The icon specified by an enum that indices to an icon provided by Chat API.
   */
  icon: string;
  /**
   * The icon specified by a URL.
   */
  iconUrl: string;
  /**
   * The name of this image_button which will be used for accessibility. Default
   * value will be provided if developers don&#39;t specify.
   */
  name: string;
  /**
   * The onclick action.
   */
  onClick: Schema$OnClick;
}
/**
 * A UI element contains a key (label) and a value (content). And this element
 * may also contain some actions such as onclick button.
 */
export interface Schema$KeyValue {
  /**
   * The text of the bottom label. Formatted text supported.
   */
  bottomLabel: string;
  /**
   * A button that can be clicked to trigger an action.
   */
  button: Schema$Button;
  /**
   * The text of the content. Formatted text supported and always required.
   */
  content: string;
  /**
   * If the content should be multiline.
   */
  contentMultiline: boolean;
  /**
   * An enum value that will be replaced by the Chat API with the corresponding
   * icon image.
   */
  icon: string;
  /**
   * The icon specified by a URL.
   */
  iconUrl: string;
  /**
   * The onclick action. Only the top label, bottom label and content region are
   * clickable.
   */
  onClick: Schema$OnClick;
  /**
   * The text of the top label. Formatted text supported.
   */
  topLabel: string;
}
export interface Schema$ListMembershipsResponse {
  /**
   * List of memberships in the requested (or first) page.
   */
  memberships: Schema$Membership[];
  /**
   * Continuation token to retrieve the next page of results. It will be empty
   * for the last page of results.
   */
  nextPageToken: string;
}
export interface Schema$ListSpacesResponse {
  /**
   * Continuation token to retrieve the next page of results. It will be empty
   * for the last page of results. Tokens expire in an hour. An error is thrown
   * if an expired token is passed.
   */
  nextPageToken: string;
  /**
   * List of spaces in the requested (or first) page.
   */
  spaces: Schema$Space[];
}
/**
 * Represents a membership relation in Hangouts Chat.
 */
export interface Schema$Membership {
  /**
   * The creation time of the membership a.k.a the time at which the member
   * joined the space, if applicable.
   */
  createTime: string;
  /**
   * Member details.
   */
  member: Schema$User;
  /**
   * Resource name of the membership, in the form
   * &quot;spaces/x/members/*&quot;.  Example:
   * spaces/AAAAMpdlehY/members/105115627578887013105
   */
  name: string;
  /**
   * State of the membership.
   */
  state: string;
}
/**
 * A message in Hangouts Chat.
 */
export interface Schema$Message {
  /**
   * Input only. Parameters that a bot can use to configure how its response is
   * posted.
   */
  actionResponse: Schema$ActionResponse;
  /**
   * Output only. Annotations associated with the text in this message.
   */
  annotations: Schema$Annotation[];
  /**
   * Rich, formatted and interactive cards that can be used to display UI
   * elements such as: formatted texts, buttons, clickable images. Cards are
   * normally displayed below the plain-text body of the message.
   */
  cards: Schema$Card[];
  /**
   * Output only. The time at which the message was created in Hangouts Chat
   * server.
   */
  createTime: string;
  /**
   * A plain-text description of the message&#39;s cards, used when the actual
   * cards cannot be displayed (e.g. mobile notifications).
   */
  fallbackText: string;
  /**
   * Resource name, in the form &quot;spaces/x/messages/*&quot;.  Example:
   * spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
   */
  name: string;
  /**
   * Text for generating preview chips. This text will not be displayed to the
   * user, but any links to images, web pages, videos, etc. included here will
   * generate preview chips.
   */
  previewText: string;
  /**
   * The user who created the message.
   */
  sender: Schema$User;
  /**
   * The space the message belongs to.
   */
  space: Schema$Space;
  /**
   * Plain-text body of the message.
   */
  text: string;
  /**
   * The thread the message belongs to.
   */
  thread: Schema$Thread;
}
/**
 * An onclick action (e.g. open a link).
 */
export interface Schema$OnClick {
  /**
   * A form action will be trigger by this onclick if specified.
   */
  action: Schema$FormAction;
  /**
   * This onclick triggers an open link action if specified.
   */
  openLink: Schema$OpenLink;
}
/**
 * A link that opens a new window.
 */
export interface Schema$OpenLink {
  /**
   * The URL to open.
   */
  url: string;
}
/**
 * A section contains a collection of widgets that are rendered (vertically) in
 * the order that they are specified. Across all platforms, cards have a narrow
 * fixed width, so there is currently no need for layout properties (e.g.
 * float).
 */
export interface Schema$Section {
  /**
   * The header of the section, text formatted supported.
   */
  header: string;
  /**
   * A section must contain at least 1 widget.
   */
  widgets: Schema$WidgetMarkup[];
}
/**
 * A room or DM in Hangouts Chat.
 */
export interface Schema$Space {
  /**
   * Output only. The display name (only if the space is a room).
   */
  displayName: string;
  /**
   * Resource name of the space, in the form &quot;spaces/*&quot;.  Example:
   * spaces/AAAAMpdlehYs
   */
  name: string;
  /**
   * Output only. The type of a space.
   */
  type: string;
}
/**
 * A button with text and onclick action.
 */
export interface Schema$TextButton {
  /**
   * The onclick action of the button.
   */
  onClick: Schema$OnClick;
  /**
   * The text of the button.
   */
  text: string;
}
/**
 * A paragraph of text. Formatted text supported.
 */
export interface Schema$TextParagraph { text: string; }
/**
 * A thread in Hangouts Chat.
 */
export interface Schema$Thread {
  /**
   * Resource name, in the form &quot;spaces/x/threads/*&quot;.  Example:
   * spaces/AAAAMpdlehY/threads/UMxbHmzDlr4
   */
  name: string;
}
/**
 * A user in Hangouts Chat.
 */
export interface Schema$User {
  /**
   * The user&#39;s display name.
   */
  displayName: string;
  /**
   * Resource name, in the format &quot;users/*&quot;.
   */
  name: string;
  /**
   * User type.
   */
  type: string;
}
/**
 * Annotation metadata for user mentions (@).
 */
export interface Schema$UserMentionMetadata {
  /**
   * The type of user mention.
   */
  type: string;
  /**
   * The user mentioned.
   */
  user: Schema$User;
}
/**
 * A widget is a UI element that presents texts, images, etc.
 */
export interface Schema$WidgetMarkup {
  /**
   * A list of buttons. Buttons is also oneof data and only one of these fields
   * should be set.
   */
  buttons: Schema$Button[];
  /**
   * Display an image in this widget.
   */
  image: Schema$Image;
  /**
   * Display a key value item in this widget.
   */
  keyValue: Schema$KeyValue;
  /**
   * Display a text paragraph in this widget.
   */
  textParagraph: Schema$TextParagraph;
}

export class Resource$Dms {
  root: Chat;
  conversations: Resource$Dms$Conversations;
  messages: Resource$Dms$Messages;
  constructor(root: Chat) {
    this.root = root;
    this.conversations = new Resource$Dms$Conversations(root);
    this.messages = new Resource$Dms$Messages(root);
  }
}
export class Resource$Dms$Conversations {
  root: Chat;
  messages: Resource$Dms$Conversations$Messages;
  constructor(root: Chat) {
    this.root = root;
    this.messages = new Resource$Dms$Conversations$Messages(root);
  }
}
export class Resource$Dms$Conversations$Messages {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.dms.conversations.messages.create
   * @desc Creates a message.
   * @alias chat.dms.conversations.messages.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
   * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };
}


export class Resource$Dms$Messages {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.dms.messages.create
   * @desc Creates a message.
   * @alias chat.dms.messages.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
   * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };
}


export class Resource$Rooms {
  root: Chat;
  conversations: Resource$Rooms$Conversations;
  messages: Resource$Rooms$Messages;
  constructor(root: Chat) {
    this.root = root;
    this.conversations = new Resource$Rooms$Conversations(root);
    this.messages = new Resource$Rooms$Messages(root);
  }
}
export class Resource$Rooms$Conversations {
  root: Chat;
  messages: Resource$Rooms$Conversations$Messages;
  constructor(root: Chat) {
    this.root = root;
    this.messages = new Resource$Rooms$Conversations$Messages(root);
  }
}
export class Resource$Rooms$Conversations$Messages {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.rooms.conversations.messages.create
   * @desc Creates a message.
   * @alias chat.rooms.conversations.messages.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
   * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };
}


export class Resource$Rooms$Messages {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.rooms.messages.create
   * @desc Creates a message.
   * @alias chat.rooms.messages.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
   * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };
}


export class Resource$Spaces {
  root: Chat;
  members: Resource$Spaces$Members;
  messages: Resource$Spaces$Messages;
  constructor(root: Chat) {
    this.root = root;
    this.members = new Resource$Spaces$Members(root);
    this.messages = new Resource$Spaces$Messages(root);
  }

  /**
   * chat.spaces.get
   * @desc Returns a space.
   * @alias chat.spaces.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. Resource name of the space, in the form "spaces/x".  Example: spaces/AAAAMpdlehY
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Space>,
       callback?: BodyResponseCallback<Schema$Space>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$Space>(parameters, callback!);
      };


  /**
   * chat.spaces.list
   * @desc Lists spaces the caller is a member of.
   * @alias chat.spaces.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
   * @param {string=} params.pageToken A token identifying a page of results the server should return.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ListSpacesResponse>,
       callback?: BodyResponseCallback<Schema$ListSpacesResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/spaces').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$ListSpacesResponse>(parameters, callback!);
      };
}
export class Resource$Spaces$Members {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.spaces.members.get
   * @desc Returns a membership.
   * @alias chat.spaces.members.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. Resource name of the membership to be retrieved, in the form "spaces/x/members/x".  Example: spaces/AAAAMpdlehY/members/105115627578887013105
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Membership>,
       callback?: BodyResponseCallback<Schema$Membership>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$Membership>(parameters, callback!);
      };


  /**
   * chat.spaces.members.list
   * @desc Lists human memberships in a space.
   * @alias chat.spaces.members.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Requested page size. The value is capped at 1000. Server may return fewer results than requested. If unspecified, server will default to 100.
   * @param {string=} params.pageToken A token identifying a page of results the server should return.
   * @param {string} params.parent Required. The resource name of the space for which membership list is to be fetched, in the form "spaces/x".  Example: spaces/AAAAMpdlehY
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$ListMembershipsResponse>,
       callback?: BodyResponseCallback<Schema$ListMembershipsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/members')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$ListMembershipsResponse>(parameters, callback!);
      };
}

export class Resource$Spaces$Messages {
  root: Chat;
  constructor(root: Chat) {
    this.root = root;
  }

  /**
   * chat.spaces.messages.create
   * @desc Creates a message.
   * @alias chat.spaces.messages.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. Space resource name, in the form "spaces/x". Example: spaces/AAAAMpdlehY
   * @param {string=} params.threadKey Opaque thread identifier string that can be specified to group messages into a single thread. If this is the first message with a given thread identifier, a new thread is created. Subsequent messages with the same thread identifier will be posted into the same thread. This relieves bots and webhooks from having to store the Hangouts Chat thread ID of a thread (created earlier by them) to post further updates to it.  Has no effect if thread field, corresponding to an existing thread, is set in message.
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/messages')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };


  /**
   * chat.spaces.messages.delete
   * @desc Deletes a message.
   * @alias chat.spaces.messages.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. Resource name of the message to be deleted, in the form "spaces/x/messages/x"  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Empty>,
       callback?: BodyResponseCallback<Schema$Empty>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$Empty>(parameters, callback!);
      };


  /**
   * chat.spaces.messages.get
   * @desc Returns a message.
   * @alias chat.spaces.messages.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. Resource name of the message to be retrieved, in the form "spaces/x/messages/x".  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };


  /**
   * chat.spaces.messages.update
   * @desc Updates a message.
   * @alias chat.spaces.messages.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name, in the form "spaces/x/messages/x".  Example: spaces/AAAAMpdlehY/messages/UMxbHmzDlr4.UMxbHmzDlr4
   * @param {string=} params.updateMask Required. The field paths to be updated.  Currently supported field paths: "text", "cards".
   * @param {().Message} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Message>,
       callback?: BodyResponseCallback<Schema$Message>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://chat.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: this.root
        };
        createAPIRequest<Schema$Message>(parameters, callback!);
      };
}