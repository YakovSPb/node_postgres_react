import React, {FC, useRef} from "react";
import {FileDrop as FileDropContainer}  from 'react-file-drop'
import Button from "@mui/material/Button";
import {formatBytes} from "../../utils/formatBytes";
import {checkFormatTypeFile} from "../../utils/checkFormatTypeFile";
import {useSnackbar} from "notistack";
import {IGetBase64} from "../../types";
import Box from "@mui/material/Box";

type FileDropProps = {
    selectedFile: File | null
    setSelectedFile: (file: File) => void
}
const FileDrop:FC<FileDropProps> = ({selectedFile, setSelectedFile}) =>  {
    const { enqueueSnackbar } = useSnackbar()
    const inputFileRef = useRef(null)

    const onChangeFile = (fileObject: FileList | null) => {

        // @ts-ignore
        const file = fileObject[0]
        const currentFileSize = formatBytes(file?.size)
        if(!checkFormatTypeFile(file.name)){
            enqueueSnackbar(
                'Available image formats: png, jpeg, jpg',
                {
                    variant: 'error',
                },
            )
            return
        }

        if(1024 < currentFileSize){
            enqueueSnackbar(
                'Maximum image size 1mb',
                {
                    variant: 'error',
                },
            )
            return
        }

        if (!file) {
            return
        }
        setSelectedFile(file)
    }

    return (
        <div className={'mt-5'}>
            <FileDropContainer
                onDrop={(files) => onChangeFile(files)}
            >
                <Button
                    className={'h-[100px] w-full normal-case rounded-none bg-col-9 border border-dashed border-cal-1 ' +
                        'p-0 [&>span]:h-full'}
                >
                    <label
                        className={'grid place-items-center h-full w-full cursor-pointer'}
                        htmlFor="contained-button-file"
                    >
                        <div className={'text-col-3'}>
                            select a file or transfer it here
                        </div>
                    </label>
                </Button>
            </FileDropContainer>
            <input
                id="contained-button-file"
                ref={inputFileRef}
                type="file"
                onChange={(e) => onChangeFile(e?.target.files)}
                // @ts-ignore
                // onClick={(e) => e?.target?.files = []}
                hidden
            />
        </div>
    );
}
export default FileDrop;
