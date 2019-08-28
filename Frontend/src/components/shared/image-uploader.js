import React from 'react'
import PropTypes from 'prop-types'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugin
registerPlugin(FilePondPluginFileValidateType)
registerPlugin(FilePondPluginImagePreview)
registerPlugin(FilePondPluginFileValidateSize)

export const ImageUpolader = (props) => {

    const onProcessFile = (error, file) => {
        props.onProcessFile(error, file)
    }


    return (
        <div>
            <FilePond name={props.name}
                acceptedFileTypes={props.acceptedFileTypes}
                server={props.serverPath}
                onprocessfile={onProcessFile}
                allowMultiple={props.allowMultiple} 
                labelIdle={props.label}
                maxFileSize={props.maxFileSize}
                {...props}/>        
        </div>
    )
};

ImageUpolader.propTypes = {
    acceptedFileTypes: PropTypes.array,
    name: PropTypes.string,
    serverPath: PropTypes.string,
    onProcessFile: PropTypes.func,
    allowMultiple: PropTypes.bool,
    label: PropTypes.string,
    maxFileSize: PropTypes.string
}