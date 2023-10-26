import Compressor from 'compressorjs';

export const compressProfileImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const success = (compressedFile: any) => {
      if (!compressedFile.lastModified) {
        compressedFile.lastModified = Date.now();
      }

      if (!compressedFile.name) {
        compressedFile.name = file.name;
      }
      resolve(compressedFile as File);
    };

    const error = (error: Error) => {
      reject(error);
    };

    const options: Compressor.Options = {
      maxWidth: 300,
      maxHeight: 300,
      minWidth: 300,
      minHeight: 300,
      quality: 1,
      convertSize: Infinity,
      mimeType: 'image/jpeg',
      success,
      error,
    };
    new Compressor(file, options);
  });
};
