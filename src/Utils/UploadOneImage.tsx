import Image from "next/image";
import { useState } from "react";

export default function UploadOneImage({imageUrl,setImageUrl}: {imageUrl: string;setImageUrl: (url: string) => void;}) {
  const [preview, setPreview] = useState<string>(imageUrl);

  const handleUpload = async (file: File | null) => {
    if (!file) return;

    // Preeview Image Before Upload
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );
    //Upload Image On Cloud
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const data = await res.json();
    setImageUrl(data.secure_url); 
  };

  return (
    <div className="w-full flex justify-center" >
      <label htmlFor="uploadimage" className="cursor-pointer" title="Upload One Image">
        <input
          type="file"
          id="uploadimage"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleUpload(e.target.files?.[0] || null)}
        />
        <Image loading="lazy"
          src={preview || imageUrl || "https://static.vecteezy.com/system/resources/previews/009/875/156/large_2x/3d-picture-icon-blue-white-color-free-png.png"}
          alt="Uploaded"
          width={150}
          height={100}
        />
      </label>
    </div>
  );
}
