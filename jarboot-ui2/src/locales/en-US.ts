// src/locales/en-US.js
export default {
  'navbar.lang': '中文',

  //Tab标题
  SERVICES_MGR: 'Services',
  ONLINE_DEBUG: 'Online Diagnose',
  AUTH_CONTROL: 'Authority Control',
  PLUGINS: 'Plugins',
  SETTING: 'Setting',
  ABOUT: 'About',
  MENU_DOCS: "User's guide",
  TERMINAL: 'Terminal',
  TOOLS: 'Tool',
  FILE_MGR: 'File manager',
  PREFERENCES_CONFIG: 'Preferences config',

  //服务管理
  ONE_KEY_START: 'Start All',
  ONE_KEY_STOP: 'Stop All',
  ONE_KEY_RESTART: 'Restart All',
  START: 'Start',
  STOP: 'Stop',
  RESTART: 'Restart',
  UPLOAD_NEW: 'Upload & New',
  NAME: 'Name',
  STATUS: 'Status',
  CLEAR: 'Clear',
  CLOSE: 'Close',
  GROUP: 'Group',
  TREE_VIEW: 'Tree',
  LIST_VIEW: 'List',
  CONSOLE_VIEW: 'Console',
  SERVICES_CONF: 'Config',
  GROUP_PLACEHOLDER: 'Enter the group name for easy management',
  CMD_PLACEHOLDER: 'Input command to execute',
  SELECT_UPLOAD_SERVER_TITLE: 'Input the server name of update or new',
  UPLOAD_STAGE_TITLE: 'Upload {server} files',
  UPLOAD_TIPS: 'Click or drag the file to upload to this area',
  FILE_SIZE_OVER_TIPS: 'The file size must be less than {size}',
  COMMAND_PLACEHOLDER: 'Input command，Example: help',
  MORE_SETTING_INFO: 'More setting info view Service config page.',
  UPLOAD_ERROR: 'Error update service!',
  UPLOAD_SUCCESS: 'Successfully update service!',
  UPLOAD_HINT: 'Support for a single or bulk upload.',
  DELETE_INFO: 'This operation will completely delete the relevant information of the service. Do you want to continue?',
  UPLOAD_DESC: 'Click or drag file to this area to upload',
  LOCAL: 'Local',
  REMOTE: 'Remote',
  DEFAULT_GROUP: 'Default group',
  DETACH_MSG: 'Detach will disconnect remote connection，and removed from list after disconnect，continue or not?',
  //进程状态
  RUNNING: 'Running',
  STOPPED: 'Stopped',
  STARTING: 'Starting',
  STOPPING: 'Stopping',
  SCHEDULING: 'Scheduling',
  ATTACHED: 'Attached',
  NOT_ATTACHED: 'Not attached',
  // 主机状态
  ONLINE: 'Online',
  OFFLINE: 'Offline',
  AUTH_FAILED: 'Auth failed',

  //通用
  TYPE: 'Type',
  SUBMIT_BTN: 'Submit',
  RESET_BTN: 'Reset',
  SEARCH_BTN: 'Search',
  FILTER_BTN: 'Filter',
  REFRESH_BTN: 'Refresh',
  NEXT_BTN: 'Next',
  DASHBOARD: 'Dashboard',
  SERVER_EMPTY: 'Current workspace searched empty.',
  MODIFY: 'Modify',
  SAVE: 'Save',
  DELETE: 'Delete',
  CREATE: 'Create',
  SUCCESS: 'Success!',
  LOADING: 'Loading...',
  SUBMITTING: 'Submitting...',
  WARN: 'Warn',
  CANCEL: 'Cancel',
  EXPORT: 'Export',
  IMPORT: 'Import',
  OPERATOR: 'Operation',
  IMPORT_INFO: `The server {name} you imported which is already exist, overwrite it?`,
  UPLOAD_INFO: `Do you want to back up the service {name} before uploading updates for recovery after deployment errors?`,
  START_UPLOAD_INFO: `Start upload file {name}...`,
  TRUSTED_SUCCESS: 'Authorization obtained successfully!',
  UNTRUSTED_MODEL_BODY: `Unknown host {host}, truest？`,
  TRUST_ONCE: 'Trust once',
  TRUST_ALWAYS: 'Always trust',
  TEXT_WRAP: 'Text wrap',
  AUTO_SCROLL_END: 'Auto scroll to end',
  SCROLL_TO_TOP: 'Scroll to top',
  APP_TYPE: 'Application type',
  ADD_FILE: 'New file',
  ADD_FOLDER: 'New a new directory',
  NOT_TEXT_FILE: 'The file is not of text type. Do you want to continue editing?',
  SAVE_CONFIG_AND_ENABLE_FILE: 'Save configuration to enable file management',
  DOWNLOAD: 'Download',
  FAILED: 'Failed',
  CREATE_TERM: 'Create terminal',
  USER_DIR: 'User dir',
  MODIFY_USER: 'Modify user',
  AVATAR: 'Avatar',
  CLICK_MODIFY: 'Click to modify',
  PREVIEW: 'Preview',
  SELECT_AVATAR: 'Select avatar',
  UPLOAD_IMG: 'Upload image',
  RE_UPLOAD_IMG: 'Re-upload image',
  SIZE: 'Size',
  MODIFY_TIME: 'Modify time',
  COUNT: 'Count',
  TIP_UPLOAD_IMG: 'Please upload image!',
  CONNECT: 'Connect',
  FILE_NAME: 'File name',
  FINISHED: 'Finished',
  TRANSMITTING: 'Transmitting',

  //服务配置
  SERVER_LIST_TITLE: 'Services',
  COMMAND_LABEL: 'Command',
  VM_OPT_LABEL: 'VM options',
  MAIN_ARGS_LABEL: 'Program arguments',
  WORK_HOME_LABEL: 'Working directory',
  ENV_LABEL: 'Environment variables',
  PRIORITY_LABEL: 'Priority',
  DAEMON_LABEL: 'Daemon',
  JAR_UPDATE_WATCH_LABEL: 'File path Watch',
  SCHEDULE_TYPE: 'Schedule type',
  SCHEDULE_ONCE: 'once',
  SCHEDULE_LONE_TIME: 'long times',
  SCHEDULE_CRON: 'cron',
  COMMAND_EXAMPLE: 'Example:  1) -jar xx.jar    2) MainClassName    3) -cp xx.jar *.*.MainClass mainMethod    4) -classpath **.jar *.*ClassName',

  //插件
  UPLOAD_TITLE: 'Upload plugin',
  FILE: 'file',
  UPLOAD_BUTTON: 'Click to Upload',

  //全局配置界面
  SYSTEM_SETTING: 'System setting',
  SERVERS_PATH: 'Workspace',
  DEFAULT_VM_OPT: 'Default VM options',
  AUTO_START_AFTER_INIT: 'Auto start after jarboot started',
  TRUSTED_HOSTS: 'Trusted hosts',
  EMPTY_INPUT_MSG: 'The entered content is empty!',
  DELETE_HOST_MSG: 'Delete trusted host or not?',
  MAX_START_TIME: 'Wait service started max time (ms)',
  MAX_EXIT_TIME: 'Wait service graceful exit max time (ms)',
  AFTER_OFFLINE_EXEC: 'Shell to execute after service offline',
  FILE_SHAKE_TIME: 'File change shake time (s)',
  SYS_ICON: 'System icon',
  SYS_ICON_PREVIEW: 'System icon preview',
  SYS_LOGO: 'System logo',
  SYS_LOGO_PREVIEW: 'System logo preview',
  SYS_NAME: 'System name',
  SYS_VER: 'System version',
  CLI_DOWNLOAD: 'Client tools download',
  CLUSTER_MODE: 'Cluster mode',
  CUR_HOST: 'Current host',
  MACHINE_CODE: 'Machine code',
  YES: 'Yes',
  NO: 'No',

  //用户登录
  USER_NAME: 'User',
  FULL_NAME: 'Full name',
  PASSWORD: 'Password',
  LOGIN: 'Login',
  RE_PASSWORD: 'Repeat password',
  MODIFY_PWD: 'Modify password',
  CREATE_USER: 'Create user',
  SIGN_OUT: 'Sign out',
  INTERNAL_SYS_TIP: `Internal system.`,
  INTERNAL_SYS_TIP1: `Not exposed to the public network`,
  OLD_PASSWORD: 'Please input old password!',
  REPEAT_PASSWORD: 'Please input repeat password!',
  INPUT_PASSWORD: 'Please input password!',
  INPUT_USERNAME: 'Please input your user name!',
  INPUT_FULL_NAME: 'Please input your full name!',
  INPUT_ROLE: 'Please input role!',
  PWD_NOT_MATCH: 'The two passwords that you entered do not match!',
  USER_LIST: 'User List',
  ROLE_MGR: 'Role Management',
  PRIVILEGE_MGR: 'Privilege Management',
  ROLE: 'Role',
  BIND_ROLE: 'Binding roles',
  DELETE_USER: `Do you want to delete this user({user})?`,
  DELETE_ROLE: `Do you want to delete this role?`,
  CAN_NOT_REMOVE_SELF: 'Can not delete current user!',
  PERMISSION_CONTROL_TITLE: `Access Permission Control`,
  RESET_PASSWORD: 'Reset password',
  PRIVILEGE_CONF: 'Privilege config',
  ACCESS_PRIVILEGE: 'Access privilege',

  //交互提示信息
  SELECT_ONE_SERVER_INFO: 'Please select one server to operate.',
  NAME_NOT_EMPTY: `Name can't be empty`,
  UPLOAD_FILE_EMPTY: `Upload file of done is empty.`,
  SELECT_ONE_OP: 'Please select one item to operate.',
  COMMAND_RUNNING: 'Now it\'s executing command: "{command}"，please stop it first.',
  SAVE_OR_CANCEL: 'Do you want to save changes to the file?',
  PLEASE_INPUT: 'Please input ',
  CHANGE_SAVE_TIP: 'File is modified, save or cancel!',
  RUNNING_DELETE_INFO: 'The service {name} is running, can not delete!',

  //帮助
  HELP: 'Help',
  QUICK_START: 'Quick start',
  ABOUT_TEXT:
    'Jarboot is a platform for Java process startup, debugging and diagnosis，which can manage, monitor and debug a series of Java instance.',
  THREAD: 'Thread',
  RUNNABLE: 'Running',
  BLOCKED: 'Blocked',
  TOTAL: 'Total',
  OVERVIEW: 'Overview',
  ACTIVE_THREAD: 'Active thread',
  HEAP_USED: 'Heap used',
  NON_HEAP_USED: 'Non heap used',
  HEAP: 'Heap',
  NON_HEAP: 'Non heap',
  CPU_USED: 'CPU used',
  ACTIVE: 'Active',
  PEAK_VALUE: 'Peak value',
  USED: 'used',
  SUBMITTED: 'submitted',
  MAX: 'max',
  RUNTIME_INFO: 'Runtime info',
  MEMORY: 'Memory',
  MEMORY_INFO: 'Current memory info',
};
