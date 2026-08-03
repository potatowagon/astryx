// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

/**
 * @file RichTextEditorLinkTargetPlugin.tsx
 * @input Uses `@lexical/link` (LinkNode/AutoLinkNode) and the composer context.
 * @output Exports `RichTextEditorLinkTargetPlugin` and the testable
 *   `setLinkOpensInNewTab` helper.
 * @position Experimental (lab). Drop into RichTextEditor's `plugins` slot to
 *   make every rendered link open in a new tab. Safe in editable and read-only
 *   editors alike — it patches rendered DOM only, never node data, so there is
 *   no onChange/persist/serialization side effect.
 *
 * SYNC: When modified, update:
 * - /packages/lab/src/RichTextEditor/index.ts (exports)
 * - /packages/lab/src/index.ts (barrel re-export)
 * - /packages/lab/src/RichTextEditor/RichTextEditor.doc.mjs (usage notes)
 * - /packages/lab/src/RichTextEditor/RichTextEditor.test.tsx (tests)
 *
 * NOTE: Experimental `@astryxdesign/lab` component (canary). `lexical` and
 * `@lexical/*` are OPTIONAL peer dependencies — install them to use this.
 *
 * COMPATIBILITY: A direct port of EPS eps-lexical's `EPSLinkTargetPlugin`
 * (nest/libs/eps/src/components/EPSLinkTargetPlugin.tsx, T279595807). EPS uses
 * it so links authored in EPS rich text — including content loaded via
 * `initialEditorState` — open in a new tab rather than navigating away in the
 * current tab. Keeping an identical plugin in astryx means the eventual swap of
 * EPS internals for the astryx editor preserves link-target behaviour exactly.
 *
 * Why patch the DOM rather than the node? LinkNode/AutoLinkNode come from the
 * upstream `@lexical/link` package, and Lexical drives "open in new tab" from a
 * per-link `target` field with no global switch. Retargeting already-existing
 * nodes (loaded content) without a non-standard serialized node type means
 * patching the rendered anchor DOM, as done here.
 */

import type {Klass, LexicalEditor} from 'lexical';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import {useEffect} from 'react';

/**
 * Force a rendered link anchor to open in a new tab: sets `target="_blank"` and
 * `rel="noopener noreferrer"` (the latter is required whenever `target="_blank"`
 * is set, to prevent reverse-tabnabbing). No-op for anything that is not an
 * anchor element (e.g. an unlinked AutoLinkNode renders as a `<span>`).
 * Exported so the DOM behavior can be unit-tested without a full editor.
 */
export function setLinkOpensInNewTab(dom: HTMLElement | null): void {
  if (dom instanceof HTMLAnchorElement) {
    dom.setAttribute('target', '_blank');
    dom.setAttribute('rel', 'noopener noreferrer');
  }
}

function retargetLinks<T extends LinkNode>(
  editor: LexicalEditor,
  NodeClass: Klass<T>,
): () => void {
  return editor.registerMutationListener(
    NodeClass,
    mutations => {
      for (const [nodeKey, mutation] of mutations) {
        if (mutation !== 'destroyed') {
          setLinkOpensInNewTab(editor.getElementByKey(nodeKey));
        }
      }
    },
    // `{skipInitialization: false}` so links already present when the plugin
    // mounts are retargeted too — e.g. read-only content applied via
    // `defaultValue`/`initialEditorState`, which Lexical's default
    // (`skipInitialization: true`) would otherwise skip.
    {skipInitialization: false},
  );
}

/**
 * Make every link in the editor open in a new tab. Render inside the editor's
 * `plugins` slot. Reaches the editor via `useLexicalComposerContext()`, so it
 * must live within the editor's `LexicalComposer`.
 *
 * @example
 * ```
 * import {RichTextEditor, RichTextEditorLinkTargetPlugin} from '@astryxdesign/lab';
 *
 * <RichTextEditor
 *   label="Notes"
 *   plugins={<RichTextEditorLinkTargetPlugin />}
 * />
 * ```
 */
export function RichTextEditorLinkTargetPlugin(): null {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    const unregisterLink = retargetLinks(editor, LinkNode);
    const unregisterAutoLink = retargetLinks(editor, AutoLinkNode);
    return () => {
      unregisterLink();
      unregisterAutoLink();
    };
  }, [editor]);
  return null;
}

RichTextEditorLinkTargetPlugin.displayName = 'RichTextEditorLinkTargetPlugin';
