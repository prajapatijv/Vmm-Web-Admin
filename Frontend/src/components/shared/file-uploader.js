import React from 'react'
import PropTypes from 'prop-types'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

import 'filepond/dist/filepond.min.css'
import './file-uploader.scss'

// Register the plugin
registerPlugin(FilePondPluginFileValidateType)
registerPlugin(FilePondPluginFileValidateSize)

export const FileUpolader = (props) => {

    const onProcessFile = (error, file) => {
        props.onProcessFile(error, file)
    }

    const onInit = () => {
        props.onProcessFile(null, { serverId: props.savedFileName} )
    }

    return (
        <div className="container-filepond">
            <h5><span className="badge badge-light">{props.savedFileName}</span></h5>
            <FilePond name={props.name}
                    acceptedFileTypes={props.acceptedFileTypes}
                    server={props.serverPath}
                    onprocessfile={onProcessFile}
                    oninit={() => onInit()}
                    allowMultiple={props.allowMultiple}
                    labelIdle={props.label}
                    maxFileSize={props.maxFileSize}
                    {...props} />
        </div>
    )
};

FileUpolader.propTypes = {
    acceptedFileTypes: PropTypes.array,
    name: PropTypes.string,
    serverPath: PropTypes.string,
    onProcessFile: PropTypes.func,
    allowMultiple: PropTypes.bool,
    label: PropTypes.string,
    maxFileSize: PropTypes.string,
    savedFileName: PropTypes.string
}