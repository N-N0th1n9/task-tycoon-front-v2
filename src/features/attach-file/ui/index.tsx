'use client'

import { useRef, useState } from 'react'

import AttachFileBar from './attach-file-bar'
import AttachFileButton from './attach-file-btn'

const AttachFile = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = () => {
    if (fileInputRef.current?.files?.length) {
      setSelectedFile(fileInputRef.current.files[0])
      sendData(fileInputRef.current.files[0])
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    sendData(null)
  }

  const handleDownloadFile = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile)
      const link = document.createElement('a')
      link.href = url
      link.download = selectedFile.name
      link.click()
      URL.revokeObjectURL(url)
    }
  }

  const sendData = (file: File | null) => {
    console.log('Файл отправлен:', file)
  }

  return selectedFile ? (
    <AttachFileBar
      label={selectedFile.name}
      deleteBtnProps={{ onClick: handleRemoveFile }}
      downloadBtnProps={{ onClick: handleDownloadFile }}
    />
  ) : (
    <>
      <AttachFileButton fileInputRef={fileInputRef} />
      <input
        type='file'
        ref={fileInputRef}
        hidden
        onChange={handleFileChange}
      />
    </>
  )
}

export { AttachFile }
