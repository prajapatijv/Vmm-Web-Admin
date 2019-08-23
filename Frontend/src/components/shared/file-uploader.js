import React from 'react'
import PropTypes from 'prop-types'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import 'filepond/dist/filepond.min.css'

// Register the plugin
registerPlugin(FilePondPluginFileValidateType)

export const FileUpolader = (props) => {

    const onProcessFile = (error, file) => {
        props.onProcessFile(error, file)
    }


    return (
        <div>
            <FilePond name={props.name}
                acceptedFileTypes={['application/pdf']}
                server={props.serverPath}
                onprocessfile={onProcessFile}
                allowMultiple={props.allowMultiple} 
                labelIdle={props.label}
                {...props}/>        
        </div>
    )
};

FileUpolader.propTypes = {
    name: PropTypes.string,
    serverPath: PropTypes.string,
    onProcessFile: PropTypes.func,
    allowMultiple: PropTypes.bool,
    label: PropTypes.string
}