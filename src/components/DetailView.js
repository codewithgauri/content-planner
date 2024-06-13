import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

const DetailView = ({ data, onBack }) => {
    const downloadContent = async () => {
        const response = await axios.get(data.media, { responseType: 'blob' });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg h-screen overflow-y-auto relative">
            <button onClick={onBack} className="text-blue-500 hover:underline mb-4 mt-5 absolute top-4 right-4">
                Back
            </button>
            <h1 className="text-2xl font-bold mb-4">{data.Notes}</h1>
            <div className="mb-4 ">
                <pre>{data.content}</pre>
            </div>
            <div className="flex justify-end mt-10">
                <CopyToClipboard text={data.content}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Copy Content
                    </button>
                </CopyToClipboard>
                <button onClick={downloadContent} className="bg-green-500 text-white px-4 py-2 rounded ml-4 hover:bg-green-600">
                    Download Media/PDF
                </button>
            </div>
            <div className="mt-4">
                <iframe
                    src={data.media}
                    title="PDF Preview"
                    className="w-full h-96 border-2 border-gray-300"
                ></iframe>
            </div>

        </div>
    );
};

export default DetailView;
