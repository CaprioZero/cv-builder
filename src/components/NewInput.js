import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import i18next from 'i18next'

const NewInput = React.forwardRef(({ style, className, ...props }, ref) => {
  const editorRef = useRef(null)

  return (
    <div style={{ width: "100%", padding: "5px" }} className={className} ref={ref}>
      <Editor
        onMouseDown={e => e.stopPropagation()}
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        inline
        init={{
          menubar: true,
          placeholder: i18next.t("section2_placeholder"),
          height: "900",
          plugins: [
            'advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks emoticons',
            'insertdatetime media table paste code hr'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | hr | emoticons',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:20px }'
        }}
      />
    </div>
  );
})

export default NewInput