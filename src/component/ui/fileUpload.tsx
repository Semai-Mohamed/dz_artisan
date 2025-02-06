import React, { useState, useRef, DragEvent, ChangeEvent } from 'react';
import img6 from '../../../public/images/Upload icon.svg';
import Image from 'next/image';
const SUPPORTED_FORMATS = [
  'image/jpeg', 
  'image/png', 
  'image/gif', 
  'video/mp4', 
  'application/pdf', 
  'image/vnd.adobe.photoshop',
  'application/illustrator',
  'application/msword', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation'
];
interface FileUploadProps {
    onFileUpload?: (file: File | null) => void;
  }
  
  const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileSelect = (file: File) => {
    if (SUPPORTED_FORMATS.includes(file.type)) {
      setSelectedFile(file);
      onFileUpload?.(file); // Notify parent component
  
      if (file.type.startsWith('image/')) {
        // If it's an image, generate a preview
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        // If it's a document, set preview URL as null (or show a document icon)
        setPreviewUrl(null);
      }
    } else {
      alert("Unsupported file format. Please upload an image or document.");
    }
  };
  const handleDivClick = () => {
    fileInputRef.current?.click()}
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }}
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation()}
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0])}}
      const handleRemoveFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedFile(null);
        setPreviewUrl(null);
        onFileUpload?.(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      };
    
  const handleOpenFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      window.open(fileUrl, '_blank');
      setTimeout(() => {
        URL.revokeObjectURL(fileUrl);
      }, 100)}}
  return (
    <div className="w-full flex flex-col border border-dashed border-[rgba(0,167,157,1)] rounded-md bg-[rgba(0,167,157,0.03)] h-[220px] justify-center items-center cursor-pointer p-4"onDragOver={handleDragOver} onDrop={handleDrop}       onClick={handleDivClick}>
      <input  type="file"ref={fileInputRef}onChange={handleFileInputChange}className="hidden"accept={SUPPORTED_FORMATS.join(',')} />
      {selectedFile ? (
        <div 
          className="flex flex-col justify-center items-center text-center w-full h-full">
          {previewUrl ? (
            <div className="relative mb-4">
              <img  alt="File preview"  src={previewUrl} className="w-[100px] h-[100px] object-cover rounded-md"/>
              <button   onClick={handleRemoveFile} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs" >
                X
              </button>
            </div>
          ) : (
            <div className="mb-4 text-[rgba(65,65,65,1)]">File selected: {selectedFile.name}</div>
          )}
          <div className="text-[rgba(65,65,65,1)] mb-2 font-medium">
            {selectedFile.name}
          </div>
          <div className="flex space-x-2 mt-2">
            <button onClick={handleOpenFile}className="bg-[rgba(0,167,157,1)] text-white px-3 py-1 rounded-md text-xs" >
              Open File
            </button>
          
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center w-full h-full">
          <div className="mb-4">
            <Image alt="" src={img6} className="w-[100px] h-[100px] object-contain" />
          </div>
          <div className="text-[rgba(65,65,65,1)] mb-2">
            Drag & drop files or <a href="#" className="ml-1 text-[rgba(0,167,157,1)]">Browse</a>
          </div>
          <div className="text-[rgba(103,103,103,0.8)] font-thin text-xs">
            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
          </div>
        </div>
      )}
    </div>
  );
};
export default FileUpload;