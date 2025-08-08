export type API_ITEM = {
  name: string;
  path: string;
  server: "WEB" | "ZMAIL" | "SCHEDULER";
  // Indicates whether the config.headers['Authorization'] should be set in the API request
  needAuth: boolean;
  withCredentials?: boolean;
  urlBuilder?: URL_BUILDER;
  requestParamsBuilder?: PARAMS_BUILDER;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type URL_BUILDER = (url: string, param: any, data: any) => string;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PARAMS_BUILDER = (params: any) => any;

// zmail server will proxy token api for /nws/common/2.0/eak  /nws/common/2.0/nak  /zmail/token
// so server still `ZMAIL`
const getEak: API_ITEM = {
  name: "getEak",
  path: "/nws/common/2.0/eak",
  server: "ZMAIL",
  needAuth: false,
};

const revokeEak: API_ITEM = {
  name: "revokeEak",
  path: "/zworkspace/admin/v1/auth/token",
  server: "ZMAIL",
  needAuth: true,
};

const getNak: API_ITEM = {
  name: "getNak",
  path: "/nws/common/2.0/nak",
  server: "ZMAIL",
  needAuth: false,
};

const webLogout: API_ITEM = {
  name: "webLogout",
  path: "/logout",
  server: "ZMAIL",
  needAuth: false,
};

const getZPNSToken: API_ITEM = {
  name: "getZPNSToken",
  path: "/zmail/token",
  server: "ZMAIL",
  needAuth: false,
};

const getWebConfig: API_ITEM = {
  name: "getWebConfig",
  path: "/server/configs?src=zmail",
  server: "ZMAIL",
  needAuth: false,
};

const getZPNSConfiguration: API_ITEM = {
  name: "getZPNSConfiguration",
  path: "/zmail/getZPNSConfiguration",
  server: "ZMAIL",
  needAuth: true,
};

const profile: API_ITEM = {
  name: "profile",
  path: "/zmail/v1/users/me/profile",
  server: "ZMAIL",
  needAuth: true,
};

const vcard: API_ITEM = {
  name: "vcard",
  path: "/zmail/v1/users/me/ucsInfo/batchGet",
  server: "ZMAIL",
  needAuth: true,
};

const labels: API_ITEM = {
  name: "labels",
  path: "/zmail/v1/users/me/labels",
  server: "ZMAIL",
  needAuth: true,
};

const getLabel: API_ITEM = {
  name: "getLabel",
  path: "/zmail/v1/users/me/labels",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const addLabel: API_ITEM = {
  name: "addLabel",
  path: "/zmail/v1/users/me/labels",
  server: "ZMAIL",
  needAuth: true,
};

const batchUpdateLabel: API_ITEM = {
  name: "batchUpdateLabel",
  path: "/zmail/v1/users/me/labels/batchUpdate",
  server: "ZMAIL",
  needAuth: true,
};

const deleteLabel: API_ITEM = {
  name: "deleteLabel",
  path: "/zmail/v1/users/me/labels/",
  server: "ZMAIL",
  needAuth: true,
};

const batch: API_ITEM = {
  name: "batch",
  path: "/batch/zmail/v1",
  server: "ZMAIL",
  needAuth: true,
};

const threadsBatchGet: API_ITEM = {
  name: "threadsBatchGet",
  path: "/zmail/v1/users/me/threads/batchGet",
  server: "ZMAIL",
  needAuth: true,
};

const listThread: API_ITEM = {
  name: "listThread",
  path: "/zmail/v1/users/me/threads",
  server: "ZMAIL",
  needAuth: true,
};

const threadDetail: API_ITEM = {
  name: "threadDetail",
  path: "/zmail/v1/users/me/threads",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const deleteThread: API_ITEM = {
  name: "deleteThread",
  path: "/zmail/v1/users/me/threads",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const watch: API_ITEM = {
  name: "watch",
  path: "/zmail/v1/users/me/watch",
  server: "ZMAIL",
  needAuth: true,
};

const listTemplates: API_ITEM = {
  name: "listTemplates",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const addTemplate: API_ITEM = {
  name: "addTemplate",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const updateTemplate: API_ITEM = {
  name: "updateTemplate",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  urlBuilder: (url, param) => `${url}/${param.templateId}`,
  server: "ZMAIL",
  needAuth: true,
};

const getTemplate: API_ITEM = {
  name: "getTemplate",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const deleteTemplate: API_ITEM = {
  name: "deleteTemplate",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  urlBuilder: (url, param) => `${url}/${param.templateId}`,
  server: "ZMAIL",
  needAuth: true,
};

const shareTemplate: API_ITEM = {
  name: "shareTemplate",
  path: "/zmail/v1/users/me/settings/emailTemplates",
  urlBuilder: (url, param) => `${url}/${param.templateId}/share`,
  server: "ZMAIL",
  needAuth: true,
};

const listSharedTemplates: API_ITEM = {
  name: "listSharedTemplates",
  path: "/zmail/v1/users/me/sharedTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const addSharedTemplates: API_ITEM = {
  name: "addSharedTemplates",
  path: "/zmail/v1/sharedTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const updateSharedTemplate: API_ITEM = {
  name: "updateSharedTemplate",
  path: "/zmail/v1/sharedTemplates",
  urlBuilder: (url, param) => `${url}/${param.templateId}`,
  server: "ZMAIL",
  needAuth: true,
};

const getSharedTemplate: API_ITEM = {
  name: "getSharedTemplate",
  path: "/zmail/v1/users/me/sharedTemplates",
  urlBuilder: (url, param) => `${url}/${param.templateId}`,
  server: "ZMAIL",
  needAuth: true,
};

const deleteSharedTemplate: API_ITEM = {
  name: "deleteSharedTemplate",
  path: "/zmail/v1/sharedTemplates",
  server: "ZMAIL",
  needAuth: true,
};

const batchGetLabels: API_ITEM = {
  name: "batchGetLabels",
  path: "/zmail/v1/users/me/batchGetLabels",
  server: "ZMAIL",
  needAuth: true,
};

// history is a builtin name (window.history)
const mailHistory: API_ITEM = {
  name: "mailHistory",
  path: "/zmail/v1/users/me/history",
  server: "ZMAIL",
  needAuth: true,
};
const rfcMessage: API_ITEM = {
  name: "rfcMessage",
  path: "/zmail/v1/users/me/messages?q=rfc822msgid:",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}${param.rfcId}`,
};

const deleteMessage: API_ITEM = {
  name: "messages",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const batchDeleteMessage: API_ITEM = {
  name: "batchDeleteMessage",
  path: "/zmail/v1/users/me/messages/batchDelete",
  server: "ZMAIL",
  needAuth: true,
};

const batchGetMessages: API_ITEM = {
  name: "batchGetMessages",
  path: "/zmail/v1/users/me/messages/batchGet",
  server: "ZMAIL",
  needAuth: true,
};

const messageModify: API_ITEM = {
  name: "messageModify",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.msgId}/modify`,
};

const batchMessageModify: API_ITEM = {
  name: "batchMessageModify",
  path: "/zmail/v1/users/me/messages/batchModify",
  server: "ZMAIL",
  needAuth: true,
};

const batchMessageArchive: API_ITEM = {
  name: "batchMessageArchive",
  path: "/zmail/v1/users/me/messages/batchArchive",
  server: "ZMAIL",
  needAuth: true,
};

const reportPhishing: API_ITEM = {
  name: "reportPhishing",
  path: "/zspam/v1/users",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url) => `${url}/me/phishing/report`,
};

const reportSpam: API_ITEM = {
  name: "reportSpam",
  path: "/zspam/v1/users",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/me/spam/report/${param.spamSender}`,
};

const threadModify: API_ITEM = {
  name: "threadModify",
  path: "/zmail/v1/users/me/threads",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.threadId}/modify`,
};

const messagesSenders: API_ITEM = {
  name: "messagesSenders",
  path: "/zmail/v1/users/me/messages/senders",
  server: "ZMAIL",
  needAuth: true,
};

const messagesScreening: API_ITEM = {
  name: "messagesScreening",
  path: "/zmail/v1/users/me/messages/screening/",
  server: "ZMAIL",
  needAuth: true,
};

const settingsSignature: API_ITEM = {
  name: "settingsSignature",
  path: "/zmail/v1/users/me/settings/signature",
  server: "ZMAIL",
  needAuth: true,
};

const getVacation: API_ITEM = {
  name: "getVacation",
  path: "/zmail/v1/users/me/settings/vacation",
  server: "ZMAIL",
  needAuth: true,
};

const updateVacation: API_ITEM = {
  name: "updateVacation",
  path: "/zmail/v1/users/me/settings/vacation",
  server: "ZMAIL",
  needAuth: true,
};

const settingsScreening: API_ITEM = {
  name: "settingsScreening",
  path: "/zmail/v1/users/me/settings/screening",
  server: "ZMAIL",
  needAuth: true,
};

// Read/Write Email settings\Compose and reply\Undo send time
const settingsPostponeSend: API_ITEM = {
  name: "settingsPostponeSend",
  path: "/zmail/v1/users/me/settings/postponeSend",
  server: "ZMAIL",
  needAuth: true,
};
// Read settings in batch
//  Email settings\Compose and reply\Reply to messages by default from
const settingsBatchGet: API_ITEM = {
  name: "settingsBatchGet",
  path: "/zmail/v1/users/me/settings/batchGet",
  server: "ZMAIL",
  needAuth: true,
};
// Write Email settings\Compose and reply\Reply to messages by default from
const settingsRelyAddressType: API_ITEM = {
  name: "settingsRelyAddressType",
  path: "/zmail/v1/users/me/settings/replyAddressType",
  server: "ZMAIL",
  needAuth: true,
};
// Read/Write Email settings\Compose and reply\AutoBcc
const settingsAutoBcc: API_ITEM = {
  name: "settingsAutoBcc",
  path: "/zmail/v1/users/me/settings/autoBcc",
  server: "ZMAIL",
  needAuth: true,
};

const settingsHideImportant: API_ITEM = {
  name: "settingsHideImportant",
  path: "/zmail/v1/users/me/settings/hideImportant",
  server: "ZMAIL",
  needAuth: true,
};

const inboxCategorySetting: API_ITEM = {
  name: "inboxCategorySetting",
  path: "/zmail/v1/users/me/settings/inboxSublabel",
  server: "ZMAIL",
  needAuth: true,
};
const getSettingsFromServer: API_ITEM = {
  name: "getSettingsFromServer",
  path: "/zmail/v1/users/me/setting/batchGet",
  server: "ZMAIL",
  needAuth: true,
};

const updateUiSettingsToServer: API_ITEM = {
  name: "updateUiSettingsToServer",
  path: "/zmail/v1/users/me/settings/ui",
  server: "ZMAIL",
  needAuth: true,
};

const settingsDelegator: API_ITEM = {
  name: "settingsDelegator",
  path: "/zmail/v1/users/me/settings/delegators",
  server: "ZMAIL",
  needAuth: true,
};

const settingsDelegates: API_ITEM = {
  name: "settingsDelegates",
  path: "/zmail/v1/users/me/settings/delegates",
  server: "ZMAIL",
  needAuth: true,
};

const listAccountAlias: API_ITEM = {
  name: "listAccountAlias",
  path: "/zmail/v1/users/me/settings/disposableEmails",
  server: "ZMAIL",
  needAuth: true,
};

const listZmailSendAs: API_ITEM = {
  name: "listZmailSendAs",
  path: "/zmail/v2/users/me/settings/sendAs",
  server: "ZMAIL",
  needAuth: true,
};

const updateZmailSendAs: API_ITEM = {
  name: "updateZmailSendAs",
  path: "/zmail/v2/users/me/settings/sendAs",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => {
    return `${url}/${param.sendAsEmail}`;
  },
};

const removeZmailSendAs: API_ITEM = {
  name: "removeZmailSendAs",
  path: "/zmail/v2/users/me/settings/sendAs",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.sendAsEmail}`,
};

const listGrantListOfSendAs: API_ITEM = {
  name: "listGrantListOfSendAs",
  path: "/zmail/v2/users/me/settings/sendAsDelegates",
  server: "ZMAIL",
  needAuth: true,
};

const addGrantOfSendAs: API_ITEM = {
  name: "addGrantOfSendAs",
  path: "/zmail/v2/users/me/settings/sendAsDelegates",
  server: "ZMAIL",
  needAuth: true,
};

const removeGrantOfSendAs: API_ITEM = {
  name: "removeGrantOfSendAs",
  path: "/zmail/v2/users/me/settings/sendAsDelegates",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.delegate}`,
};

const getAttachment: API_ITEM = {
  name: "getAttachment",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) =>
    `${url}/${param.msgId}/attachments/${param.attachmentId}`,
};

const downloadAttachment: API_ITEM = {
  name: "downloadAttachment",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => {
    const { msgId, attachmentId } = param;
    delete param.msgId;
    delete param.attachmentId;
    return `${url}/${msgId}/attachments/${attachmentId}?downloadMode=1`;
  },
};

const createDraft: API_ITEM = {
  name: "createDraft",
  path: "/upload/zmail/v1/users/me/drafts",
  server: "ZMAIL",
  needAuth: true,
};

const sendDraft: API_ITEM = {
  name: "sendDraft",
  path: "/upload/zmail/v1/users/me/drafts/send",
  server: "ZMAIL",
  needAuth: true,
};

const updateDraft: API_ITEM = {
  name: "updateDraft",
  path: "/upload/zmail/v1/users/me/drafts",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.msgId}`,
};

const deleteDraft: API_ITEM = {
  name: "deleteDraft",
  path: "/zmail/v1/users/me/drafts",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.msgId}`,
};

const searchThreads: API_ITEM = {
  name: "searchThreads",
  path: "/zmail/v1/users/me/threads/search",
  server: "ZMAIL",
  needAuth: true,
};

const searchMessages: API_ITEM = {
  name: "searchMessages",
  path: "/zmail/v1/users/me/messages/search",
  server: "ZMAIL",
  needAuth: true,
};

const searchContacts: API_ITEM = {
  name: "searchContacts",
  path: "/zpeople/v1/users/me/people/search",
  server: "ZMAIL",
  needAuth: true,
};

const listContactLabels: API_ITEM = {
  name: "listContactLabels",
  path: "/zpeople/v1/users/me/contactgroups",
  server: "ZMAIL",
  needAuth: true,
};

const updateContactLabel: API_ITEM = {
  name: "updateContactLabel",
  path: "/zpeople/v1/users/me/contactgroups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, params) => `${url}/${params.id}`,
};

const getContacts: API_ITEM = {
  name: "getContacts",
  path: "/zpeople/v1/contact",
  server: "ZMAIL",
  needAuth: true,
};

const updateContacts: API_ITEM = {
  name: "updateContacts",
  path: "/zpeople/v1/contact",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.contactId}`;
  },
};

const deleteContacts: API_ITEM = {
  name: "deleteContacts",
  path: "/zpeople/v1/contact",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, { contactId }) => {
    return `${url}/${contactId}`;
  },
  requestParamsBuilder: (params) => {
    delete params.contactId;
    return params;
  },
};

const batchDeleteContacts: API_ITEM = {
  name: "batchDeleteContacts",
  path: "/zpeople/v1/contact/batchDelete",
  server: "ZMAIL",
  needAuth: true,
};

const deleteRecentContacts: API_ITEM = {
  name: "deleteRecentContacts",
  path: "/zpeople/v1/users/me/recentContact",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, { email }) => {
    return `${url}/${btoa(email)}`;
  },
  requestParamsBuilder: (params) => {
    delete params.email;
    return params;
  },
};

const getRecentContacts: API_ITEM = {
  name: "getRecentContacts",
  path: "/zpeople/v1/contact",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => {
    const { maxResults = 500, nextPageToken } = param;
    return `${url}?labelIds=RecentContacts&maxResults=${maxResults}&pageToken=${nextPageToken}`;
  },
};

const getSingleGroups: API_ITEM = {
  name: "getSingleGroups",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const getMyGroups: API_ITEM = {
  name: "getMyGroups",
  path: "/zgroup/v1/users/me/groups",
  server: "ZMAIL",
  needAuth: true,
};

const getAllGroups: API_ITEM = {
  name: "getAllGroups",
  path: "/zgroup/v1/domain/groups",
  server: "ZMAIL",
  needAuth: true,
};

const getGroupMembers: API_ITEM = {
  name: "getGroupMembers",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}/members`;
  },
  requestParamsBuilder: (params) => {
    delete params.groupEmail;
    return params;
  },
};

const addGroupMembers: API_ITEM = {
  name: "addGroupMembers",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}/members`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const updateGroupMember: API_ITEM = {
  name: "updateGroupMember",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}/members/${data.memberEmail}`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const deleteGroupMembers: API_ITEM = {
  name: "deleteGroupMembers",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}/hardDelete/members/batchDelete`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const getGroupConfig: API_ITEM = {
  name: "getGroupConfig",
  path: "/zgroup/v1/domain/me",
  server: "ZMAIL",
  needAuth: true,
};

const addGroup: API_ITEM = {
  name: "addGroup",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  requestParamsBuilder: () => {
    return {};
  },
};

const updateGroup: API_ITEM = {
  name: "updateGroup",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const deleteGroup: API_ITEM = {
  name: "deleteGroup",
  path: "/zgroup/v1/domain",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.domain}/groups/hardDelete`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const leaveGroup: API_ITEM = {
  name: "leaveGroup",
  path: "/zgroup/v1/groups",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, data) => {
    return `${url}/${data.groupEmail}/me`;
  },
  requestParamsBuilder: () => {
    return {};
  },
};

const getSignatures: API_ITEM = {
  name: "getSignatures",
  path: "/zmail/v1/users/me/settings/signatures/all",
  server: "ZMAIL",
  needAuth: true,
};

const signatureDetail: API_ITEM = {
  name: "signatureDetail",
  path: "/zmail/v1/users/me/settings/signatures/",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const templateSignatureDetail: API_ITEM = {
  name: "templateSignatureDetail",
  path: "/zmail/v1/users/me/settings/templatedSignatures",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}?format=full`,
};

const signatureConfig: API_ITEM = {
  name: "signatureConfig",
  path: "/zmail/v1/users/me/settings/signatures/config",
  server: "ZMAIL",
  needAuth: true,
};

const templateSignatureList: API_ITEM = {
  name: "templateSignatureList",
  path: "/zmail/v1/users/me/settings/templatedSignatures",
  server: "ZMAIL",
  needAuth: true,
};

const templateSignatureProfile: API_ITEM = {
  name: "templateSignatureProfile",
  path: "/zmail/v1/users/me/settings/templatedSignatures/data",
  server: "ZMAIL",
  needAuth: true,
};

const signatureTemplateList: API_ITEM = {
  name: "signatureTemplateList",
  path: "/zmail/v1/users/me/settings/templatedSignatures/templates?format=metathumbnail",
  server: "ZMAIL",
  needAuth: true,
};

const signatureTemplateDetail: API_ITEM = {
  name: "signatureTemplateDetail",
  path: "/zmail/v1/users/me/settings/templatedSignatures/templates",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url: string, params) => `${url}/${params.id}?format=full`,
};

const deleteSignature: API_ITEM = {
  name: "deleteSignature",
  path: "/zmail/v1/users/me/settings/signatures",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url: string, params) => `${url}/${params.id}`,
};

const deleteTemplateSignature: API_ITEM = {
  name: "deleteTemplateSignature",
  path: "/zmail/v1/users/me/settings/templatedSignatures",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url: string, params) => `${url}/${params.id}`,
};

const updateSignature: API_ITEM = {
  name: "updateSignature",
  path: "/zmail/v1/users/me/settings/signatures",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url: string, params) =>
    `${url}${params.id ? `/${params.id}` : ""}`,
};
const updateTemplateSignature: API_ITEM = {
  name: "updateTemplateSignature",
  path: "/zmail/v1/users/me/settings/templatedSignatures",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url: string, params) => `${url}/${params.signatureId}`,
};
const createTemplateSignature: API_ITEM = {
  name: "createTemplateSignature",
  path: "/zmail/v1/users/me/settings/templatedSignatures",
  server: "ZMAIL",
  needAuth: true,
};

const updateTemplateSignatureProfile: API_ITEM = {
  name: "updateTemplateSignatureProfile",
  path: "/zmail/v1/users/me/settings/templatedSignatures/data",
  server: "ZMAIL",
  needAuth: true,
};

const listFilters: API_ITEM = {
  name: "listFilters",
  path: "/zmail/v1/users/me/settings/filters",
  server: "ZMAIL",
  needAuth: true,
};

const createFilter: API_ITEM = {
  name: "createFilter",
  path: "/zmail/v1/users/me/settings/filters",
  server: "ZMAIL",
  needAuth: true,
};

const updateFilter: API_ITEM = {
  name: "updateFilter",
  path: "/zmail/v1/users/me/settings/filters",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => {
    const { id, applyToHistoryMsgs } = param;
    delete param.applyToHistoryMsgs;
    return `${url}/${id}/${
      applyToHistoryMsgs ? "?applyToHistoryMsgs=true" : ""
    }`;
  },
};

const deleteFilter: API_ITEM = {
  name: "deleteFilter",
  path: "/zmail/v1/users/me/settings/filters",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) => `${url}/${param.id}`,
};

const applyFilterToHistorical: API_ITEM = {
  name: "applyFilterToHistorical",
  path: "/zmail/v1/users/me/settings/filters/applyToHistorical",
  server: "ZMAIL",
  needAuth: true,
};

const searchAttachments: API_ITEM = {
  name: "searchAttachments",
  path: "/zmail/v1/users/me/attachments/search",
  server: "ZMAIL",
  needAuth: true,
};

const undoScheduledSend: API_ITEM = {
  name: "undoScheduledSend",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  urlBuilder: (url, param) => {
    return `${url}/${param.msgId}/scheduled/${param.msgId}`;
  },
  needAuth: true,
};

const calendarEvent: API_ITEM = {
  name: "calendarEvent",
  path: "/zcalendar/v1/calendars/{{ calendarId }}/events/{{ eventId }}",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
  urlBuilder: (url, params, data) => {
    return url.replace(/\{\{(.*?)\}\}/g, (_, key) => {
      return encodeURIComponent(params?.[key.trim()] || data[key.trim()]) || "";
    });
  },
  requestParamsBuilder: (params) => {
    delete params.calendarId;
    delete params.eventId;
    return params;
  },
};

const listCalendarEvents: API_ITEM = {
  name: "listCalendarEvents",
  path: "/zcalendar/v1/calendars/{{ calendarId }}/events",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, params) => {
    return url.replace(/\{\{(.*?)\}\}/g, (_, key) => {
      return encodeURIComponent(params[key.trim()]) || "";
    });
  },
  requestParamsBuilder: (params) => {
    delete params.calendarId;
    return params;
  },
};

const getFilterMatchingCount: API_ITEM = {
  name: "getFilterMatchingCount",
  path: "/zmail/v1/users/me/threads/count",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
};

const getEmailHosts: API_ITEM = {
  name: "getEmailHosts",
  path: "/zgroup/v1/emailhosts",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
};
const listMessages: API_ITEM = {
  name: "listMessages",
  path: "/zmail/v1/users/me/messages",
  server: "ZMAIL",
  needAuth: true,
  urlBuilder: (url, param) =>
    `${url}?maxResults=${param.maxResults || 20}&labelIds=${
      param.labelId || "INBOX"
    }${param.nextPageToken ? `&pageToken=${param.nextPageToken}` : ""}`,
};

const schedulerAppts: API_ITEM = {
  name: "schedulerAppts",
  path: "/zscheduler/v1/appointments?orderBy=updated",
  server: "SCHEDULER",
  needAuth: true,
};

const schedulerOrg: API_ITEM = {
  name: "schedulerOrg",
  path: "/zscheduler/v1/organization",
  server: "SCHEDULER",
  needAuth: true,
  urlBuilder: (url, params) => `${url}/${params.accountId}`,
};

const schedulerSlug: API_ITEM = {
  name: "schedulerSlug",
  path: "/zscheduler/v1/settings/slug",
  server: "SCHEDULER",
  needAuth: true,
};

const getSchedulerToken: API_ITEM = {
  name: "getSchedulerToken",
  path: "/appointment/token",
  server: "SCHEDULER",
  needAuth: false,
};

const displayExternalImages: API_ITEM = {
  name: "displayExternalImages",
  path: "/zmail/v1/users/me/settings/displayExternalImages",
  server: "ZMAIL",
  needAuth: true,
};

const getMessageCount: API_ITEM = {
  name: "getMessageCount",
  path: "/zmail/v1/users/me/messages/count",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
};
const getThreadCount: API_ITEM = {
  name: "getThreadCount",
  path: "/zmail/v1/users/me/threads/count",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
};
const batchModifyByQuery: API_ITEM = {
  name: "batchModifyByQuery",
  path: "/zmail/v1/users/me/messages/batchModifyByQuery",
  server: "ZMAIL",
  needAuth: true,
  withCredentials: false,
};

const URLS = {
  batch,
  webLogout,
  getNak,
  getEak,
  revokeEak,
  getZPNSToken,
  getZPNSConfiguration,
  profile,
  vcard,
  labels,
  getLabel,
  addLabel,
  batchUpdateLabel,
  deleteLabel,
  batchGetLabels,
  listThread,
  threadDetail,
  deleteThread,
  threadsBatchGet,
  threadModify,
  watch,
  listTemplates,
  addTemplate,
  updateTemplate,
  getTemplate,
  deleteTemplate,
  shareTemplate,
  listSharedTemplates,
  getSharedTemplate,
  addSharedTemplates,
  updateSharedTemplate,
  deleteSharedTemplate,
  mailHistory,
  deleteMessage,
  batchDeleteMessage,
  batchGetMessages,
  batchMessageArchive,
  messageModify,
  batchMessageModify,
  messagesSenders,
  messagesScreening,
  settingsSignature,
  settingsScreening,
  settingsPostponeSend,
  settingsBatchGet,
  settingsRelyAddressType,
  settingsAutoBcc,
  settingsHideImportant,
  inboxCategorySetting,
  getSettingsFromServer,
  updateUiSettingsToServer,
  listAccountAlias,
  listZmailSendAs,
  updateZmailSendAs,
  removeZmailSendAs,
  listGrantListOfSendAs,
  addGrantOfSendAs,
  removeGrantOfSendAs,
  settingsDelegator,
  settingsDelegates,
  getAttachment,
  downloadAttachment,
  createDraft,
  updateDraft,
  deleteDraft,
  sendDraft,
  getVacation,
  getContacts,
  updateContacts,
  deleteContacts,
  batchDeleteContacts,
  deleteRecentContacts,
  getSingleGroups,
  getMyGroups,
  getAllGroups,
  getGroupMembers,
  addGroupMembers,
  updateGroupMember,
  deleteGroupMembers,
  getGroupConfig,
  leaveGroup,
  addGroup,
  updateGroup,
  deleteGroup,
  updateVacation,
  searchMessages,
  rfcMessage,
  searchThreads,
  searchContacts,
  listContactLabels,
  updateContactLabel,
  getRecentContacts,
  getSignatures,
  signatureDetail,
  templateSignatureDetail,
  signatureConfig,
  templateSignatureList,
  templateSignatureProfile,
  signatureTemplateList,
  signatureTemplateDetail,
  deleteSignature,
  deleteTemplateSignature,
  updateSignature,
  updateTemplateSignature,
  createTemplateSignature,
  updateTemplateSignatureProfile,
  listFilters,
  createFilter,
  updateFilter,
  deleteFilter,
  applyFilterToHistorical,
  searchAttachments,
  getWebConfig,
  undoScheduledSend,
  calendarEvent,
  listCalendarEvents,
  getFilterMatchingCount,
  reportPhishing,
  reportSpam,
  getEmailHosts,
  listMessages,
  schedulerAppts,
  schedulerOrg,
  schedulerSlug,
  getSchedulerToken,
  displayExternalImages,
  getMessageCount,
  getThreadCount,
  batchModifyByQuery,
};

export type API_NAME = keyof typeof URLS;

export function getAPIInfo(api: API_NAME) {
  return URLS[api];
}

/*
    Determines whether a API request requires authentication (like auth tokens, JWT, etc.)
    If yes, set config.headers['Authorization'] with a Bearer token
*/
export function isNeedAuth(api: API_NAME) {
  // when retry api call, api was full url path, we can't find api info by full url. but this kind of url is need to add auth token.
  return api.startsWith("http") || (URLS[api]?.needAuth ?? true);
}

/*
    Determines whether a API request should include credentials (like cookies, authorization headers, etc.) 
*/
export function isWithCredentials(api: API_NAME) {
  return URLS[api]?.withCredentials ?? true;
}

export function isZmailAPI(api: API_NAME) {
  if (api.startsWith("http")) {
    // retry request api was url fullpath.
    const url = new URL(api);
    if (url && url.pathname) {
      return Object.values(URLS)
        .filter((apiItem) => apiItem.server === "ZMAIL")
        .map((apiItem) => apiItem.path)
        .some((path) => url.pathname.startsWith(path));
    }
  } else {
    return URLS[api]?.server === "ZMAIL";
  }
}

export function isSchedulerAPI(api: API_NAME) {
  return URLS[api]?.server === "SCHEDULER";
}

export function isWebTokenAPI(api: API_NAME) {
  const tokenAPIPaths = [
    getEak.path,
    getNak.path,
    getZPNSToken.path,
    getWebConfig.path,
  ];

  // Determine whether it is the web's api by path, web and zmail's api path will not conflict.
  if (api.startsWith("http")) {
    // retry request api was url fullpath.
    const url = new URL(api);
    if (url && url.pathname) {
      return tokenAPIPaths.some(
        (path) => url.pathname === path.replace(/\?.*$/, "")
      );
    }
  } else {
    try {
      const apiPath = URLS[api]?.path;
      return tokenAPIPaths.indexOf(apiPath) !== -1;
    } catch (e) {
      console.error(`${api} is not founded!`, e);
      return false;
    }
  }
}

export function isWebAPI(api: API_NAME) {
  return URLS[api]?.server === "WEB";
}

export default URLS;
