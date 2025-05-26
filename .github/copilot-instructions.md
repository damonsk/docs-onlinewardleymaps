We generating documentation for the code in this workspace.  We're using docusaurus to generate the documentation, and we want to make sure that the code is well-documented and easy to understand.

When generating documentation, try to include a visual example from any screenshots available.  Include code examples of the DSL.

onlinewardleymaps includes a DSL, the app itself is a visual interpreter + editor for that DSL.

Always use docusaurus syntax for documentation, and make sure to include the sidebar_position in the front matter of each markdown file.  Also consider :::tip, :::note, and :::danger for special notes in the documentation.

We'll use test cases from onlinewardleymaps/frontend/src/__tests__ to inform how to use the app and DSL.

Use british english spelling for all documentation.