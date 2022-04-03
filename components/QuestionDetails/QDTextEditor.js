import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { Container, FormHelperText } from '@mui/material'

export default class QDTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render() {
    const { editorState } = this.state
    this.props.blogData(
      draftToHtml(convertToRaw(editorState?.getCurrentContent()))
    )
    const blogData = (e) => {
      console.log(e)
    }
    return (
      <>
        <div className="">
          {/* <h2 className="mb-2 text-xl text-Docy-Dark dark:text-white">
            Include all the information someone would need to answer your
            question🌝
          </h2> */}
          <FormHelperText sx={{ color: 'gray' }}>
            Please give a authentic answer 🌝
          </FormHelperText>
          <div
            className="rounded-lg border bg-white px-2 text-Docy-Dark "
            style={{
              minHeight: '400px',
              // backgroundColor: '#f7f4ec',
            }}
          >
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
          {/* <div
            className="text-Docy-Dark dark:text-white"
            dangerouslySetInnerHTML={{
              __html: `${draftToHtml(
                convertToRaw(editorState?.getCurrentContent())
              )}`,
            }}
          ></div> */}
        </div>
      </>
    )
  }
}
