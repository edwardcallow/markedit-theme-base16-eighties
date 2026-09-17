import { EditorView } from '@codemirror/view';
import { overrideThemes } from 'markedit-theming';

const lightColors = {
  editor: {
    textColor: '#515151',
    backgroundColor: '#F2F0EC',
    activeLineBackground: '#7473691A',
    caretColor: '#515151',
    selectionBackground: '#E8E6DF',
    matchingBracketBackground: '#5787B633',
    gutterText: '#D3D0C8',
    gutterBackground: '#F2F0EC',
    foldPlaceholderText: '#A09F93',
    foldPlaceholderBackground: '#E8E6DF',
    searchMatchBackground: '#ECCA8B80',
    selectionMatchBackground: '#E8E6DF',
    visibleSpaceColor: '#D3D0C8',
  },

  highlight: {
    heading: '#5787B6',
    bold: '#515151',
    italic: '#515151',
    strikethrough: '#A09F93',
    quote: '#515151',
    link: '#C8595D',
    divider: '#515151',

    comment: '#A09F93',
    meta: '#A09F93',
    keyword: '#875C87',
    atom: '#CE8D6A',
    literal: '#CE8D6A',
    string: '#5B9C5C',
    special: '#5BA8A8',

    variable: '#515151',
    local: '#515151',
    type: '#875C87',
    class: '#CE8D6A',
    macro: '#875C87',
    property: '#875C87',
    label: '#875C87',
    operator: '#C8595D',
    constant: '#CE8D6A',
    instruction: '#875C87',
    invalid: '#C8595D',
  },

  allowsFallback: true,
};

const darkColors = {
  editor: {
    textColor: '#D3D0C8',
    backgroundColor: '#2D2D2D',
    activeLineBackground: '#7473691A',
    caretColor: '#D3D0C8',
    selectionBackground: '#515151',
    matchingBracketBackground: '#515151',
    gutterText: '#747369',
    gutterBackground: '#2D2D2D',
    foldPlaceholderText: '#A09F93',
    foldPlaceholderBackground: '#393939',
    searchMatchBackground: '#FFCC6655',
    selectionMatchBackground: '#515151',
    visibleSpaceColor: '#747369',
  },

  highlight: {
    heading: '#66CCCC',
    bold: '#D3D0C8',
    italic: '#D3D0C8',
    strikethrough: '#747369',
    quote: '#D3D0C8',
    link: '#F2777A',
    divider: '#515151',

    comment: '#747369',
    meta: '#A09F93',
    keyword: '#CC99CC',
    atom: '#F99157',
    literal: '#F99157',
    string: '#99CC99',
    special: '#66CCCC',

    variable: '#E8E6DF',
    local: '#E8E6DF',
    type: '#CC99CC',
    class: '#FFCC66',
    macro: '#CC99CC',
    property: '#CC99CC',
    label: '#CC99CC',
    operator: '#F2777A',
    constant: '#F99157',
    instruction: '#CC99CC',
    invalid: '#F2777A',
  },

  allowsFallback: true,
};

const lightMarkdown = EditorView.theme({
  '.cm-md-url': {
    color: '#CE8D6A',
  },

  '.cm-md-inlineCode': {
    color: '#5B9C5C',
  },

  '.cm-md-listMark': {
    color: '#C8595D',
  },

  '.cm-md-taskMarker, .cm-md-taskMarker-checked, .cm-md-taskMarker-unchecked': {
    color: '#C8595D',
  },

  '.cm-md-quote': {
    backgroundColor: 'rgba(211, 208, 200, 0.12)',
  },

  '.cm-md-quoteMark': {
    color: '#D3D0C8',
  },

  '.cm-md-codeBlockWrapper': {
    backgroundColor: 'rgba(211, 208, 200, 0.12)',
  },

  '.cm-md-horizontalRule': {
    color: '#515151',
  },

  '.cm-md-frontMatterWrapper': {
    backgroundColor: 'rgba(211, 208, 200, 0.12)',
  },

  '.cm-md-frontMatter': {
    color: '#A09F93',
  },
}, {
  dark: false,
});

const darkMarkdown = EditorView.theme({
  '.cm-md-url': {
    color: '#F99157',
  },

  '.cm-md-inlineCode': {
    color: '#99CC99',
  },

  '.cm-md-listMark': {
    color: '#F2777A',
  },

  '.cm-md-taskMarker, .cm-md-taskMarker-checked, .cm-md-taskMarker-unchecked': {
    color: '#F2777A',
  },

  '.cm-md-quote': {
    backgroundColor: 'rgba(81, 81, 81, 0.10)',
  },

  '.cm-md-quoteMark': {
    color: '#D3D0C8',
  },

  '.cm-md-codeBlockWrapper': {
    backgroundColor: 'rgba(81, 81, 81, 0.10)',
  },

  '.cm-md-horizontalRule': {
    color: '#515151',
  },

  '.cm-md-frontMatterWrapper': {
    backgroundColor: 'rgba(81, 81, 81, 0.10)',
  },

  '.cm-md-frontMatter': {
    color: '#747369',
  },
}, {
  dark: true,
});

overrideThemes({
  light: {
    extension: lightMarkdown,
    colors: lightColors,
  },

  dark: {
    extension: darkMarkdown,
    colors: darkColors,
  },

  options: {
    settingsKey: 'extension.markeditThemeBase16Eighties',
  },
});