import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { gql, useMutation } from '@apollo/client';
import {
  IMutation,
  IMutationUploadFileArgs,
} from '@/commons/types/generated/types';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
interface IImageProps {
  onChangeInputImage: (url: string) => void;
}
const ButtonStyle = styled.button`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 20px;
  border-color: gray;
  :hover {
    border-color: black;
  }
`;
export default function ImageUpload(props: IImageProps) {
  const ImageUploadButton = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState('');
  const onClickImageUploadButton = () => {
    ImageUploadButton.current?.click();
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(event.target);

    if (file && file.size > 5 * 1024 * 1024) {
      window.alert('파일이 5mb를 초과합니다.');
      return;
    }
    if (!file?.size) {
      window.alert('파일이 없습니다.');
      return;
    }
    if (!file?.type.includes('png') && !file?.type.includes('jpeg')) {
      window.alert('파일 형식이 잘못되었습니다. png,jpeg만 가능합니다.');
      return;
    }
    try {
      const result = await uploadFile({ variables: { file } });
      const url = result.data?.uploadFile.url;
      url && props.onChangeInputImage(url);
      url && setImageUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {imageUrl ? (
        <img
          src={`https://storage.googleapis.com/${imageUrl}`}
          onClick={onClickImageUploadButton}
          style={{ width: '80px', height: '80px' }}
        />
      ) : (
        <ButtonStyle onClick={onClickImageUploadButton}>
          사진
          <br />
          첨부
        </ButtonStyle>
      )}
      <input
        type='file'
        ref={ImageUploadButton}
        style={{ display: 'none' }}
        onChange={onChangeFile}
      />
    </div>
  );
}
