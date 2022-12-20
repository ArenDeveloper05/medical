import { useEffect, useRef } from "react";

function Editor({
  editorValue,
  setEditorValue,
  editorLoaded,
  setEditorLoaded,
}) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("../../ckeditor5-build-with-htmlembed-master"),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={"editor"}
          className="mt-3 wrap-ckeditor"
          editor={ClassicEditor}
          data={editorValue}
          onChange={(event, editor) => {
            const data = editor.getData();
            setEditorValue(data);
          }}
        />
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Editor;
