/**
 * This file is part of the vscode-deploy-reloaded distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-deploy-reloaded is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU Lesser General Public License as   
 * published by the Free Software Foundation, version 3.
 *
 * vscode-deploy-reloaded is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { Translation } from '../i18';


// english
// 
// Translated by: Marcel Joachim Kloubert (https://github.com/mkloubert)
export const translation: Translation = {
    cancel: "Cancel",
    canceled: "Canceled",
    changelog: "Changelog",
    commands: {
        executionError: "Could not execute command{0:surround,leading_space}:{1:trim,surround,leading_space}",
        scriptNotFound: "{0:surround} script not found!",
    },
    compare: {
        currentFile: {
            description: "Compares the current file with a remote one",
            failed: "Could not compare current file:{0:trim,surround,leading_space}",
            label: "Current file ...",
        },
        errors: {
            operationFailed: "Compare operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
        },
        title: "Diff{0:trim,surround,leading_space}",
    },
    compilers: {
        errors: {
            couldNotDeleteSourceFile: "Could not delete source file:{0:trim,surround,leading_space}",
        },
        notSupported: "Compiler{0:trim,surround,leading_space} is not supported!",
    },
    'continue': "Continue",
    currentFileOrFolder: {
        noneSelected: "There is current no active file or folder selected!",
    },
    DELETE: {
        askForCancelOperation: "You are about to cancel the delete operation in{0:trim,surround,leading_space}. Are you sure?",
        askIfDeleteLocalFile: "Also delete local file?",
        askIfDeleteLocalFiles: "Also delete local files?",
        buttons: {
            cancel: {
                text: "Deleting files in{0:trim,surround,leading_space} ...",
                tooltip: "Click here to cancel ...",
            },
        },
        canceledByOperation: "Deleting files in{0:trim,surround,leading_space} has been cancelled by target operation.",
        cancelling: "Cancelling delete operation ...",
        currentFile: {
            description: "Deletes the current file",
            label: "Current file ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Deletes the current selected file",
                label: "Delete selected file",
            },
            folder: {
                description: "Deletes all files of the selected folder",
                label: "Delete selected folder",
            }
        },
        deletingFile: "Deleting file{0:trim,surround,leading_space} in{1:trim,surround,leading_space} ...",
        errors: {
            invalidWorkspace: "File{0:trim,surround,leading_space} is not part of workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Package{0:trim,surround,leading_space} is not part of workspace{1:trim,surround,leading_space}!",
            operationFailed: "Delete operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
        },
        finishedOperation: "Deleting files in{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not delete files in{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        fileList: {
            description: "Deletes files, which are defined as list in the active text editor",
            label: "File list",
        },
        onChange: {
            activated: "Remove on change has been activated for workspace{0:trim,surround,leading_space}.",
            failed: "Remove on change for{0:trim,surround,leading_space} in{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
            text: "Remove on change",
            waitingBeforeActivate: "Remove on change is deactivated for about{0:trim,leading_space} seconds for workspace{1:trim,surround,leading_space}.",
        },
        package: {
            description: "Deletes the files of a package",
            label: "Package ...",
        },
        selectTarget: "Select the target where to delete ...",
        startOperation: "Start deleting files in{0:trim,surround,leading_space} ...",
    },
    deploy: {
        allOpenFiles: {
            description: "Deploys the files of all opened text editors",
            label: "All open files ...",
        },
        askForCancelOperation: "You are about to cancel the deploy operation to{0:trim,surround,leading_space}. Are you sure?",
        buttons: {
            cancel: {
                text: "Deploying files to{0:trim,surround,leading_space} ...",
                tooltip: "Click here to cancel ...",
            },
        },
        canceledByOperation: "Deploying files to{0:trim,surround,leading_space} has been cancelled by target operation.",
        cancelling: "Cancelling deploy operation ...",
        currentFile: {
            description: "Deploys the current file",
            label: "Current file ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Deploys the current selected file",
                label: "Deploy selected file",
            },
            folder: {
                description: "Deploys all files of the selected folder",
                label: "Deploy selected folder",
            }
        },
        deployingFile: "Deploying file{0:trim,surround,leading_space} to{1:trim,surround,leading_space} ...",
        fileList: {
            description: "Deploys files, which are defined as list in the active text editor",
            label: "File list",
        },
        finishedOperation: "Deploying files to{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not deploy files to{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        errors: {
            invalidWorkspace: "Cannot deploy file{0:trim,surround,leading_space} from workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Cannot deploy package{0:trim,surround,leading_space} from workspace{1:trim,surround,leading_space}!",
            operationFailed: "Deploy operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
            operationToTargetFailed: "Deploying to target{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
        },
        gitCommit: {
            description: "Deploys the changes of a git commit",
            label: "git commit ...",
        },
        onChange: {
            activated: "Deploy on change has been activated for workspace{0:trim,surround,leading_space}.",
            failed: "Deploy on change from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
            text: "Deploy on change",
            waitingBeforeActivate: "Deploy on change is deactivated for about{0:trim,leading_space} seconds for workspace{1:trim,surround,leading_space}.",
        },
        onSave: {
            failed: "Deploy on save from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} failed:{2:trim,surround,leading_space}",
            text: "Deploy on save",
        },
        package: {
            description: "Deploys the files of a package",
            label: "Package ...",
        },
        selectTarget: "Select the target to deploy to ...",
        startOperation: "Start deploying files to{0:trim,surround,leading_space} ...",
    },
    disposeNotAllowed: "Cannot invoke 'dispose()' method!",
    documents: {
        html: {
            defaultName: "HTML document #{0:trim}",
        },
    },
    done: "Done",
    editors: {
        active: {
            noOpen: "No active text editor found!",
        },
        noOpen: "No open text editor found!",
    },
    error: "ERROR:{0:trim,surround,leading_space}",
    extension: {
        initialized: "Extension has been initialized.",
        initializing: "Extension is initializing ...",
    },
    file: "File",
    fileNotFound: "File{0:trim,surround,leading_space} not found!",
    files: "Files",
    ftp: {
        couldNotConnect: "Could not start connection!",
        couldNotConnectWithJSFTP: "Could not start connection via 'jsftp'!",
    },
    http: {
        errors: {
            client: "HTTP client error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            protocolNotSupported: "The protocol{0:trim,surround,leading_space} is not supported!",
            maxRedirections: "Maximum number of redirections ({0:trim}) reached!",
            noRedirectLocation: "No location defined to redirect to!",
            server: "HTTP server error{0:trim,leading_space}:{1:trim,surround,leading_space}",
            unknown: "Unknown HTTP error{0:trim,leading_space}:{1:trim,surround,leading_space}",
        },
    },
    initializationCanceled: 'The initialization of the extension has been stopped.',
    isNo: {
        directory: "{0:trim,surround,ending_space}is no directory!",
        file: "{0:trim,surround,ending_space}is no file!",
    },
    listDirectory: {
        copyPathToClipboard: {
            description: "Copies the current path to clipboard",
            errors: {
                failed: "Could not save path to clipboard (s. debug console 'CTRL/CMD + SHIFT + Y'): {0}",
            },
            label: "Copy path ...",
        },
        currentDirectory: "Current directory:{0:trim,surround,leading_space} ({1:trim,surround})",
        directoryIsEmpty: "(directory is empty)",
        errors: {
            failed: "Could not list directory{0:trim,surround,leading_space} ({1:trim,surround,leading_space}): {2:trim,surround,leading_space}",
            operationFailed: "List directory operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
        },
        lastModified: "Last modified:{0:trim,leading_space}",
        loading: "Loading directory{0:trim,surround,leading_space} ({1:trim} / {2:trim})...",
        noName: "<NO NAME>",
        parentDirectory: "(parent)",
        pull: {
            enterLocalFolder: "Enter the local folder, where the remote files should be saved ...",
            errors: {
                maxPathDepthReached: "Maximum path depth of{0:trim,leading_space} reached!",
            },
            folder: {
                description: "Pull the files of that folder to a local directory",
                label: "Pull files ...",
            },
            folderWithSubfolders: {
                description: "Pull the files (and sub folders) of that folder to a local directory",
                label: "Pull files with sub folders ...",
            },
            pullingFile: "Pulling file{0:trim,surround,leading_space} ...",
            pullingFrom: "Pulling files from{0:trim,surround,leading_space} to{1:trim,surround,leading_space} ...",
        },
        selectSource: "Select the source from where to start listening ...",
        size: "Size:{0:trim,leading_space}",
    },
    maxDepthReached: "Cannot go deeper than{0:trim,leading_space}!",
    network: {
        hostname: 'Your hostname:{0:trim,surround,leading_space}',
        interfaces: {
            list: 'Your network interfaces:',
        }
    },
    no: "No",
    noFiles: "No files found!",
    notFound: {
        dir: "Directory{0:trim,surround,leading_space} not found!",
    },
    ok: 'OK',
    packages: {
        buttons: {
            defaultText: "Deploy package{0:trim,surround,leading_space}",
            defaultTooltip: "Click here to start deployment...",
        },
        defaultName: "(Package #{0:trim})",
        deploymentFailed: "Could not deploy package{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        noneFound: "No packages found!",
        selectPackage: "Select a package ...",
        virtualTarget: "Virtual target for package{0:trim,surround,leading_space}",
    },
    pagination: {
        previousPage: "Previous page ({0:trim}) ...",
        nextPage: "Next page ({0:trim}) ...",
    },
    plugins: {
        __loaded: "Loaded{0:trim,leading_space} plugins:",

        app: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        compiler: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        errors: {
            initializationFailed: "Initialization of plugin{0:trim,surround,leading_space} failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
            loadingFailed: "Error while loading{0:trim,surround,leading_space} (s. debug console 'CTRL/CMD + SHIFT + Y')!",
            noFactoryFunction: "Plugin module{0:trim,surround,leading_space} contains no factory function!",
            noModule: "Plugin{0:trim,surround,leading_space} contains no module!",
            noneFoundIn: "No plugins found in{0:trim,surround,leading_space}!",
            notInitialized: "Plugin{0:trim,surround,leading_space} has not been initialized!",
        },
        list: {
            defaultEntryName: "(Entry #{0:trim})",
            selectEntry: "Select the entry with settings to use for deployment...",
        },
        local: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        mail: {
            subject: "Deployed files",
            text: "Your deployed files (s. attachment).\n\n" + 
                  "Send by 'Deploy Reloaded' (vscode-deploy-reloaded) Visual Studio Code extension:\n" + 
                  "https://github.com/mkloubert/vscode-deploy-reloaded",
        },
        prompt: {
            validation: {
                noBool: "Please enter a valid boolean value!",
                noFloat: "Please enter a valid number (english format)!",
                noInt: "Please enter a valid integer value!",
                noJSON: "Please enter a valid, JavaScript compatible, JSON string!",
            },
        },
        script: {
            noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
            noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
        },
        switch: {
            button: {
                text: "Switch{0:trim,surround,leading_space}",
                tooltip: "Current option:{0:trim,surround,leading_space}\n\nClick here to change the current option...",
            },
            changeSwitch: {
                description: "Changes the current option of a switch",
                label: "Change switch ...",
            },
            defaultOptionName: "Switch option #{0:trim}",
            noDefined: 'No swicthes available!',
            noOptionsDefined: 'No options were defined for the switch{0:trim,surround,leading_space}!',
            noOptionSelected2: "No option has been selected or defined for switch{0:trim,surround,leading_space}!",
            noOptionSelected: "NO OPTION SELECTED",
            selectOption: "Select an option for the switch{0:trim,surround,leading_space}...",
            selectSwitch: "Select a switch...",
        },
        test: {
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
        zip: {
            errors: {
                fileAlreadyExists: "File{0:trim,surround,leading_space} already exists!",
                fileNotFound: "File{0:trim,surround,leading_space} not found!",
                noFilesFound: "No ZIP files found!",
            },
            invalidDirectory: "{0:trim,surround,ending_space}is an invalid directory!",
        },
    },
    pull: {
        allOpenFiles: {
            description: "Pulls the files of all opened text editors",
            label: "All open files ...",
        },
        askForCancelOperation: "You are about to cancel the pull operation from{0:trim,surround,leading_space}. Are you sure?",
        buttons: {
            cancel: {
                text: "Pulling files from{0:trim,surround,leading_space} ...",
                tooltip: "Click here to cancel ...",
            },
        },
        canceledByOperation: "Pulling files from{0:trim,surround,leading_space} has been cancelled by target operation.",
        cancelling: "Cancelling pull operation ...",
        currentFile: {
            description: "Pull the current file",
            label: "Current file ...",
        },
        currentFileOrFolder: {
            file: {
                description: "Pulls the current selected file",
                label: "Pull selected file",
            },
            folder: {
                description: "Pulls all files of the selected folder",
                label: "Pull selected folder",
            }
        },
        errors: {
            invalidWorkspace: "Cannot pull file{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            invalidWorkspaceForPackage: "Cannot pull package{0:trim,surround,leading_space} to workspace{1:trim,surround,leading_space}!",
            operationFailed: "Pull operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
            operationForSourceFailed: "Pulling file(s) from source{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
        },
        finishedOperation: "Pulling files from{0:trim,surround,leading_space} has been finished.",
        finishedOperationWithErrors: "[ERROR] Could not pull files from{0:trim,surround,leading_space}:{1:trim,surround,leading_space}",
        fileList: {
            description: "Pulls files, which are defined as list in the active text editor",
            label: "File list",
        },
        pullingFile: "Pulling file{0:trim,surround,leading_space} from {1:trim,surround,leading_space} ...",
        package: {
            description: "Pulls the files of a package",
            label: "Package ...",
        },
        selectSource: "Select the source from where to pull from ...",
        startOperation: "Start pulling files from{0:trim,surround,leading_space} ...",
    },
    requirements: {
        conditions: {
            defaultName: "Condition #{0:trim}",
            mustMatch: "The condition{0:trim,surround,leading_space} failed, but must not!",
            shouldMatch: "The condition{0:trim,surround,leading_space} failed, but is recommended!",
        },
        extensions: {
            mustBeInstalled: "The extension{0:trim,surround,leading_space} is required, but not installed!",
            openInMarketplace: "Cancel and open Visual Studio Marketplace ...",
            shouldBeInstalled: "It is recommended to install the extension{0:trim,surround,leading_space}!",
        },
    },
    s3bucket: {
        credentialTypeNotSupported: "Credental type{0:trim,surround,leading_space} is not supported!",
    },
    scm: {
        branches: {
            noneFound: "No branches found!",
            selectBranch: "Select branch ...",
        },
        commits: {
            errors: {
                selectingCommitFailed: "Could not select commit:{0:trim,surround,leading_space}",
            },
            noneFound: "No commits found!",
            selectCommit: "Select commit ..."
        },
    },
    sftp: {
        privateKeyNotFound: "Private key file{0:trim,surround,leading_space} not found!",
    },
    shell: {
        executing: "Executing{0:trim,surround,leading_space} ...",
    },
    sql: {
        notSupported: "SQL type{0:trim,surround,leading_space} is not supported!",
    },
    switches: {
        errors: {
            operationFailed: "Switch operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
        },
    },
    sync: {
        whenOpen: {
            errors: {
                allFailed: "All sync operations failed!",
            },
            text: "Sync when open",
        },
    },
    targets: {
        atLeastOneNotFound: "At least one target was not found!",
        cannotDefineOtherAsSource: "Cannot use target{0:trim,surround,leading_space}!",
        defaultName: "(Target #{0:trim})",
        doesNotExist: "Target{0:trim,surround,leading_space} does not exist!",
        errors: {
            couldNotLoadDataTransformer: "Could not load data transformer for{0:trim,surround,leading_space}!",
        },
        noneFound: "No targets found!",
        noPluginsFound: "No matching plugins found!",
        noWorkspaceFound: "No matching workspace found!",
        operations: {
            http: {
                bodyScriptNotFound: "Script{0:trim,surround,leading_space} not found!",
                noBodyScriptFunction: "Script{0:trim,surround,leading_space} does not contain a 'getBody' function!",
                noBodyScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
            },
            runningAfterDeleted: "Running 'after deleted' operation{0:trim,surround,leading_space}... ",
            runningAfterDeployed: "Running 'after deployed' operation{0:trim,surround,leading_space}... ",
            runningAfterPulled: "Running 'after pulled' operation{0:trim,surround,leading_space}... ",
            runningBeforeDelete: "Running 'before delete' operation{0:trim,surround,leading_space}... ",
            runningBeforeDeploy: "Running 'before deploy' operation{0:trim,surround,leading_space}... ",
            runningBeforePull: "Running 'before pull' operation{0:trim,surround,leading_space}... ",
            runningPrepare: "Running 'prepare' operation{0:trim,surround,leading_space}... ",
            script: {
                noScriptFunction: "Script{0:trim,surround,leading_space} does not contain an 'execute' function!",
                noScriptModule: "Script{0:trim,surround,leading_space} does not contain a module!",
                scriptNotFound: "Script{0:trim,surround,leading_space} not found!",
            },
            typeNotSupported: "Operation type{0:trim,surround,leading_space} is not supported!",
        },
        selectTarget: "Select a target ...",
        waitingForOther: "Wating for{0:trim,surround,leading_space} ...",
    },
    time: {
        dateTimeWithSeconds: "YYYY-MM-DD HH:mm:ss",
    },
    tools: {
        bower: {
            description: "Tools for simple use of 'bower'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Bower Package Manager (bower)",
            packageExample: "'moment' e.g.",
            runInstall: {
                description: "Runs 'bower install' inside the current workspace",
                enterPackageName: "Enter the name of the Bower package ...",
                label: "Run 'bower install' ...",                
            },
            runUninstall: {
                bowerFileContainsNoPackages: "{0:trim,surround,ending_space}contains no packages!",
                bowerFileNotFound: "No 'bower.json' file found in{0:trim,surround,leading_space}!",
                description: "Runs 'bower uninstall' inside the current workspace",
                errors: {
                    loadingBowerFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                label: "Run 'bower uninstall' ...",                
            },
        },
        composer: {
            description: "Tools for simple use of 'composer'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Composer Package Manager (composer)",
            packageExample: "'psr/log' e.g.",
            runRemove: {
                composerFileContainsNoPackages: "{0:trim,surround,ending_space}contains no packages!",
                composerFileNotFound: "No 'composer.json' file found in{0:trim,surround,leading_space}!",
                errors: {
                    loadingComposerFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                description: "Runs 'composer remove' inside the current workspace",
                label: "Run 'composer remove' ...",
            },
            runRequire: {
                description: "Runs 'composer require' inside the current workspace",
                enterPackageName: "Enter the name of the Composer package ...",
                label: "Run 'composer require' ...",
            },
        },
        createDeployScript: {
            askForNewTargetName: "Please define the name of the new target ...",
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script as new target in settings?",
            description: "Creates a basic script for deploying files",
            errors: {
                targetAlreadyDefined: "A target called{0:trim,surround,leading_space} has already been defined in the settings!",
                updateTargetSettingsFailed: "Could not write new script target entry to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
        },
        createDeployOperationScript: {
            askForNewOperationName: "Enter an optional display name for the new operation ...",
            askForOperationType: {
                afterDeployment: "After deployment",
                beforeDeploy: "Before deployment starts",
                placeHolder: "When should the script be executed?",
            },
            askForScriptPath: "What should be the path of the new file?",
            askForUpdatingSettings: "Save script in settings?",
            description: "Creates a basic script for a deploy operation",
            errors: {
                updateSettingsFailed: "Could not write new script to settings:{0:trim,surround,leading_space}",
            },
            label: "Create deploy operation script ...",
            scriptCreated: "The script{0:trim,surround,leading_space} has been created successfully.",
            selectTarget: "Select a target ...",
        },
        errors: {
            operationFailed: "Tool operation failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
        },
        npm: {
            description: "Tools for simple use of 'npm'",
            executing: "Running{0:trim,surround,leading_space} ...",
            label: "Node Package Manager (npm)",
            moduleExample: "'node-enumerable' e.g.",
            runInstall: {
                description: "Runs 'npm install' inside the current workspace",
                enterModuleName: "Enter the name of the NPM module ...",
                label: "Run 'npm install' ...",
            },
            runLink: {
                description: "Runs 'npm link' inside the current workspace",
                enterModuleName: "Enter the name of the NPM module ...",
                label: "Run 'npm link' ...",
            },
            runUninstall: {
                description: "Runs 'npm uninstall' inside the current workspace",
                errors: {
                    loadingPackageFileFailed: "Loading{0:trim,surround,leading_space} failed:{1:trim,surround,leading_space}",
                },
                packageFileContainsNoModules: "{0:trim,surround,ending_space}contains no modules!",
                packageFileNotFound: "No 'package.json' file found in{0:trim,surround,leading_space}!",
                label: "Run 'npm UNinstall' ...",
            },
        },
        quickExecution: {
            description: "Executes JavaScript code",
            errors: {
                failed: "Execution of code failed:{0:trim,surround,leading_space}",
            },
            help: {
                title: "'Quick execution' help",
            },
            inputCode: "Input the code, you would like to execute ($help e.g.) ...",
            label: "Quick code execution ...",
            result: {
                title: "'Quick execution' result",
            },
            uuid: {
                notSupported: "UUID version{0:trim,surround,leading_space} is not supported!",
            },
        },
        sendOrReceiveFile: {
            description: "Sends or receives a file to/from a remote editor",
            label: "Send / receive file",
            receive: {
                button: {
                    text: "Waiting for file (port{0:trim,leading_space}) ...",
                    tooltip: "Click here to cancel ...",
                },
                description: "Receives a file from a remote editor",
                enterPort: "Enter the TCP port (default:{0:trim,leading_space}) ...",
                errors: {
                    couldNotReceiveFile: "Could not receive file:{0:trim,surround,leading_space}",
                    startHostFailed: "Could not start host for receiving a file:{0:trim,surround,leading_space}",
                },
                label: "Receive file ...",
            },
            send: {
                description: "Sends a file to a remote editor",
                enterRemoteAddress: "Enter the destination address ...",
                errors: {
                    couldNotSendFile: "Sending file failed:{0:trim,surround,leading_space}",
                },
                label: "Send file ...",
            },
        },
        showPackageFiles: {
            description: "Displays the files of a package",
            label: "Show package files ...",
            title: "Files of package{0:trim,surround,leading_space}",
        },
    },
    values: {
        errors: {
            targetFormatNotSupported: "Target format{0:trim,surround,leading_space} is not supported!",
        },
        typeNotSupported: "Value type{0:trim,surround,leading_space} is not supported!",
    },
    'vs-deploy': {
        continueAndInitialize: 'Continue and initialize me...',
        currentlyActive: "'vs-deploy' extension is currently active. It is recommended to DEACTIVATE IT, before you continue and use the new extension!",
    },
    warning: "WARNING",
    waiting: "Waiting ...",
    workspace: "Workspace",
    workspaces: {
        active: {
            errors: {
                selectWorkspaceFailed: "Selecting active workspace failed (s. debug console 'CTRL/CMD + SHIFT + Y')!",
            },
            noneFound: "No active workspaces found!",
            selectWorkspace: "Select the active workspace ...",
        },
        bower: {
            install: {
                errors: {
                    failed: "'bower install' failed:{0:trim,surround,leading_space}",
                },
                running: "Running 'bower install' in{0:trim,surround,leading_space} ...",
            }
        },
        composer: {
            install: {
                errors: {
                    failed: "'composer install' failed:{0:trim,surround,leading_space}",
                },
                running: "Running 'composer install' in{0:trim,surround,leading_space} ...",
            }
        },
        errors: {
            cannotDetectGitClient: "Could not find git client for{0:trim,surround,leading_space}!",
            cannotDetectGitFolder: "Could not find '.git' folder for{0:trim,surround,leading_space}!",
            cannotDetectMappedPathInfoForFile: "Cannot detect mapped path information for file{0:trim,surround,leading_space}!",
            cannotDetectPathInfoForFile: "Cannot detect path information for file{0:trim,surround,leading_space}!",
            cannotFindBranch: "Cannot find branch{0:trim,surround,leading_space} in{1:trim,surround,leading_space}!",
            cannotFindScmHash: "Cannot find hash{0:trim,surround,leading_space} in{1:trim,surround,leading_space}!",
            cannotUseTargetForFile: "Cannot use target{0:trim,surround,leading_space} for file{1:trim,surround,leading_space}!",
            initNodeModulesFailed: "Execution of 'npm install' failed:{0:trim,surround,leading_space}",
            notInitialized: "Workspace{0:trim,surround,leading_space} has not been initialized!",
        },
        initializing: "Initializing workspace{0:trim,surround,leading_space} ...",
        noneFound: "No workspaces found!",
        noSelected: "no workspace selected",
        npm: {
            install: {
                errors: {
                    failed: "'npm install' failed:{0:trim,surround,leading_space}",
                },
                running: "Running 'npm install' in{0:trim,surround,leading_space} ..."
            }
        },
        removing: "Closing workspace{0:trim,surround,leading_space} ...",
        selectSource: "Select source for workspace{0:trim,surround,leading_space} ...",
        selectTarget: "Select target for workspace{0:trim,surround,leading_space} ...",
        selectWorkspace: "Select a workspace ...",
    },
    yes: 'Yes',
}
