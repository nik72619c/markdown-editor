# Markdown Editor

[![Netlify Status](https://api.netlify.com/api/v1/badges/952fdc5d-a2bb-4895-a375-25ea1c6f30d8/deploy-status)](https://app.netlify.com/sites/accordproject-markdown-editor/deploys) [![npm version](https://badge.fury.io/js/%40accordproject%2Fmarkdown-editor.svg)](https://badge.fury.io/js/%40accordproject%2Fmarkdown-editor)

This repo contains two React-based editors:
1. A WYSIWYG  [Slate][slate]-based editor that edits rich text and calls an `onChange`
   callback with the modified Slate DOM and the [CommonMark][CommonMark] markdown serialization.
2. A TextArea-based markdown editor that edits markdown text and calls an `onChange`
   callback with the equivalent Slate DOM and the modified markdown text.

Using these editors you could allow people to either edit rich formatted text using
markdown (and provide a WYSIWYG preview), or allow them to edit using a WYSIWYG
editor and use markdown for persistence.

The editor is plugin-based and includes a formatting toolbar. Plugins are used to
extend the core editor with support with new formatting functionality and/or new
types of blocks.

This component is Apache-2 licensed Open Source. Contributors welcome!

### [Demo](https://accordproject-markdown-editor.netlify.com/examples/)

### Usage

```
npm install @accordproject/markdown-editor
```

```
import { SlateAsInputEditor } from '@accordproject/markdown-editor';
import List from '@accordproject/markdown-editor/dist/plugins/list';
import Video from '@accordproject/markdown-editor/dist/plugins/video';

const plugins = [List(), Video()];

function storeLocal(slateValue, markdown) {
  // console.log(markdown);
  localStorage.setItem('markdown-editor', markdown);
}

ReactDOM.render(<SlateAsInputEditor plugins={plugins} lockText={false} onChange={storeLocal}/>
, document.getElementById('root'));
```

### Example

For an example React App see the `./examples/` folder.

A `TextArea` containing [CommonMark][CommonMark] synchronized with a `MarkdownEditor` component, rendered using [Slate][slate].

The code for the sample `video` plugin used in the demo is here:
https://github.com/accordproject/markdown-editor/blob/master/src/plugins/video.js

![overview image](overview.png)

Run `npm start` and then navigate to: http://localhost:3001/examples

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001/examples](http://localhost:3001/examples) to view it in the browser.

The page will reload if you make edits.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Styling

You can style the toolbar of this components, as well as the width of the editor:

#### `editorProps`

This is an object with the following possible css inputs as strings:
- `BUTTON_BACKGROUND_INACTIVE`
- `BUTTON_BACKGROUND_ACTIVE`
- `BUTTON_SYMBOL_INACTIVE`
- `BUTTON_SYMBOL_ACTIVE`
- `DROPDOWN_COLOR`
- `TOOLBAR_BACKGROUND`
- `TOOLTIP_BACKGROUND`
- `TOOLTIP`
- `TOOLBAR_SHADOW`
- `WIDTH`

---

<a href="https://www.accordproject.org/">
  <img src="assets/APLogo.png" alt="Accord Project Logo" width="400" />
</a>

Accord Project is an open source, non-profit, initiative working to transform contract management and contract automation by digitizing contracts. Accord Project operates under the umbrella of the [Linux Foundation][linuxfound]. The technical charter for the Accord Project can be found [here][charter].

## Learn More About Accord Project

### Overview
* [Accord Project][apmain]
* [Accord Project News][apnews]
* [Accord Project Blog][apblog]
* [Accord Project Slack][apslack]
* [Accord Project Technical Documentation][apdoc]
* [Accord Project GitHub][apgit]


### Documentation
* [Getting Started with Accord Project][docwelcome]
* [Concepts and High-level Architecture][dochighlevel]
* [How to use the Cicero Templating System][doccicero]
* [How to Author Accord Project Templates][docstudio]
* [Ergo Language Guide][docergo]

## Contributing

The Accord Project technology is being developed as open source. All the software packages are being actively maintained on GitHub and we encourage organizations and individuals to contribute requirements, documentation, issues, new templates, and code.

Find out what’s coming on our [blog][apblog].

Join the Accord Project Technology Working Group [Slack channel][apslack] to get involved!

For code contributions, read our [CONTRIBUTING guide][contributing] and information for [DEVELOPERS][developers].

## License <a name="license"></a>

Accord Project source code files are made available under the [Apache License, Version 2.0][apache].
Accord Project documentation files are made available under the [Creative Commons Attribution 4.0 International License][creativecommons] (CC-BY-4.0).

[CommonMark]: https://commonmark.org
[slate]: https://docs.slatejs.org/

[linuxfound]: https://www.linuxfoundation.org
[charter]: https://github.com/accordproject/markdown-editor/blob/master/CHARTER.md
[apmain]: https://accordproject.org/ 
[apworkgroup]: https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjZvYzIzZHVrYnI1aDVzbjZnMHJqYmtwaGlfMjAxNzExMTVUMjEwMDAwWiBkYW5AY2xhdXNlLmlv&tmsrc=dan%40clause.io
[apblog]: https://medium.com/@accordhq
[apnews]: https://www.accordproject.org/news/
[apgit]:  https://github.com/accordproject/
[apdoc]: https://docs.accordproject.org/
[apslack]: https://accord-project-slack-signup.herokuapp.com

[docspec]: https://docs.accordproject.org/docs/spec-overview.html
[docwelcome]: https://docs.accordproject.org/docs/accordproject.html
[dochighlevel]: https://docs.accordproject.org/docs/spec-concepts.html
[docergo]: https://docs.accordproject.org/docs/logic-ergo.html
[docstart]: https://docs.accordproject.org/docs/accordproject.html
[doccicero]: https://docs.accordproject.org/docs/basic-use.html
[docstudio]: https://docs.accordproject.org/docs/advanced-latedelivery.html

[contributing]: https://github.com/accordproject/markdown-editor/blob/master/CONTRIBUTING.md
[developers]: https://github.com/accordproject/markdown-editor/blob/master/DEVELOPERS.md

[apache]: https://github.com/accordproject/template-studio-v2/blob/master/LICENSE
[creativecommons]: http://creativecommons.org/licenses/by/4.0/