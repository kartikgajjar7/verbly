import { withProps } from "@udecode/cn";
import {
  createPlugins,
  Plate,
  RenderAfterEditable,
  PlateElement,
  PlateLeaf,
} from "@udecode/plate-common";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from "@udecode/plate-heading";
import {
  createBlockquotePlugin,
  ELEMENT_BLOCKQUOTE,
} from "@udecode/plate-block-quote";
import {
  createCodeBlockPlugin,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
} from "@udecode/plate-code-block";
import {
  createHorizontalRulePlugin,
  ELEMENT_HR,
} from "@udecode/plate-horizontal-rule";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import {
  createImagePlugin,
  ELEMENT_IMAGE,
  createMediaEmbedPlugin,
  ELEMENT_MEDIA_EMBED,
} from "@udecode/plate-media";
import { createCaptionPlugin } from "@udecode/plate-caption";
import {
  createTodoListPlugin,
  ELEMENT_TODO_LI,
  createListPlugin,
  ELEMENT_UL,
  ELEMENT_OL,
  ELEMENT_LI,
} from "@udecode/plate-list";
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from "@udecode/plate-excalidraw";
import { createTogglePlugin, ELEMENT_TOGGLE } from "@udecode/plate-toggle";
import {
  createColumnPlugin,
  ELEMENT_COLUMN_GROUP,
  ELEMENT_COLUMN,
} from "@udecode/plate-layout";
import {
  createMentionPlugin,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
} from "@udecode/plate-mention";
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TR,
  ELEMENT_TD,
  ELEMENT_TH,
} from "@udecode/plate-table";
import {
  createBoldPlugin,
  createItalicPlugin,
  MARK_ITALIC,
  createUnderlinePlugin,
  MARK_UNDERLINE,
  createStrikethroughPlugin,
  MARK_STRIKETHROUGH,
  createCodePlugin,
  MARK_CODE,
  createSubscriptPlugin,
  MARK_SUBSCRIPT,
  createSuperscriptPlugin,
  MARK_SUPERSCRIPT,
} from "@udecode/plate-basic-marks";
import {
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createFontSizePlugin,
} from "@udecode/plate-font";
import {
  createHighlightPlugin,
  MARK_HIGHLIGHT,
} from "@udecode/plate-highlight";
import { createKbdPlugin, MARK_KBD } from "@udecode/plate-kbd";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createDeletePlugin } from "@udecode/plate-select";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import {
  createCommentsPlugin,
  CommentsProvider,
  MARK_COMMENT,
} from "@udecode/plate-comments";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeCsvPlugin } from "@udecode/plate-serializer-csv";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createJuicePlugin } from "@udecode/plate-juice";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BlockquoteElement } from "../plate-ui/blockquote-element";
import { CodeBlockElement } from "../plate-ui/code-block-element";
import { CodeLineElement } from "../plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "../plate-ui/code-syntax-leaf";
import { ExcalidrawElement } from "../plate-ui/excalidraw-element";
import { HrElement } from "../plate-ui/hr-element";
import { ImageElement } from "../plate-ui/image-element";
import { LinkElement } from "../plate-ui/link-element";
import { LinkFloatingToolbar } from "../plate-ui/link-floating-toolbar";
import { ToggleElement } from "../plate-ui/toggle-element";
import { ColumnGroupElement } from "../plate-ui/column-group-element";
import { ColumnElement } from "../plate-ui/column-element";
import { HeadingElement } from "../plate-ui/heading-element";
import { ListElement } from "../plate-ui/list-element";
import { MediaEmbedElement } from "../plate-ui/media-embed-element";
import { MentionElement } from "../plate-ui/mention-element";
import { MentionInputElement } from "../plate-ui/mention-input-element";
import { ParagraphElement } from "../plate-ui/paragraph-element";
import { TableElement } from "../plate-ui/table-element";
import { TableRowElement } from "../plate-ui/table-row-element";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "../plate-ui/table-cell-element";
import { TodoListElement } from "../plate-ui/todo-list-element";
import { CodeLeaf } from "../plate-ui/code-leaf";
import { CommentLeaf } from "../plate-ui/comment-leaf";
import { CommentsPopover } from "../plate-ui/comments-popover";
import { HighlightLeaf } from "../plate-ui/highlight-leaf";
import { KbdLeaf } from "../plate-ui/kbd-leaf";
import { Editor } from "../plate-ui/editor";
import { FixedToolbar } from "../plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "../plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "../plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "../plate-ui/floating-toolbar-buttons";
import { withPlaceholders } from "../plate-ui/placeholder";
import { withDraggables } from "../plate-ui/with-draggables";
import { TooltipProvider } from "../plate-ui/tooltip";

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHorizontalRulePlugin(),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
    createImagePlugin(),
    createCaptionPlugin({
      options: {
        pluginKeys: [
          // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
        ],
      },
    }),
    createTodoListPlugin(),
    createExcalidrawPlugin(),
    createTogglePlugin(),
    createColumnPlugin(),
    createListPlugin(),
    createMediaEmbedPlugin(),
    createMentionPlugin(),
    createTablePlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    createSubscriptPlugin(),
    createSuperscriptPlugin(),
    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createFontSizePlugin(),
    createHighlightPlugin(),
    createKbdPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
          ],
        },
      },
    }),
    createLineHeightPlugin({
      inject: {
        props: {
          defaultNodeValue: 1.5,
          validNodeValues: [1, 1.2, 1.5, 2, 3],
          validTypes: [
            ELEMENT_PARAGRAPH,
            // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
          ],
        },
      },
    }),
    createAutoformatPlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/autoformat
        ],
        enableUndoOnDelete: true,
      },
    }),
    createBlockSelectionPlugin({
      options: {
        sizes: {
          top: 0,
          bottom: 0,
        },
      },
    }),
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createEmojiPlugin(),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: "mod+enter",
          },
          {
            hotkey: "mod+shift+enter",
            before: true,
          },
          {
            hotkey: "enter",
            query: {
              start: true,
              end: true,
              // allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createNodeIdPlugin(),
    createResetNodePlugin({
      options: {
        rules: [
          // Usage: https://platejs.org/docs/reset-node
        ],
      },
    }),
    createDeletePlugin(),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: "shift+enter" },
          {
            hotkey: "enter",
            query: {
              allow: [
                // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
              ],
            },
          },
        ],
      },
    }),
    createTabbablePlugin(),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createCommentsPlugin(),
    createDeserializeDocxPlugin(),
    createDeserializeCsvPlugin(),
    createDeserializeMdPlugin(),
    createJuicePlugin(),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
        [ELEMENT_CODE_BLOCK]: CodeBlockElement,
        [ELEMENT_CODE_LINE]: CodeLineElement,
        [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
        [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
        [ELEMENT_HR]: HrElement,
        [ELEMENT_IMAGE]: ImageElement,
        [ELEMENT_LINK]: LinkElement,
        [ELEMENT_TOGGLE]: ToggleElement,
        [ELEMENT_COLUMN_GROUP]: ColumnGroupElement,
        [ELEMENT_COLUMN]: ColumnElement,
        [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
        [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
        [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
        [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
        [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
        [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
        [ELEMENT_UL]: withProps(ListElement, { variant: "ul" }),
        [ELEMENT_OL]: withProps(ListElement, { variant: "ol" }),
        [ELEMENT_LI]: withProps(PlateElement, { as: "li" }),
        [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
        [ELEMENT_MENTION]: MentionElement,
        [ELEMENT_MENTION_INPUT]: MentionInputElement,
        [ELEMENT_PARAGRAPH]: ParagraphElement,
        [ELEMENT_TABLE]: TableElement,
        [ELEMENT_TR]: TableRowElement,
        [ELEMENT_TD]: TableCellElement,
        [ELEMENT_TH]: TableCellHeaderElement,
        [ELEMENT_TODO_LI]: TodoListElement,
        [MARK_CODE]: CodeLeaf,
        [MARK_COMMENT]: CommentLeaf,
        [MARK_HIGHLIGHT]: HighlightLeaf,
        [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
        [MARK_KBD]: KbdLeaf,
        [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
        [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
        [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
        [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
      })
    ),
  }
);

const initialValue = [
  {
    id: "1",
    type: "p",
    children: [{ text: "Hello, World!" }],
  },
];

export default function BlogEditor() {
  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="px-24 py-12 flex flex-col items-center gap-10">
          <CommentsProvider users={{}} myUserId="1">
            <Plate plugins={plugins} initialValue={initialValue}>
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>

              <Editor />

              <FloatingToolbar className="z-40">
                <FloatingToolbarButtons />
              </FloatingToolbar>
              <CommentsPopover />
            </Plate>
          </CommentsProvider>
        </div>
      </DndProvider>
    </TooltipProvider>
  );
}