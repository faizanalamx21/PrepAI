import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface ResumeDropzoneProps {
  onFileSelect: (file: File) => void;
}

export default function ResumeDropzone({
  onFileSelect,
}: ResumeDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`mt-8 cursor-pointer rounded-2xl border-2 border-dashed p-16 transition ${
        isDragActive
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-cyan-500/30 bg-slate-950"
      }`}
    >
      <input {...getInputProps()} />

      <UploadCloud
        size={56}
        className="mx-auto text-cyan-400"
      />

      <h3 className="mt-6 text-2xl font-semibold text-white">
        Drag & Drop Resume
      </h3>

      <p className="mt-3 text-slate-400">
        or click anywhere to browse
      </p>

      <p className="mt-2 text-sm text-slate-500">
        PDF • DOCX • Max 5 MB
      </p>
    </div>
  );
}