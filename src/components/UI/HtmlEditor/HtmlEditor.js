import React from "react";
import { Editor } from '@tinymce/tinymce-react';

export default function HtmlEditor(props) {
  return (
    <Editor
      apiKey="mpwy3nsm2mprtaw78ms2bq24favhyd5ik6vdj6qt7otsi572"
      initialValue="<p>This is the initial content of the editor</p>"
      init={{
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar: `undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | code | link image | \
            bullist numlist outdent indent | removeformat | help`,
      }}
      {...props}
    />
  );
}
