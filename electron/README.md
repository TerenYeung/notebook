##  Start

###  Start from Demo

1. ColorPicker

2. Markdown Editor

3. Music Player

4. P2P Chator

## Electron

developed by github

crocss-platform desktop applications with html, css and js;

electron accomplishes by combining Chromium and Node.js
init a single runtime;

electron began in 2013 as the framework on which Atom would be built;

## Apps Built on Electron

https://electron.atom.io/apps/

Atom

vsCode

Slack

## philosiphy

Electron uses web pages as its GUI, so you could also see it as a minimal Chromium browser, controlled by JavaScript.

---

## Main Process

the process that runs package.json’s main script is called the main process. 

## Renderer Process

uses Chromium for displaying web pages，

Chromium’s multi-process architecture is also used. Each web page in Electron runs in its own process, which is called the renderer process

## Differences Between Main Process and Renderer Process

The main process creates web pages by creating BrowserWindow instances;

Each BrowserWindow instance runs the web page in its own renderer process


The main process manages all web pages and their corresponding renderer processes

Each renderer process is isolated and only cares about the web page running in it.

In web pages, calling native GUI related APIs is not allowed because managing native GUI resources in web pages is very dangerous and it is easy to leak resources. If you want to perform GUI operations in a web page, the renderer process of the web page must communicate with the main process to request that the main process perform those operations.

renderer process -> main process -> gui operations

several ways to communicate between the main process and renderer processes: 

Like ipcRenderer and ipcMain modules for sending messages, and the remote module for RPC style communication. 





